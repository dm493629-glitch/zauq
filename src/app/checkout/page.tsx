"use client";

import { useState } from "react";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { Button } from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { 
  FaArrowRight, 
  FaWhatsapp, 
  FaTruck, 
  FaCreditCard, 
  FaMoneyBillWave,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLocationDot, // Replaced FaMapMarkerAlt
  FaCircleInfo   // Replaced FaInfoCircle
} from "react-icons/fa6";
import { shopConfig } from "@/data/config";
import { formatPrice, getFinalPrice, getShipping } from "@/lib/price";

const { cities, bankDetails, whatsappNumber } = shopConfig;

export default function CheckoutPage() {
  // 1. Get Cart Data from Redux
  const { cart, totalPrice, adjustedTotalPrice } = useAppSelector(
    (state: RootState) => state.carts
  );

  // 2. Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: cities[0].value, // Default: first city in config
    address: "",
    paymentMethod: "cod", // 'cod' or 'online'
  });

  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  // 3. Shipping Logic
  const shipping = getShipping(formData.city, adjustedTotalPrice);
  const selectedCity = shipping.city;
  const shippingFee = shipping.fee;
  const shippingText = shipping.free ? "FREE" : formatPrice(shippingFee);
  const grandTotal = Math.round(adjustedTotalPrice) + shippingFee;

  // 4. Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // 5. Validation
  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone/WhatsApp number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 6. WhatsApp Message Formatter
  const sendOrderToWhatsApp = () => {
    if (!validate()) return;

    // Generate a random order number (e.g., ORD-482910)
    const orderNumber = "ORD-" + Math.floor(100000 + Math.random() * 900000);

    const itemsText = cart?.items
      .map((item) => {
        const size = item.size ?? item.attributes[0];
        const color = item.color ?? item.attributes[1];
        const specs = [size && `Size: ${size}`, color && `Color: ${color}`].filter(Boolean);
        const specString = specs.length > 0 ? ` (${specs.join(", ")})` : "";
        const lineTotal = getFinalPrice(item.price, item.discount) * item.quantity;
        return `• *${item.name}*${specString} x${item.quantity} - ${formatPrice(lineTotal)}`;
      })
      .join("\n") || "No items";

    const paymentText =
      formData.paymentMethod === "online"
        ? `*Payment Method:* Online Transfer\n*Instruction:* Please transfer ${formatPrice(grandTotal)} to:\nBank: ${bankDetails.bankName}\nTitle: ${bankDetails.accountTitle}\nAcc #: ${bankDetails.accountNumber}\nIBAN: ${bankDetails.iban}\n\n*Action Required:* Please reply with a screenshot of your transaction receipt.`
        : `*Payment Method:* Cash on Delivery (COD)`;

    // FIX: Using pure string break lines (\n) with absolutely no manual '%0A' or URL encodings mixed in here.
    const message = `*🛍️ NEW ORDER RECEIVED*\n\n` +
    `*🆔 Order ID:* ${orderNumber}\n\n` +
      `*👤 CUSTOMER DETAILS:*\n` +
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone Number: ${formData.phone}\n` +
      `City: ${selectedCity.label}\n` +
      `Address: ${formData.address}\n\n` +
      `*📦 ORDER ITEMS:*\n${itemsText}\n\n` +
      `*💰 PRICE BREAKDOWN:*\n` +
      `Subtotal: ${formatPrice(totalPrice)}\n` +
      `Discount: -${formatPrice(totalPrice - adjustedTotalPrice)}\n` +
      `Shipping Charge: ${shippingText}\n` +
      `*GRAND TOTAL: ${formatPrice(grandTotal)}*\n\n` +
      `${paymentText}\n\n` +
      `Thank you for placing your order!`;

    // FIX: Removed the trailing slash after the phone number.
   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
   window.open(whatsappUrl, "_blank");
  };

  // 7. Guard: Empty Cart Redirect
  if (!cart || cart.items.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <FaTruck className="text-6xl text-gray-300 mx-auto mb-4" />
          <h2 className={cn(integralCF.className, "text-2xl font-bold text-black mb-2")}>Cart is Empty</h2>
          <p className="text-gray-500 mb-6">Add some items before checking out.</p>
          <Button asChild className="rounded-full">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pb-20 pt-6">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        {/* Breadcrumb */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-black/50">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><span>/</span></li>
            <li><Link href="/cart" className="hover:underline">Cart</Link></li>
            <li><span>/</span></li>
            <li className="text-black font-medium">Checkout</li>
          </ol>
        </nav>

        <h1 className={cn([integralCF.className, "font-bold text-[32px] md:text-[40px] text-black uppercase mb-8"])}>
          Checkout
        </h1>

        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 items-start">
          
          {/* LEFT COLUMN: Form */}
          <div className="w-full lg:w-2/3 p-5 md:px-6 flex flex-col space-y-6 rounded-[20px] border border-black/10">
            
            {/* Contact Info */}
            <div>
              <h3 className={cn(integralCF.className, "text-lg font-bold text-black mb-4")}>Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <InputGroup className={cn(errors.fullName && "border-red-500")}>
                    <InputGroup.Text>
                      <FaUser className="text-black/40 text-xl" />
                    </InputGroup.Text>
                    <InputGroup.Input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="bg-transparent placeholder:text-black/40"
                    />
                  </InputGroup>
                  {errors.fullName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.fullName}</p>}
                </div>
                
                <div className="flex flex-col">
                  <InputGroup className={cn(errors.email && "border-red-500")}>
                    <InputGroup.Text>
                      <FaEnvelope className="text-black/40 text-xl" />
                    </InputGroup.Text>
                    <InputGroup.Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-transparent placeholder:text-black/40"
                    />
                  </InputGroup>
                  {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div>
              <InputGroup className={cn(errors.phone && "border-red-500")}>
                <InputGroup.Text>
                  <FaPhone className="text-black/40 text-xl" />
                </InputGroup.Text>
                <InputGroup.Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (e.g., 03001234567)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent placeholder:text-black/40"
                />
              </InputGroup>
              {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
            </div>

            <hr className="border-t-black/10 my-2" />

            {/* Shipping Address */}
            <div>
              <h3 className={cn(integralCF.className, "text-lg font-bold text-black mb-4")}>Shipping Address</h3>
              
              {/* City Selector */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-black/70 mb-2">City (Determines Shipping Cost)</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-[#F0F0F0] px-4 py-3 rounded-full text-black outline-none border border-transparent focus:border-black/20 text-sm appearance-none cursor-pointer"
                >
                  {cities.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label} ({getShipping(c.value, adjustedTotalPrice).free ? "FREE" : formatPrice(c.fee)})
                    </option>
                  ))}
                </select>
              </div>

              {/* Textarea Input styled inline with InputGroup styles */}
              <div className={cn("flex w-full bg-[#F0F0F0] px-4 py-3 rounded-[16px] border border-transparent", errors.address && "border-red-500")}>
                <div className="mr-3 pt-1">
                  <FaLocationDot className="text-black/40 text-xl" />
                </div>
                <textarea
                  name="address"
                  placeholder="House #, Street, Area, Landmark..."
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-transparent placeholder:text-black/40 resize-none outline-none text-sm text-black"
                />
              </div>
              {errors.address && <p className="text-red-500 text-xs mt-1 ml-1">{errors.address}</p>}
            </div>

            <hr className="border-t-black/10 my-2" />

            {/* Payment Method */}
            <div>
              <h3 className={cn(integralCF.className, "text-lg font-bold text-black mb-4")}>Payment Method</h3>
              
              <div className="space-y-3">
                {/* COD Option */}
                <label className={cn(
                  "flex items-center p-4 border-2 rounded-[15px] cursor-pointer transition-all",
                  formData.paymentMethod === "cod" 
                    ? "border-black bg-black/5" 
                    : "border-black/10 hover:border-black/30"
                )}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleChange}
                    className="w-5 h-5 text-black border-black/30 focus:ring-black accent-black cursor-pointer"
                  />
                  <div className="ml-4 flex items-center">
                    <FaMoneyBillWave className="text-xl text-black mr-3" />
                    <span className="font-medium text-black text-sm md:text-base">Cash on Delivery (COD)</span>
                  </div>
                </label>

                {/* Online Transfer Option */}
                <label className={cn(
                  "flex items-center p-4 border-2 rounded-[15px] cursor-pointer transition-all",
                  formData.paymentMethod === "online" 
                    ? "border-black bg-black/5" 
                    : "border-black/10 hover:border-black/30"
                )}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={formData.paymentMethod === "online"}
                    onChange={handleChange}
                    className="w-5 h-5 text-black border-black/30 focus:ring-black accent-black cursor-pointer"
                  />
                  <div className="ml-4 flex items-center">
                    <FaCreditCard className="text-xl text-black mr-3" />
                    <span className="font-medium text-black text-sm md:text-base">Online Bank Transfer</span>
                  </div>
                </label>
              </div>

              {/* Online Transfer Details - Conditional Render */}
              {formData.paymentMethod === "online" && (
                <div className="mt-4 p-4 bg-amber-50/60 border border-amber-200 rounded-[15px] space-y-2">
                  <p className="font-bold text-amber-900 flex items-center text-sm md:text-base">
                    <FaCircleInfo className="mr-2" /> Payment Instructions
                  </p>
                  <p className="text-xs md:text-sm text-amber-800">
                    Please transfer the <span className="font-bold">Exact Total Amount ({formatPrice(grandTotal)})</span> to the account below:
                  </p>
                  <div className="bg-white p-3 rounded-lg border border-amber-100 text-xs md:text-sm text-amber-900 font-mono space-y-1">
                    <div><span className="font-bold">Bank:</span> {bankDetails.bankName}</div>
                    <div><span className="font-bold">Title:</span> {bankDetails.accountTitle}</div>
                    <div><span className="font-bold">Acc #:</span> {bankDetails.accountNumber}</div>
                    <div><span className="font-bold">IBAN:</span> {bankDetails.iban}</div>
                  </div>
                  <p className="text-xs text-amber-800 mt-2">
                    <span className="font-bold">Important:</span> After placing the order via WhatsApp, please send the payment screenshot to the chat for verification. Your order will be processed once payment is confirmed.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
            <div className="p-5 md:px-6 flex flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10 bg-white">
              <h3 className={cn(integralCF.className, "text-xl font-bold text-black mb-2")}>Order Summary</h3>
              
              {/* Items List */}
              <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
                {cart?.items.map((item, idx) => {
                  const size = item.size ?? item.attributes[0];
                  const color = item.color ?? item.attributes[1];
                  return (
                  <div key={idx} className="flex items-start space-x-3 pb-3 border-b border-black/5 last:border-0 last:pb-0">
                    {item.srcUrl && (
                      <img
                        src={item.srcUrl}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-[10px] flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0 text-sm">
                      <p className="font-medium text-black truncate">{item.name}</p>
                      <p className="text-xs text-black/50 mt-0.5">
                        {[size && `Size: ${size}`, color && `Color: ${color}`].filter(Boolean).join(", ")}
                      </p>
                      <p className="text-xs text-black/50">Qty: {item.quantity}</p>
                      <p className="font-bold text-black mt-1">
                        {formatPrice(getFinalPrice(item.price, item.discount) * item.quantity)}
                      </p>
                    </div>
                  </div>
                  );
                })}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-black/60">
                  <span>Subtotal</span>
                  <span className="font-medium">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Discount</span>
                  <span className="font-medium">-{formatPrice(totalPrice - adjustedTotalPrice)}</span>
                </div>
                <div className="flex justify-between text-black/60">
                  <span>Shipping ({selectedCity.label})</span>
                  <span className={cn("font-medium", shipping.free && "text-green-700 font-bold")}>
                    {shippingText}
                  </span>
                </div>
                {!shipping.free && shipping.remaining > 0 && (
                  <p className="text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2">
                    Add {formatPrice(shipping.remaining)} more for FREE delivery in {selectedCity.label}!
                  </p>
                )}
                <hr className="border-t-black/10" />
                <div className="flex justify-between text-lg font-bold text-black">
                  <span>Total</span>
                  <span>{formatPrice(grandTotal)}</span>
                </div>
              </div>

              {/* WhatsApp Order Button */}
              <Button
                onClick={sendOrderToWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 h-[54px] md:h-[60px] rounded-full flex items-center justify-center gap-2 group transition-colors"
              >
                <FaWhatsapp className="text-xl" />
                <span>Order via WhatsApp</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-all" />
              </Button>

              <p className="text-xs text-center text-black/40">
                You will be redirected to WhatsApp to send the order message.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
