import { useMemo } from 'react';

export interface UTMParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
}

export const useUTMParams = (): UTMParams => {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
      utm_term: params.get('utm_term') || '',
    };
  }, []);
};

/** Optional amountInr (e.g. 9 for ₹9) adds amount= paise to URL for Razorpay. */
export const buildRazorpayURL = (
  baseURL: string,
  formData: { name: string; email: string; phone: string; city: string },
  utmParams: UTMParams,
  amountInr?: number
): string => {
  const params: Record<string, string> = {
    full_name: formData.name,
    email: formData.email,
    phone: formData.phone,
    city: formData.city,
    ...utmParams,
  };
  if (amountInr != null) {
    params.amount = String(amountInr * 100);
  }
  return `${baseURL}?${new URLSearchParams(params).toString()}`;
};
