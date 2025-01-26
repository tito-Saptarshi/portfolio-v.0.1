import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import "@/app/globals.css"
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  
      <div className={`min-h-screen bg-[#1a1a1a] text-gray-200`}>
        <div className="mx-auto max-w-7xl lg:flex">
          {/* Sidebar / Profile Section */}
          <aside className="lg:w-[300px] p-8 lg:fixed lg:h-screen">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4">
                <Image src="/placeholder.svg" alt="Profile" fill className="rounded-2xl" />
              </div>
              <h1 className="text-2xl font-bold mb-1">Richard hanrick</h1>
              <p className="text-gray-400 mb-6">Web developer</p>

              {/* Contact Info */}
              <div className="w-full space-y-4">
                {/* Mobile View - Dialog */}
                <div className="lg:hidden">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        Show Contacts
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#2a2a2a] border-gray-800">
                      <DialogHeader>
                        <DialogTitle>Contact Information</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <ContactInfo />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Desktop View - Regular Display */}
                <div className="hidden lg:block">
                  <ContactInfo />
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <Link href="#" className="text-gray-400 hover:text-[#ffd700]">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#ffd700]">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#ffd700]">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 lg:ml-[300px] p-8">
            {/* Navigation */}
            <nav className="mb-12">
              <ul className="flex justify-center gap-8 bg-[#2a2a2a] p-4 rounded-lg">
                <li>
                  <Link href="/" className="hover:text-[#ffd700]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className="hover:text-[#ffd700]">
                    Resume
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-[#ffd700]">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#ffd700]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#ffd700]">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {children}
          </main>
        </div>
      </div>
   
  )
}

const ContactInfo = () => (
  <>
    <div className="flex items-center gap-3">
      <Mail className="w-5 h-5 text-gray-400" />
      <span className="text-sm">richard@example.com</span>
    </div>
    <div className="flex items-center gap-3">
      <Phone className="w-5 h-5 text-gray-400" />
      <span className="text-sm">+1 (213) 352-2795</span>
    </div>
    <div className="flex items-center gap-3">
      <MapPin className="w-5 h-5 text-gray-400" />
      <span className="text-sm">Sacramento, California, USA</span>
    </div>
  </>
)

