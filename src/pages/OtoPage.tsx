import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CountdownTimer } from "@/components/CountdownTimer";
import { User, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useUTMParams, buildRazorpayURL } from "@/hooks/useUTMParams";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

const RAZORPAY_99_URL =
  "https://pages.razorpay.com/pl_S6ZxgWS0ZZvgE2/view";
const RAZORPAY_499_URL =
  "https://pages.razorpay.com/pl_S6aRnHuQsmGTB4/view";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyNqQghsxa10pLaJKRryPO0fs0-02M4diS9pJ2RwZVisD0KeN5q97BZehzijb1LBKLlRQ/exec";

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  dob: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  dob?: string;
}

export default function OtoPage() {
  const utmParams = useUTMParams();

  const [upgrade499, setUpgrade499] = useState(false);
  const [fireAddToCart, setFireAddToCart] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    dob: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  /* 🔥 FACEBOOK PIXEL — DO NOT CHANGE */
  useFacebookPixel(
    fireAddToCart
      ? {
          eventName: "AddToCart",
          eventParams: {
            content_name: "LP2_Product",
            content_category: upgrade499 ? "LP2_Offer_499" : "LP2_Offer_99",
            content_ids: [upgrade499 ? "LP2_IN_499" : "LP2_IN_99"],
            content_type: "product",
            value: upgrade499 ? 499 : 99,
            currency: "INR",
          },
        }
      : undefined
  );

  /* ✅ VALIDATION */
  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!/^[6-9]\d{9}$/.test(formData.phone))
      newErrors.phone = "Enter valid 10-digit number";

    if (!formData.city.trim()) newErrors.city = "City is required";

    if (upgrade499 && !formData.dob) {
      newErrors.dob = "Date of Birth is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ✅ GOOGLE SHEETS */
  const sendToGoogleSheets = async () => {
    const body = new URLSearchParams({
      ...formData,
      ...utmParams,
      upgrade: upgrade499 ? "499" : "99",
      pageUrl: window.location.href,
      timestamp: new Date().toISOString(),
    });

    await fetch(GOOGLE_SCRIPT_URL, { method: "POST", body });
  };

  /* ✅ SUBMIT */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setFireAddToCart(true);

    await sendToGoogleSheets();

    let razorpayURL = buildRazorpayURL(
      upgrade499 ? RAZORPAY_499_URL : RAZORPAY_99_URL,
      formData,
      utmParams
    );

    // ✅ PASS DOB EXPLICITLY FOR ₹499 FLOW
    if (upgrade499 && formData.dob) {
      const sep = razorpayURL.includes("?") ? "&" : "?";
      razorpayURL += `${sep}dob=${encodeURIComponent(formData.dob)}`;
    }

    window.location.href = razorpayURL;
  };

  const handleChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
      setErrors({ ...errors, [field]: undefined });
    };

  return (
    <section className="relative min-h-screen bg-[#04343b] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-md w-full">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
          Reserve Your Spot Now
        </h2>

        <div className="flex justify-center gap-2 mb-3">
          <span className="line-through text-gray-400">₹999</span>
          <span className="text-3xl font-extrabold text-[#04343B]">₹99</span>
          <span className="bg-yellow-100 text-yellow-800 px-2 rounded text-xs">
            90% OFF
          </span>
        </div>

        <div className="flex justify-center mb-4">
          <CountdownTimer />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { key: "name", icon: User, placeholder: "Full Name" },
            { key: "email", icon: Mail, placeholder: "Email Address", type: "email" },
            { key: "phone", icon: Phone, placeholder: "Phone Number" },
            { key: "city", icon: MapPin, placeholder: "City" },
          ].map(({ key, icon: Icon, placeholder, type }) => (
            <div key={key} className="relative">
              <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type={type || "text"}
                placeholder={placeholder}
                value={(formData as any)[key]}
                onChange={handleChange(key as keyof FormData)}
                className="pl-10 h-12"
              />
              {errors[key as keyof FormErrors] && (
                <p className="text-xs text-red-500 mt-1">
                  {errors[key as keyof FormErrors]}
                </p>
              )}
            </div>
          ))}

          {/* CHECKBOX */}
          <label className="flex items-start gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={upgrade499}
              onChange={(e) => setUpgrade499(e.target.checked)}
              className="mt-1"
            />
            <span>
              Yes! Add the{" "}
              <span className="font-extrabold text-green-600">
                “Destiny Report”
              </span>{" "}
              for just{" "}
              <span className="font-bold text-red-600">₹499</span> (Worth ₹999)
            </span>
          </label>

          {/* DOB */}
          {upgrade499 && (
            <div>
              <Input
                type="date"
                value={formData.dob}
                onChange={handleChange("dob")}
                className="h-12"
              />
              {errors.dob && (
                <p className="text-xs text-red-500 mt-1">{errors.dob}</p>
              )}
            </div>
          )}

          <Button type="submit" size="xl" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin mr-2" /> Processing…
              </>
            ) : upgrade499 ? (
              "Book My Seat @ ₹499"
            ) : (
              "Book My Seat @ ₹99"
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            🔒 Your information is 100% secure
          </p>
        </form>
      </div>
    </section>
  );
}
