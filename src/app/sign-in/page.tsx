
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");

    setLoading(true);

    try {
      const userData = { email, password };
      const { error } = await authClient.signIn.email(userData);

      if (error) {
        toast.error("ইমেইল অথবা পাসওয়ার্ড সঠিক নয়");
        return;
      }

      toast.success("সাইন ইন সফল হয়েছে!");
      router.push("/");
      router.refresh();
    } catch {
      toast.error("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const data = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (data.error) {
        toast.error("Google দিয়ে সাইন ইন করা যায়নি");
      }
    } catch {
      toast.error("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  const handleGitHubSignIn = async () => {
    try {
      const data = await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
      });

      if (data.error) {
        toast.error("GitHub দিয়ে সাইন ইন করা যায়নি");
      }
    } catch {
      toast.error("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  const inputStyle =
    "input h-11 w-full rounded-lg border-[#dce7df] bg-[#f9fbf9] text-sm focus:border-[#078747] focus:outline-none";

  return (
    <main className="bg-[#f1f6f2] px-4 py-10">
      <div className="mx-auto max-w-sm">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#193a2a]">
            সাইন ইন
          </h1>

          <p className="mt-2 text-sm text-[#74847a]">
            বিস্তারিত দাম ও বাজার তুলনা দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        <form
          onSubmit={handleSignIn}
          className="space-y-4 rounded-2xl border border-[#dce9df] bg-white p-6 shadow-sm"
        >
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
              placeholder="you@example.com"
              className={inputStyle}
              required
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
              placeholder="আপনার পাসওয়ার্ড"
              className={inputStyle}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#078747] py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#066b39] disabled:opacity-60"
          >
            {loading ? "অপেক্ষা করুন..." : "সাইন ইন"}
          </button>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-[#dce9df]"></div>
            <span className="text-xs text-gray-400">অথবা</span>
            <div className="h-px flex-1 bg-[#dce9df]"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex h-11 w-full items-center justify-center gap-3 rounded-lg border border-[#dce7df] bg-white text-sm font-medium text-[#243e2d] transition hover:bg-[#f1f6f2]"
          >
            <Image
              src="/google.png"
              alt="Google"
              width={20}
              height={20}
            />
            Google দিয়ে সাইন ইন করুন
          </button>

          <button
            type="button"
            onClick={handleGitHubSignIn}
            className="flex h-11 w-full items-center justify-center gap-3 rounded-lg border border-[#dce7df] bg-white text-sm font-medium text-[#243e2d] transition hover:bg-[#f1f6f2]"
          >
            <Image
              src="/github.png"
              alt="GitHub"
              width={20}
              height={20}
            />
            GitHub দিয়ে সাইন ইন করুন
          </button>

          <p className="text-center text-sm text-[#65766a]">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-[#078747] hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </form>

        <Link
          href="/"
          className="mt-6 block text-center text-sm text-[#819087] hover:text-[#078747]"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default SignInPage;
