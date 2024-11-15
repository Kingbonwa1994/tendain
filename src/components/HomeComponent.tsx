import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Home, DollarSign, Users, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"
import Image from "next/image"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-green-100 to-emerald-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="City skyline"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4 text-teal-800">Your Trusted Property Partner</h1>
          <p className="text-xl mb-8 text-teal-700">Tendani: Transforming Spaces, Building Dreams</p>
          <Button className="bg-gradient-to-r from-teal-500 to-green-500 text-white">Contact Us</Button>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-teal-800">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=Property ${i}`}
                  alt={`Featured Property ${i}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Luxury Villa {i}</h3>
                  <p className="text-gray-600 mb-4">A stunning property with breathtaking views.</p>
                  <Button variant="outline" className="w-full">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-green-500 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=300&text=Tendani"
              alt="Tendani"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">About Tendani</h2>
            <p className="mb-4">
              With over a decade of experience in property development, I've honed my skills in identifying
              prime real estate opportunities and transforming them into stunning properties. My passion
              lies in creating spaces that not only meet but exceed the expectations of my clients.
            </p>
            <p>
              What sets me apart is my personalized approach to every project. I believe in building
              lasting relationships with my clients, understanding their unique needs, and delivering
              results that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-teal-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Home className="w-12 h-12 mb-4 text-teal-500" />, title: "SWAPs", description: "Strategic property exchanges to maximize your investment potential." },
              { icon: <DollarSign className="w-12 h-12 mb-4 text-green-500" />, title: "Buys", description: "Expert assistance in acquiring prime properties at competitive prices." },
              { icon: <Users className="w-12 h-12 mb-4 text-emerald-500" />, title: "Developer Connections", description: "Leveraging my network to connect you with top property developers." },
            ].map((service, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="flex justify-center">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-teal-800">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {[
              { q: "What areas do you specialize in?", a: "I specialize in residential and commercial properties across major urban centers." },
              { q: "How long does a typical property development project take?", a: "Project timelines vary, but most developments take between 12-24 months from conception to completion." },
              { q: "Can you assist with property financing?", a: "While I don't provide direct financing, I can connect you with trusted financial advisors and institutions." },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-green-500 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" className="w-full" />
                <Input type="email" placeholder="Your Email" className="w-full" />
                <Textarea placeholder="Your Message" className="w-full" />
                <Button className="w-full bg-white text-teal-500 hover:bg-gray-100">Send Message</Button>
              </form>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                <span>123 Property Lane, Cityville, State 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                <span>+1 (234) 567-8901</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-2" />
                <span>tendani@propertynatedani.com</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <Facebook className="w-6 h-6" />
                <Twitter className="w-6 h-6" />
                <Instagram className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}