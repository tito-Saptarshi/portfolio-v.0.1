import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="bg-[#1a1a1a] text-gray-200 shadow-md px-6 py-4 w-full">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={120} height={30} priority />
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {session?.user ? (
            <>
              {/* Profile */}
              <Link href={`/user/${session.id}`} className="flex items-center gap-2 hover:text-[#ffd700] transition">
                <User className="size-5" />
                <span className="hidden md:block">Profile</span>
              </Link>

              {/* Create */}
              <Link href="/startup/create" className="flex items-center gap-2 hover:text-[#ffd700] transition">
                <BadgePlus className="size-5" />
                <span className="hidden md:block">Create</span>
              </Link>

              {/* Logout */}
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="flex items-center gap-2 text-red-500 hover:text-red-400 transition">
                  <LogOut className="size-5" />
                  <span className="hidden md:block">Logout</span>
                </button>
              </form>

              {/* Avatar */}
              <Link href={`/user/${session?.id}`} className="flex items-center">
                <Avatar className="size-10 border border-gray-700">
                  <AvatarImage src={session?.user?.image || "/default-avatar.png"} alt={session?.user?.name || "User"} />
                  <AvatarFallback className="bg-gray-700 text-gray-300">
                    {session?.user?.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form action={async () => { "use server"; await signIn("github"); }}>
              <button className="bg-[#ffd700] text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
