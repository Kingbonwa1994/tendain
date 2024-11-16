import { SiteHeader } from "@/components/Header"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>

          {/* Layout UI */}
          <SiteHeader />
          <main>{children}</main>
        </body>
      </html>
    )
  }