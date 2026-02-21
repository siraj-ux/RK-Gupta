// src/hooks/useFacebookPixel.ts
import { useEffect } from "react";

const PIXEL_ID = "1427068328795073";

interface PixelOptions {
  eventName?: string;
  eventParams?: Record<string, any>;
  eventID?: string; // Added for deduplication/CAPI
}

export function useFacebookPixel({ eventName, eventParams, eventID }: PixelOptions = {}) {
  useEffect(() => {
    // 1. Initialize script if not already present
    if (!window.fbq) {
      (function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode!.insertBefore(t, s);
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js", null, null, null);

      window.fbq!("init", PIXEL_ID);
    }

    // 2. Track PageView (Standard)
    window.fbq!("track", "PageView");

    // 3. Track Custom Event (Purchase/Lead/etc)
    if (eventName) {
      if (eventID) {
        // If eventID is provided, pass it as the 4th argument
        window.fbq!("track", eventName, eventParams || {}, { eventID });
      } else {
        window.fbq!("track", eventName, eventParams || {});
      }
    }
  }, [eventName, JSON.stringify(eventParams), eventID]); 
  // We stringify eventParams so the effect doesn't re-run unless the data actually changes
}