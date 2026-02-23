import Image from "next/image";
import Link from "next/link";

export default function SideNav() {
  return (
    <aside className="h-full border-r p-4">
      {/* Profile section */}
      <div className="mb-6 flex items-center gap-3">
        <Image
          src="/profile.png"   // MUST be inside /public
          width={40}
          height={40}
          alt="Profile"
          className="rounded-full"
        />
        <span className="font-semibold">Admin</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <Link href="/dashboard" className="rounded px-3 py-2 hover:bg-gray-100">
          Dashboard
        </Link>

        <Link href="/dashboard/settings" className="rounded px-3 py-2 hover:bg-gray-100">
          Settings
        </Link>

        <Link href="/dashboard/contact" className="rounded px-3 py-2 hover:bg-gray-100">
          Contact Us
        </Link>
      </nav>
    </aside>
  );
}
