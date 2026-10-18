
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const UpdateProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();

    if (!name) {
      toast.error("আপনার নাম লিখুন");
      return;
    }

    setLoading(true);

    try {
      const { error } = await authClient.updateUser({
        name: name,
      });

      if (error) {
        toast.error("প্রোফাইল আপডেট করা যায়নি");
        return;
      }

      toast.success("প্রোফাইল আপডেট হয়েছে!");
      router.push("/profile");
      router.refresh();
    } catch {
      toast.error("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <main className="bg-[#f1f6f2] px-4 py-12 text-center">
        <p className="text-[#65766a]">অপেক্ষা করুন...</p>
      </main>
    );
  }

  if (!session?.user) {
    return (
      <main className="bg-[#f1f6f2] px-4 py-12 text-center">
        <h1 className="text-xl font-bold text-[#193a2a]">
          আগে সাইন ইন করুন
        </h1>
        <Link
          href="/sign-in"
          className="mt-4 inline-block rounded-lg bg-[#078747] px-5 py-2.5 text-white"
        >
          সাইন ইন
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-[#f1f6f2] px-4 py-12">
      <div className="mx-auto max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#193a2a]">
            প্রোফাইল আপডেট
          </h1>
          <p className="mt-2 text-sm text-[#74847a]">
            আপনার নাম পরিবর্তন করুন।
          </p>
        </div>

        <form
          onSubmit={handleUpdate}
          className="space-y-5 rounded-2xl border border-[#dce9df] bg-white p-6 shadow-sm"
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
              defaultValue={session.user.name}
              required
              className="input h-11 w-full rounded-lg border-[#dce7df] bg-[#f9fbf9] text-sm focus:border-[#078747] focus:outline-none"
            />
          </div>

          <div>
            <p className="mb-1.5 text-sm font-medium text-[#243e2d]">
              ইমেইল
            </p>
            <p className="rounded-lg border border-[#dce7df] bg-[#f9fbf9] px-4 py-3 text-sm text-[#74847a]">
              {session.user.email}
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#078747] py-3 text-sm font-semibold text-white transition hover:bg-[#066b39] disabled:opacity-60"
          >
            {loading ? "অপেক্ষা করুন..." : "পরিবর্তন সংরক্ষণ করুন"}
          </button>

          <Link
            href="/profile"
            className="block text-center text-sm text-[#078747] hover:underline"
          >
            ← প্রোফাইলে ফিরে যান
          </Link>
        </form>
      </div>
    </main>
  );
};

export default UpdateProfilePage;
