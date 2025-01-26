// import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Button } from "@/components/ui/button"

// export default function Page() {
//   return (
//     <div className="min-h-screen bg-[#1a1a1a] text-gray-200">
//       <div className="mx-auto max-w-7xl lg:flex">
//         {/* Sidebar / Profile Section */}
//         <aside className="lg:w-[300px] p-8 lg:fixed lg:h-screen">
//           <div className="flex flex-col items-center text-center">
//             <div className="relative w-32 h-32 mb-4">
//               <Image src="/placeholder.svg" alt="Profile" fill className="rounded-2xl" />
//             </div>
//             <h1 className="text-2xl font-bold mb-1">Richard hanrick</h1>
//             <p className="text-gray-400 mb-6">Web developer</p>

//             {/* Contact Info */}
//             <div className="w-full space-y-4">
//               {/* Mobile View - Dialog */}
//               <div className="lg:hidden">
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button variant="outline" className="w-full">
//                       Show Contacts
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="bg-[#2a2a2a] border-gray-800">
//                     <DialogHeader>
//                       <DialogTitle>Contact Information</DialogTitle>
//                     </DialogHeader>
//                     <div className="space-y-4">
//                       <ContactInfo />
//                     </div>
//                   </DialogContent>
//                 </Dialog>
//               </div>

//               {/* Desktop View - Regular Display */}
//               <div className="hidden lg:block">
//                 <ContactInfo />
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-4 mt-6">
//               <Link href="#" className="text-gray-400 hover:text-[#ffd700]">
//                 <Facebook className="w-5 h-5" />
//               </Link>
//               <Link href="#" className="text-gray-400 hover:text-[#ffd700]">
//                 <Twitter className="w-5 h-5" />
//               </Link>
//               <Link href="#" className="text-gray-400 hover:text-[#ffd700]">
//                 <Instagram className="w-5 h-5" />
//               </Link>
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 lg:ml-[300px] p-8">
//           {/* Navigation */}
//           <nav className="mb-12">
//             <ul className="flex justify-center gap-8 bg-[#2a2a2a] p-4 rounded-lg">
//               <li>
//                 <Link href="#about" className="text-[#ffd700]">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#resume" className="hover:text-[#ffd700]">
//                   Resume
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#portfolio" className="hover:text-[#ffd700]">
//                   Portfolio
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#blog" className="hover:text-[#ffd700]">
//                   Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#contact" className="hover:text-[#ffd700]">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           {/* About Section */}
//           <section className="mb-12">
//             <h2 className="text-3xl font-bold mb-6">About Me</h2>
//             <div className="space-y-4">
//               <p className="text-gray-400">
//                 I&apos;m Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print
//                 media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
//               </p>
//               <p className="text-gray-400">
//                 My job is to build your website so that it is functional and user-friendly but at the same time
//                 attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy
//                 to use. My aim is to bring across your message and identity in the most creative way. I created web
//                 design for many famous brand companies.
//               </p>
//             </div>
//           </section>

//           {/* Services Section */}
//           <section className="mb-12">
//             <h2 className="text-3xl font-bold mb-6">What I&apos;m Doing</h2>
//             <div className="grid md:grid-cols-2 gap-6">
//               {services.map((service, index) => (
//                 <div key={index} className="bg-[#2a2a2a] p-6 rounded-lg">
//                   <div className="text-[#ffd700] mb-4">{service.icon}</div>
//                   <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                   <p className="text-gray-400">{service.description}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Testimonials Section */}
//           <section>
//             <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
//             <div className="grid md:grid-cols-2 gap-6">
//               {testimonials.map((testimonial, index) => (
//                 <div key={index} className="bg-[#2a2a2a] p-6 rounded-lg">
//                   <div className="flex items-center gap-4 mb-4">
//                     <Image
//                       src="/placeholder.svg"
//                       alt={testimonial.name}
//                       width={50}
//                       height={50}
//                       className="rounded-full"
//                     />
//                     <h3 className="font-semibold">{testimonial.name}</h3>
//                   </div>
//                   <p className="text-gray-400">{testimonial.text}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   )
// }

// const services = [
//   {
//     icon: "🎨",
//     title: "Web Design",
//     description: "The most modern and high-quality design made at a professional level.",
//   },
//   {
//     icon: "💻",
//     title: "Web Development",
//     description: "High-quality development of sites at the professional level.",
//   },
//   {
//     icon: "📱",
//     title: "Mobile Apps",
//     description: "Professional development of applications for iOS and Android.",
//   },
//   {
//     icon: "📸",
//     title: "Photography",
//     description: "I make high-quality photos of any category at a professional level.",
//   },
// ]

// const testimonials = [
//   {
//     name: "Daniel Lewis",
//     text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience...",
//   },
//   {
//     name: "Jessica Miller",
//     text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience...",
//   },
// ]

// const ContactInfo = () => (
//   <>
//     <div className="flex items-center gap-3">
//       <Mail className="w-5 h-5 text-gray-400" />
//       <span className="text-sm">richard@example.com</span>
//     </div>
//     <div className="flex items-center gap-3">
//       <Phone className="w-5 h-5 text-gray-400" />
//       <span className="text-sm">+1 (213) 352-2795</span>
//     </div>
//     <div className="flex items-center gap-3">
//       <MapPin className="w-5 h-5 text-gray-400" />
//       <span className="text-sm">Sacramento, California, USA</span>
//     </div>
//   </>
// )

