import Link from "next/link"
import { Facebook, Linkedin, Twitter, Mail, MapPin, Phone, Instagram, Youtube } from "lucide-react"

const navigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/61583489621652/",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/codeverser/",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "https://x.com/CodeVerse339368",
      icon: Twitter,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@CodeVerseSoban",
      icon: Youtube,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/code-verser-b6a7b7389/",
      icon: Linkedin,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CodeVerser
            </Link>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              Empowering businesses with cutting-edge AI solutions, custom SaaS development, and innovative software services.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6">Contact Info</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:codeverse627@gmail.com"
                    className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                  >
                    codeverse627@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:+923299274846"
                    className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                  >
                    +92 329 9274846
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-6 text-muted-foreground">
                    Karachi, Pakistan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sm leading-6 font-semibold text-primary">
                    Open 24/7
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} CodeVerser. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}