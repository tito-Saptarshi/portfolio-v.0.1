export default function About() {
    return (
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="space-y-4">
          <p className="text-gray-400">
            I&apos;m a Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
            I enjoy turning complex problems into simple, beautiful and intuitive designs.
          </p>
          <p className="text-gray-400">
            My job is to build your website so that it is functional and user-friendly but at the same time attractive.
            Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is
            to bring across your message and identity in the most creative way. I created web design for many famous brand
            companies.
          </p>
        </div>
  
        <h2 className="text-3xl font-bold my-6">What I&lsquo;m Doing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-[#2a2a2a] p-6 rounded-lg">
              <div className="text-[#ffd700] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  const services = [
    {
      icon: "🎨",
      title: "Web Design",
      description: "The most modern and high-quality design made at a professional level.",
    },
    {
      icon: "💻",
      title: "Web Development",
      description: "High-quality development of sites at the professional level.",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Professional development of applications for iOS and Android.",
    },
    {
      icon: "📸",
      title: "Photography",
      description: "I make high-quality photos of any category at a professional level.",
    },
  ]
  
  