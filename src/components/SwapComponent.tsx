'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRightLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SwapPage() {
  const [currentProperty, setCurrentProperty] = useState({
    type: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    size: '',
    value: '',
    description: ''
  })

  const [desiredProperty, setDesiredProperty] = useState({
    type: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    size: '',
    value: '',
    description: ''
  })

  const [additionalAmount, setAdditionalAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ currentProperty, desiredProperty, additionalAmount })
    alert('Swap request submitted successfully!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-green-100 to-emerald-100 py-12">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        
      >
        <h1 className="text-4xl font-bold mb-8 text-teal-800 text-center">Property Swap</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-8">
            <PropertyCard
              title="Your Current Property"
              description="Enter details about your current property"
              property={currentProperty}
              setProperty={setCurrentProperty}
            />
            <PropertyCard
              title="Desired Property"
              description="Enter details about the property you're looking for"
              property={desiredProperty}
              setProperty={setDesiredProperty}
            />
          </div>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Additional Details</CardTitle>
              <CardDescription>Specify any additional amount you&apos;re willing to include in the swap</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="additionalAmount">Additional Amount</Label>
                  <Input
                    id="additionalAmount"
                    placeholder="Enter amount"
                    value={additionalAmount}
                    onChange={(e) => setAdditionalAmount(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white">
                Submit Swap Request
              </Button>
            </CardFooter>
          </Card>
        </form>
      </motion.div>
      </div>
    </div>
  )
}

interface PropertyCardProps {
  title: string;
  description: string;
  property: any;
  setProperty: (property: any) => void;
}

function PropertyCard({ title, description, property, setProperty }: PropertyCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor={`${title}-type`}>Property Type</Label>
            <Select
              value={property.type}
              onValueChange={(value) => setProperty({ ...property, type: value })}
            >
              <SelectTrigger id={`${title}-type`}>
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor={`${title}-location`}>Location</Label>
            <Input
              id={`${title}-location`}
              placeholder="Enter location"
              value={property.location}
              onChange={(e) => setProperty({ ...property, location: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor={`${title}-bedrooms`}>Bedrooms</Label>
              <Input
                id={`${title}-bedrooms`}
                placeholder="Number of bedrooms"
                value={property.bedrooms}
                onChange={(e) => setProperty({ ...property, bedrooms: e.target.value })}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor={`${title}-bathrooms`}>Bathrooms</Label>
              <Input
                id={`${title}-bathrooms`}
                placeholder="Number of bathrooms"
                value={property.bathrooms}
                onChange={(e) => setProperty({ ...property, bathrooms: e.target.value })}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor={`${title}-size`}>Property Size (sq ft)</Label>
            <Input
              id={`${title}-size`}
              placeholder="Enter property size"
              value={property.size}
              onChange={(e) => setProperty({ ...property, size: e.target.value })}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor={`${title}-value`}>Estimated Value</Label>
            <Input
              id={`${title}-value`}
              placeholder="Enter estimated value"
              value={property.value}
              onChange={(e) => setProperty({ ...property, value: e.target.value })}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor={`${title}-description`}>Property Description</Label>
            <Textarea
              id={`${title}-description`}
              placeholder="Describe your property"
              value={property.description}
              onChange={(e) => setProperty({ ...property, description: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}