import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Bed, Bath, DollarSign } from 'lucide-react'

// This would typically come from a database or API
const properties = [
  {
    id: '1',
    title: 'Luxury Oceanfront Villa',
    price: 2500000,
    location: 'Clifton, Cape Town',
    bedrooms: 5,
    bathrooms: 6,
    image: '/placeholder.svg?height=400&width=600&text=Luxury Villa'
  },
  {
    id: '2',
    title: 'Modern City Apartment',
    price: 1200000,
    location: 'Sandton, Johannesburg',
    bedrooms: 3,
    bathrooms: 2,
    image: '/placeholder.svg?height=400&width=600&text=City Apartment'
  },
  {
    id: '3',
    title: 'Countryside Estate',
    price: 3500000,
    location: 'Stellenbosch, Western Cape',
    bedrooms: 6,
    bathrooms: 5,
    image: '/placeholder.svg?height=400&width=600&text=Countryside Estate'
  },
  // Add more properties as needed
]

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-green-100 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-teal-800">Explore Our Properties</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input placeholder="Search properties..." className="md:w-1/3" />
          <Select>
            <SelectTrigger className="md:w-1/4">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1000000">$0 - $1,000,000</SelectItem>
              <SelectItem value="1000000-2000000">$1,000,000 - $2,000,000</SelectItem>
              <SelectItem value="2000000+">$2,000,000+</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="md:w-1/4">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gradient-to-r from-teal-500 to-green-500 text-white">
            Apply Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src={property.image}
                alt={property.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-teal-800">{property.title}</h2>
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-teal-600 mr-1" />
                  <span className="text-sm text-gray-600">{property.location}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{property.bedrooms} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{property.bathrooms} baths</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span>{property.price.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 bg-teal-50">
                <Link href={`/properties/${property.id}`} passHref>
                  <Button className="w-full bg-teal-600 text-white hover:bg-teal-700">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}