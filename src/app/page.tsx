import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, CheckCircle, Users, Zap, Shield, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeVerser - AI-Powered SaaS & Software Solutions",
  description: "Transform your business with cutting-edge AI solutions, custom SaaS development, and innovative software services. Expert team delivering scalable, secure solutions.",
  keywords: "AI solutions, SaaS development, custom software, machine learning, cloud solutions, automation",
  openGraph: {
    title: "CodeVerser - AI-Powered SaaS & Software Solutions",
    description: "Transform your business with cutting-edge AI solutions, custom SaaS development, and innovative software services.",
    type: "website",
    url: "https://codeverser.com",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/verser-banner-1763125275802.jpg",
        width: 1200,
        height: 630,
        alt: "CodeVerser - AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeVerser - AI-Powered SaaS & Software Solutions",
    description: "Transform your business with cutting-edge AI solutions, custom SaaS development, and innovative software services.",
  },
};

const features = [
  {
    name: "AI-Powered Solutions",
    description: "Leverage cutting-edge artificial intelligence to automate processes and gain insights.",
    icon: Zap,
  },
  {
    name: "Enterprise Security",
    description: "Bank-grade security measures to protect your data and ensure compliance.",
    icon: Shield,
  },
  {
    name: "Scalable Architecture",
    description: "Built to grow with your business, from startup to enterprise scale.",
    icon: TrendingUp,
  },
  {
    name: "Expert Team",
    description: "Seasoned developers and consultants with decades of combined experience.",
    icon: Users,
  },
];

const stats = [
  { label: "Projects Delivered", value: "200+" },
  { label: "Happy Clients", value: "150+" },
  { label: "Years Experience", value: "10+" },
  { label: "Success Rate", value: "98%" },
];

const testimonials = [
  {
    content: "CodeVerser transformed our business with their AI solutions. The ROI was incredible, and the team was professional throughout.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    content: "Their custom SaaS platform exceeded our expectations. Fast delivery, excellent communication, and ongoing support.",
    author: "Michael Chen",
    role: "CTO, InnovateLabs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    content: "Best development partner we've worked with. They truly understand business needs and deliver solutions that work.",
    author: "Emily Rodriguez",
    role: "Founder, StartupHub",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const trustBadges = [
  { name: "ISO 27001 Certified", icon: Award },
  { name: "SOC 2 Compliant", icon: Shield },
  { name: "GDPR Compliant", icon: CheckCircle },
  { name: "AWS Partner", icon: Award },
];

export default function Home() {
  return (
    <>
      {/* Schema Markup for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "CodeVerser",
            image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/codeverser-1763125275761.jpg",
            "@id": "https://codeverser.com",
            url: "https://codeverser.com",
            telephone: "+923299274846",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Karachi",
              addressCountry: "PK",
            },
            email: "codeverse627@gmail.com",
            description: "AI-Powered SaaS & Software Solutions Provider",
            priceRange: "$$",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
          }),
        }}
      />

      {/* Hero Section with Banner */}
      <section className="relative overflow-hidden">
        {/* Banner Image as Hero Background */}
        <div className="relative h-[600px] w-full">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/verser-banner-1763125275802.jpg"
            alt="CodeVerser - AI-Powered SaaS Platform for Custom Full-Stack Websites"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>

        {/* Hero Content Overlaid */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-8 inline-flex items-center rounded-full border-2 border-primary/30 bg-background/80 backdrop-blur-sm px-4 py-2 text-sm leading-6 animate-fade-in">
                <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                <span className="font-semibold text-primary">AI-Powered Solutions Available 24/7</span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl animate-fade-in-up mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Transform Your Business
                </span>
                <br />
                <span className="text-foreground">with Intelligent Software</span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground animate-fade-in-up animation-delay-200">
                We build cutting-edge SaaS platforms, AI-powered applications, and custom software solutions that drive growth and innovation for businesses worldwide.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
                <Button size="lg" asChild className="group text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-2">
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {trustBadges.map((badge) => (
              <div key={badge.name} className="flex items-center justify-center gap-3">
                <badge.icon className="h-6 w-6 text-primary" />
                <span className="text-sm font-semibold">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose CodeVerser?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We combine technical excellence with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card
                  key={feature.name}
                  className="animate-fade-in-up hover:shadow-lg transition-all border-2 hover:border-primary/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.name}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Custom SaaS Development",
                description: "Build scalable, cloud-based software tailored to your business model.",
              },
              {
                title: "AI Integration",
                description: "Integrate machine learning and AI capabilities into your existing systems.",
              },
              {
                title: "Web & Mobile Apps",
                description: "Beautiful, performant applications for web, iOS, and Android platforms.",
              },
              {
                title: "Cloud Solutions",
                description: "Migrate, optimize, and manage your infrastructure in the cloud.",
              },
              {
                title: "ML/LLM Consulting",
                description: "Expert guidance on implementing large language models and ML systems.",
              },
              {
                title: "Automation Systems",
                description: "Streamline operations with intelligent automation and workflows.",
              },
            ].map((service, index) => (
              <Card
                key={service.title}
                className="animate-fade-in-up hover:shadow-lg transition-all border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild className="border-2">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See what our clients say about working with CodeVerser
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.author}
                className="animate-fade-in-up border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div className="mt-6 flex items-center gap-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Let's discuss how we can help you achieve your goals with innovative software solutions. We're available 24/7 to support your business needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" variant="secondary" asChild className="group text-lg px-8 py-6">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}