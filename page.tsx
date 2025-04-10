// app/page.tsx
export default function Home() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url("/banner.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">IM Solutions</h1>
          <p className="text-lg md:text-xl">Digital marketing, branding, design & development agency</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          <div className="shadow-lg rounded-xl p-6">
            <img src="/dservices.jpeg" className="rounded-lg mb-4" alt="Service 1" />
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <p>We help you grow online with SEO, PPC, and social media strategies.</p>
          </div>
          <div className="shadow-lg rounded-xl p-6">
            <img src="/pservices.jpeg" className="rounded-lg mb-4" alt="Service 2" />
            <h3 className="text-xl font-semibold mb-2">Branding & Design</h3>
            <p>We craft compelling brand identities and visuals to captivate your audience.</p>
          </div>
          <div className="shadow-lg rounded-xl p-6">
            <img src="/wservice.jpeg" className="rounded-lg mb-4" alt="Service 3" />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p>Modern, responsive websites that reflect your brand’s value and goals.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 text-center px-8">
        <h2 className="text-3xl font-bold mb-6">About IM Solutions</h2>
        <p className="max-w-3xl mx-auto text-lg">
          At IM Solutions, we provide a 360° suite of marketing and design services. Whether you're a startup or a large enterprise, our tailored solutions are built to elevate your business.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-900 text-white text-center px-8">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">Have a project in mind? We'd love to hear from you.</p>
        <a href="mailto:info@imsolutions.com" className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-full">Contact Us</a>
      </section>
    </div>
  )
}
