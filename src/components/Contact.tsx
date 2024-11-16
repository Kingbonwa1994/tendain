'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Instagram, Facebook, Twitter, Youtube, Mail, Phone, Linkedin, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/propertynatedani' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/propertynatedani' },
  { name: 'X', icon: Twitter, url: 'https://twitter.com/propertynatedani' },
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/propertynatedani' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/propertynatedani' },
  { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/27123456789' },
]

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log(formData)
    alert('Message sent successfully!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-green-100 to-emerald-100 py-12">
      <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-teal-800 text-center">Contact Us</h1>        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+27 123 456 7890"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}
                  >
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="property">Property Related</SelectItem>
                      <SelectItem value="swap">Property Swap</SelectItem>
                      <SelectItem value="developer">Developer Inquiry</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSubmit} className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connect With Us</CardTitle>
              <CardDescription>Reach out through your preferred channel or visit us at our office.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-teal-800">Contact Information</h3>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-teal-600" />
                    +27 123 456 7890
                  </p>
                  <p className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-teal-600" />
                    info@propertynatedani.com
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-teal-800">Office Address</h3>
                <p>123 Real Estate Avenue</p>
                <p>Sandton, Johannesburg</p>
                <p>2196, South Africa</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-teal-800">Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-teal-800">Follow Us</h3>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-800 transition-colors"
                    >
                      <link.icon className="h-6 w-6" />
                      <span className="sr-only">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Our Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14343.475278225816!2d28.0414648!3d-26.1071236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957338f244b5ad%3A0xc70c84b80f7a9f6f!2sSandton%2C%20Johannesburg%2C%202196!5e0!3m2!1sen!2sza!4v1652345678901!5m2!1sen!2sza"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
      </div>
    </div>
  )
}
