import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ChevronLeft, ChevronRight, Bed, Bath, Square } from "lucide-react"

const listings = [
  {
    id: 1,
    title: "Modern Downtown Loft",
    location: "123 Main St, New York, NY",
    price: 750000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600&text=Image+2", "/placeholder.svg?height=400&width=600&text=Image+3"],
    description: "Stunning loft with high ceilings and panoramic city views. Perfect for urban living."
  },
  {
    id: 2,
    title: "Cozy Suburban Home",
    location: "456 Oak Ave, Los Angeles, CA",
    price: 550000,
    beds: 3,
    baths: 2.5,
    sqft: 1800,
    images: ["/placeholder.svg?height=400&width=600&text=Suburban+Home", "/placeholder.svg?height=400&width=600&text=Image+2", "/placeholder.svg?height=400&width=600&text=Image+3"],
    description: "Charming family home in a quiet neighborhood. Large backyard and modern amenities."
  },
  {
    id: 3,
    title: "Luxury Beachfront Villa",
    location: "789 Ocean Dr, Miami, FL",
    price: 2500000,
    beds: 5,
    baths: 4,
    sqft: 4000,
    images: ["/placeholder.svg?height=400&width=600&text=Beachfront+Villa", "/placeholder.svg?height=400&width=600&text=Image+2", "/placeholder.svg?height=400&width=600&text=Image+3"],
    description: "Exquisite beachfront property with private access. Featuring a pool and state-of-the-art kitchen."
  },
  {
    id: 4,
    title: "Mountain Retreat Cabin",
    location: "101 Pine Rd, Aspen, CO",
    price: 980000,
    beds: 4,
    baths: 3,
    sqft: 2200,
    images: ["/placeholder.svg?height=400&width=600&text=Mountain+Cabin", "/placeholder.svg?height=400&width=600&text=Image+2", "/placeholder.svg?height=400&width=600&text=Image+3"],
    description: "Cozy cabin with breathtaking mountain views. Perfect for ski enthusiasts and nature lovers."
  },
]

function ListingCard({ listing }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % listing.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + listing.images.length) % listing.images.length)
  }

  return (
    <Card 
      className="group relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AspectRatio ratio={3/2}>
        <img
          src={listing.images[currentImageIndex]}
          alt={listing.title}
          className="object-cover w-full h-full transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
          <h3 className="text-lg font-semibold mb-1">{listing.title}</h3>
          <p className="text-sm mb-2">{listing.location}</p>
          <p className="text-sm mb-2">{listing.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <span className="flex items-center text-sm"><Bed className="w-4 h-4 mr-1" /> {listing.beds}</span>
              <span className="flex items-center text-sm"><Bath className="w-4 h-4 mr-1" /> {listing.baths}</span>
              <span className="flex items-center text-sm"><Square className="w-4 h-4 mr-1" /> {listing.sqft} sqft</span>
            </div>
            <Button size="sm" variant="secondary">View Details</Button>
          </div>
        </div>
      </AspectRatio>
      <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
        ${listing.price.toLocaleString()}
      </Badge>
      {isHovered && (
        <>
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 text-white hover:bg-opacity-75"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 text-white hover:bg-opacity-75"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}
    </Card>
  )
}

export default function Component() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Featured Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  )
}