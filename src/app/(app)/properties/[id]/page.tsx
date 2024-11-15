'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, MapPin, Bed, Bath, Square } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// This would typically come from a database or API
const propertyData = {
  id: '1',
  title: 'Luxury Oceanfront Villa',
  price: '$2,500,000',
  location: 'Clifton, Cape Town',
  description: 'Experience the epitome of luxury living in this stunning oceanfront villa. Boasting breathtaking views of the Atlantic Ocean, this property offers an unparalleled lifestyle with its modern architecture, high-end finishes, and resort-style amenities.',
  features: ['5 Bedrooms', '6 Bathrooms', '7500 sq ft', 'Infinity Pool', 'Home Theater', 'Wine Cellar'],
  images: [
    '/placeholder.svg?height=600&width=800&text=Luxury Villa 1',
    '/placeholder.svg?height=600&width=800&text=Luxury Villa 2',
    '/placeholder.svg?height=600&width=800&text=Luxury Villa 3',
  ]
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === propertyData.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? propertyData.images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-green-100 to-emerald-100">
      <div className="container mx-auto px-4 py-8" >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        
      >
        <h1 className="text-4xl font-bold mb-4 text-teal-800">{propertyData.title}</h1>
        <div className="flex items-center mb-6">
          <MapPin className="w-5 h-5 text-teal-600 mr-2" />
          <span className="text-lg text-teal-700">{propertyData.location}</span>
        </div>

        <div className="relative mb-8">
          <div className="aspect-w-16 aspect-h-9">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            
          >
            <Image
              src={propertyData.images[currentImageIndex]}
              alt={`Property image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
            onClick={prevImage}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
            onClick={nextImage}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Card className="col-span-2">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-teal-800">Property Details</h2>
              <p className="text-gray-600 mb-4">{propertyData.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {propertyData.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-teal-800">Quick Info</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="text-xl font-bold text-teal-600">{propertyData.price}</span>
                </div>
                <div className="flex items-center">
                  <Bed className="w-5 h-5 text-teal-600 mr-2" />
                  <span className="text-gray-600">5 Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-5 h-5 text-teal-600 mr-2" />
                  <span className="text-gray-600">6 Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Square className="w-5 h-5 text-teal-600 mr-2" />
                  <span className="text-gray-600">7500 sq ft</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-gradient-to-r from-teal-500 to-green-500 text-white">
                Contact Agent
              </Button>
            </CardContent>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-teal-800">Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src="/placeholder.svg?height=400&width=800&text=Map"
              alt="Property location map"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </motion.div>
      </div>
    </div>
  )
}