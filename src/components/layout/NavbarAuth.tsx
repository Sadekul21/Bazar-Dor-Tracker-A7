
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function NavbarAuth() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error("সাইন আউট করা যায়নি");
        return;
      }

      toast.success("সাইন আউট সফল হয়েছে");
      router.push("/");
      router.refresh();
    } catch {
      toast.error("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  if (isPending) {
    return (
      <div className="h-10 w-32 animate-pulse rounded-lg bg-[#eaf6ef]"></div>
    );
  }

  return (
    <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
      {session?.user ? (
  <>
    <span className="hidden max-w-32 truncate text-sm font-semibold text-[#193a2a] md:block">
      {session.user.name}
    </span>

    <Link
      href="/profile"
      className="rounded-lg border border-[#B9DECA] bg-[#EAF6EF] px-3 py-2.5 text-xs font-semibold text-[#076B3A] transition-colors duration-200 hover:border-[#078747] hover:bg-[#D7EEE0] sm:px-5 sm:text-sm"
    >
            প্রোফাইল
          </Link>

          <button
            type="button"
            onClick={handleSignOut}
            className="rounded-lg bg-[#078747] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#066b39] hover:shadow-md sm:px-5 sm:text-sm"
          >
            সাইন আউট
          </button>
        </>
      ) : (
        <>
          <Link
            href="/sign-in"
            className="rounded-lg border border-[#B9DECA] bg-[#EAF6EF] px-3 py-2.5 text-xs font-semibold text-[#076B3A] transition-colors duration-200 hover:border-[#078747] hover:bg-[#D7EEE0] sm:px-5 sm:text-sm"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="rounded-lg bg-[#078747] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#066b39] hover:shadow-md sm:px-5 sm:text-sm"
          >
            সাইন আপ
          </Link>
        </>
      )}
    </div>
  );
}
