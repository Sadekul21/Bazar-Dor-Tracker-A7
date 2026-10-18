
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");
    const confirmPassword = String(form.get("confirmPassword") || "");

    if (password !== confirmPassword) {
      toast.error("পাসওয়ার্ড দুটি মিলছে না");
      return;
    }

    setLoading(true);

    try {
      const userData = { name, email, password };
      const { error } = await authClient.signUp.email(userData);

      if (error) {
        toast.error(error.message || "অ্যাকাউন্ট তৈরি করা যায়নি");
        return;
      }

      const { error: signOutError } = await authClient.signOut();

      if (signOutError) {
        toast.error("অ্যাকাউন্ট তৈরি হয়েছে, কিন্তু সেশন শেষ করা যায়নি");
        return;
      }

      toast.success("অ্যাকাউন্ট তৈরি হয়েছে! এখন সাইন ইন করুন");
      router.push("/sign-in");
      router.refresh();
    } catch {
      toast.error("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "input w-full h-11 bg-[#f9fbf9] border-[#dce7df] rounded-lg text-sm focus:border-[#078747] focus:outline-none";

  return (
    <main className="bg-[#f1f6f2] px-4 py-10">
      <div className="mx-auto max-w-sm">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#193a2a]">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-2 text-sm text-[#74847a]">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <form
          onSubmit={handleSignUp}
          className="space-y-4 rounded-2xl border border-[#dce9df] bg-white p-6 shadow-sm"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-[#243e2d]"
            >
              নাম
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="যেমন: রহিম উদ্দিন"
              className={inputStyle}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-[#243e2d]"
            >
              ইমেইল
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className={inputStyle}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-[#243e2d]"
            >
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              maxLength={128}
              placeholder="কমপক্ষে ৮ অক্ষর"
              className={inputStyle}
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 block text-sm font-medium text-[#243e2d]"
            >
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              placeholder="আবার লিখুন"
              className={inputStyle}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#078747] py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#066b39] disabled:opacity-60"
          >
            {loading ? "অপেক্ষা করুন..." : "অ্যাকাউন্ট তৈরি করুন"}
          </button>

          <p className="text-center text-sm text-[#65766a]">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-[#078747] hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </form>

        <Link
          href="/"
          className="mt-6 block text-center text-sm text-[#819087] transition hover:text-[#078747]"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default SignUpPage;
