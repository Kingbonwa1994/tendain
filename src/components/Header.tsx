'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const menuItems = [
  { name: 'Hunt', href: '/hunt' },
  { name: 'Swap', href: '/swap' },
  { name: 'List Property', href: '/submit-property' },
  { name: 'Developers', href: '/developers' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/placeholder.svg?height=40&width=40&text=Logo"
                alt="PropertyNaTendani Logo"
                width={40}
                height={40}
                className="mr-4"
              />
            </Link>
            <nav className="hidden md:flex space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-teal-800 hover:text-teal-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-teal-800 hover:text-teal-600"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
          <div className="hidden md:flex items-center">
            <Button
              variant="outline"
              size="sm"
              className="bg-gradient-to-r from-teal-500 to-green-500 text-white border-none"
            >
              Login
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} >
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            
          >
            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                className="text-teal-800 hover:text-teal-600"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="mt-8 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-teal-800 hover:text-teal-600 transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  )
}