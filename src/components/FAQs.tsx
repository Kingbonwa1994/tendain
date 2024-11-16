'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, TrendingUp, Home, DollarSign, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does PropertyNaTendani offer?",
    answer: "PropertyNaTendani offers a range of services including property hunting, property swaps, listing properties for sale or rent, connecting with property developers, and providing real estate market insights."
  },
  {
    question: "How does the property swap process work?",
    answer: "Our property swap service allows homeowners to exchange their properties. You list your property and your desired property characteristics. We then match you with potential swap partners. Once a match is found, we facilitate the negotiation and transaction process."
  },
  {
    question: "What are the benefits of using PropertyNaTendani for property developers?",
    answer: "Property developers can connect with potential investors, access market insights, and showcase their projects to a targeted audience. We also provide a platform for receiving development proposals from the community."
  },
  {
    question: "How can I list my property on PropertyNaTendani?",
    answer: "You can list your property by navigating to the 'List Property' page on our website. Fill out the comprehensive form with your property details and upload up to five high-quality images. Our team will review and publish your listing within 24-48 hours."
  },
  {
    question: "What areas does PropertyNaTendani cover?",
    answer: "PropertyNaTendani primarily focuses on the South African real estate market, covering major cities and regions across the country. However, we're continuously expanding our reach to serve more areas."
  },
  {
    question: "How does PropertyNaTendani ensure the authenticity of listings?",
    answer: "We have a rigorous verification process for all listings. Our team conducts background checks, verifies property ownership documents, and may perform physical inspections for high-value properties to ensure the authenticity and accuracy of all listings on our platform."
  },
  {
    question: "What fees does PropertyNaTendani charge?",
    answer: "Our fee structure varies depending on the service. For standard listings, we charge a small percentage of the final sale price. Property swaps incur a flat fee. For detailed pricing, please contact our sales team or check the pricing page on our website."
  },
  {
    question: "How can I get in touch with PropertyNaTendani for further assistance?",
    answer: "You can reach us through our contact form on the website, via email at info@propertynatedani.com, or by phone at +27 123 456 789. Our customer support team is available Monday to Friday, 9 AM to 6 PM SAST."
  }
]

const marketInsights = [
  {
    title: "Market Growth",
    icon: <TrendingUp className="h-6 w-6 text-teal-600" />,
    content: "The South African real estate market has shown resilience with a 3.8% year-over-year growth in property values across major metropolitan areas."
  },
  {
    title: "Popular Locations",
    icon: <Home className="h-6 w-6 text-teal-600" />,
    content: "Cape Town, Johannesburg, and Durban continue to be hotspots for property investments, with emerging interest in smaller cities like Port Elizabeth and East London."
  },
  {
    title: "Investment Trends",
    icon: <DollarSign className="h-6 w-6 text-teal-600" />,
    content: "There's a growing trend towards sustainable and eco-friendly properties, with investors showing increased interest in developments with green features and energy-efficient designs."
  },
  {
    title: "Demographic Shifts",
    icon: <Users className="h-6 w-6 text-teal-600" />,
    content: "Millennials are becoming a significant force in the property market, driving demand for affordable, modern apartments in urban areas with good amenities and connectivity."
  }
]

export default function FAQsPage() {
  const [openInsight, setOpenInsight] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-green-100 to-emerald-100 py-12">
      <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-teal-800 text-center">Frequently Asked Questions</h1>
        
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-teal-800 hover:text-teal-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <h2 className="text-3xl font-bold mb-6 text-teal-800 text-center">Real Estate Market Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {marketInsights.map((insight, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="cursor-pointer" onClick={() => setOpenInsight(openInsight === index ? null : index)}>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    {insight.icon}
                    <span className="ml-2">{insight.title}</span>
                  </span>
                  <Button variant="ghost" size="sm">
                    {openInsight === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">

                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: openInsight === index ? 'auto' : 0, opacity: openInsight === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  
                >
                  <p className="text-gray-700">{insight.content}</p>
                </motion.div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-teal-800 mb-4">Still have questions? We&apos;re here to help!</p>
          <Button className="bg-gradient-to-r from-teal-500 to-green-500 text-white">
            Contact Us
          </Button>
        </div>
      </motion.div>
      </div>
    </div>
  )
}