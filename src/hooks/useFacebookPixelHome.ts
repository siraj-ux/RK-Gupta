// src/hooks/useFacebookPixel.ts
import { useEffect } from "react";

const PIXEL_IDS = ["807330001651355", "1601097181015212"];

export function useFacebookPixel() {
  useEffect(() => {
    // 1. If already loaded, initialize both pixels and track PageView
    if (window.fbq) {
      PIXEL_IDS.forEach((id) => {
        window.fbq!("init", id);
        window.fbq!("track", "PageView");
      });
      return;
    }

    // 2. Standard Meta Pixel Base Code
    (function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode!.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    // 3. Initialize and track for each Pixel ID
    PIXEL_IDS.forEach((id) => {
      window.fbq!("init", id);
      window.fbq!("track", "PageView");
    });
  }, []);
}