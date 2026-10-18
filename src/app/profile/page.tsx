
"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <main className="bg-[#f1f6f2] px-4 py-12">
        <p className="text-center text-[#65766a]">
          অপেক্ষা করুন...
        </p>
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
      <div className="mx-auto max-w-lg">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#193a2a]">
            আমার প্রোফাইল
          </h1>

          <p className="mt-2 text-sm text-[#74847a]">
            আপনার অ্যাকাউন্টের তথ্য দেখুন।
          </p>
        </div>

        <div className="rounded-2xl border border-[#dce9df] bg-white p-6 shadow-sm">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f6ed] text-2xl font-bold text-[#078747]">
              {session.user.name?.charAt(0).toUpperCase()}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs text-[#74847a]">নাম</p>
              <p className="mt-1 font-semibold text-[#193a2a]">
                {session.user.name}
              </p>
            </div>

            <div className="border-t border-[#edf2ee] pt-4">
              <p className="text-xs text-[#74847a]">ইমেইল</p>
              <p className="mt-1 font-semibold text-[#193a2a]">
                {session.user.email}
              </p>
            </div>
          </div>

          <Link
            href="/profile/update"
            className="mt-6 block rounded-lg bg-[#078747] py-3 text-center text-sm font-semibold text-white transition hover:bg-[#066b39]"
          >
            প্রোফাইল আপডেট করুন
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
