'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, MapPin, Users, Lightbulb } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PropertyDevelopersPage() {
  const [proposal, setProposal] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    budget: '',
    timeline: '',
    description: '',
    targetAudience: '',
    environmentalConsiderations: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log(proposal)
    alert('Development proposal submitted successfully!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProposal(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-green-100 to-emerald-100 py-12">
      <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}  
      >
        <h1 className="text-4xl font-bold mb-8 text-teal-800 text-center">Submit Your Development Proposal</h1>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Development Proposal</CardTitle>
            <CardDescription>Share your vision with property developers</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={proposal.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={proposal.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+27 123 456 7890"
                  value={proposal.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type</Label>
                <Select
                  value={proposal.projectType}
                  onValueChange={(value) => setProposal(prev => ({ ...prev, projectType: value }))}
                >
                  <SelectTrigger id="projectType">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="mixed-use">Mixed-Use</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Proposed Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="City, Province"
                  value={proposal.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget (ZAR)</Label>
                  <Input
                    id="budget"
                    name="budget"
                    type="number"
                    placeholder="1000000"
                    value={proposal.budget}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Proposed Timeline</Label>
                  <Input
                    id="timeline"
                    name="timeline"
                    placeholder="e.g., 18 months"
                    value={proposal.timeline}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your development idea in detail"
                  value={proposal.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="targetAudience">Target Audience</Label>
                <Input
                  id="targetAudience"
                  name="targetAudience"
                  placeholder="e.g., Young professionals, Families"
                  value={proposal.targetAudience}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="environmentalConsiderations">Environmental Considerations</Label>
                <Textarea
                  id="environmentalConsiderations"
                  name="environmentalConsiderations"
                  placeholder="Describe any eco-friendly features or sustainability goals"
                  value={proposal.environmentalConsiderations}
                  onChange={handleChange}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit} className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white">
              Submit Proposal
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4">
        {[
          { icon: <Building2 className="h-10 w-10 text-teal-600" />, title: "Expert Developers", description: "Connect with experienced property developers" },
          { icon: <MapPin className="h-10 w-10 text-teal-600" />, title: "Prime Locations", description: "Identify and propose development in key areas" },
          { icon: <Users className="h-10 w-10 text-teal-600" />, title: "Community Focus", description: "Create developments that serve community needs" },
          { icon: <Lightbulb className="h-10 w-10 text-teal-600" />, title: "Innovative Ideas", description: "Bring your unique vision to life" },
        ].map((item, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <CardTitle className="flex flex-col items-center gap-2">
                {item.icon}
                <span>{item.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
    </div>
  )
}