"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginRedirectToast() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("message") === "login-required") {
      toast.error("পণ্যের বিস্তারিত দেখতে আগে সাইন ইন করুন");
    }
  }, [searchParams]);

  return null;
}
