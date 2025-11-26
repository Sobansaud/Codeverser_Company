"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Rocket, TrendingUp, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CodeFusion.AI",
    category: "AI Integration",
    description: "We built a game-changing platform that turns plain English into production-ready code. It's not just a website builder; it's an engineering multiplier. We integrated Gemini and OpenAI to handle complex logic, allowing users to deploy full-stack apps in minutes, not weeks.",
    image: '/NewCode.PNG',
    technologies: ["Next.js 14", "Python FastAPI", "LangChain", "Stripe Connect", "Shadcn UI"],
    results: [
      "Reduced development time by 90%",
      "Processed 10k+ generations in month one",
      "Seamless GitHub & Vercel integration"
    ],
    link: "https://www.codefusion.site",
  },
  {
    title: "Lehrki Education",
    category: "EdTech SaaS",
    description: "Lehrki needed to scale their personalized learning platform to thousands of students without losing the personal touch. We engineered a real-time AI tutor that adapts to each student's pace, coupled with a robust dashboard for teachers to track progress instantly.",
    image: '/lehrki.PNG',
    technologies: ["React", "Node.js", "MongoDB Atlas", "Socket.io", "Redis"],
    results: [
      "Scaled to 5,000+ concurrent students",
      "30% increase in course completion rates",
      "Real-time analytics for 500+ schools",
    ],
    link: "http://191.101.78.113:3000/",
  },
  {
    title: "Smart Resume Pro",
    category: "Career Tech",
    description: "Job hunting is broken. We fixed it by building an intelligent agent that doesn't just scan resumes but optimizes them against live job market data. It gives candidates a fighting chance by reverse-engineering ATS algorithms to highlight their true potential.",
    image: "/analyzer.PNG",
    technologies: ["Python", "Streamlit", "OpenAI API", "Pandas", "Scikit-learn"],
    results: [
      "Helped 1,000+ candidates land interviews",
      "Average ATS score improvement of 40%",
      "Generated 5,000+ tailored resumes"
    ],
    link: "https://smartresumeanalyzerpro-soban.streamlit.app/"
  },
  {
    title: "Velocity Cycles",
    category: "E-Commerce",
    description: "A high-performance e-commerce experience designed for speed. We moved them from a sluggish legacy platform to a headless architecture, resulting in near-instant page loads and a checkout flow so smooth it doubled their conversion rate overnight.",
    image: "/file3.PNG",
    technologies: ["Next.js", "Stripe API", "Sanity CMS", "Framer Motion"],
    results: [
      "100% increase in conversion rate",
      "Sub-second page load times",
      "Mobile sales grew by 150%",
    ],
    link: "https://bikes-ecommerce-store-sm.vercel.app/",
  },
  {
    title: "WorkflowPro",
    category: "Enterprise Automation",
    description: "Manual data entry was killing this logistics company's productivity. We automated their entire supply chain workflow, connecting fragmented systems into a single cohesive pipeline that runs 24/7 without human intervention.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    technologies: ["n8n", "PostgreSQL", "Docker", "Webhooks"],
    results: [
      "Saved 200+ man-hours per month",
      "Eliminated data entry errors completely",
      "ROI achieved in less than 3 months",
    ],
    link: "#",
  },
];

const stats = [
  { value: "200+", label: "Projects Delivered", icon: Rocket },
  { value: "98%", label: "Client Retention", icon: Users },
  { value: "50k+", label: "Hours Saved", icon: Clock },
  { value: "300%", label: "Avg ROI", icon: TrendingUp },
];

export default function PortfolioPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(76,29,149,0.1),transparent)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              We Don't Just Write Code. <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                We Build Legacies.
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
              From disruptive startups to established enterprises, we engineer software that drives real business growth. Here is the proof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:gap-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 bg-transparent shadow-none">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>

                    {/* Image Side */}
                    <div className={`relative group rounded-2xl overflow-hidden border bg-muted/50 aspect-[16/10] shadow-2xl ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Content Side */}
                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className="px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-500 border-blue-500/20">
                            {project.category}
                          </Badge>
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                          {project.title}
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" /> Impact
                          </h3>
                          <ul className="space-y-3">
                            {project.results.map((result) => (
                              <li key={result} className="flex items-start gap-3 text-sm font-medium text-foreground/90">
                                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground border border-border/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="pt-4">
                          <Button variant="default" size="lg" asChild className="group rounded-full px-8">
                            <a
                              href={project.link === '#' ? '#' : (project.link.startsWith('http') ? project.link : `https://${project.link}`)}
                              target={project.link === '#' ? undefined : "_blank"}
                              rel={project.link === '#' ? undefined : "noopener noreferrer"}
                            >
                              View Case Study
                              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/20 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold tracking-tight text-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-blue-950/20" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative isolate overflow-hidden bg-primary px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
          >
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Have a Vision? Let's Build It.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">
              We don't just take orders; we partner with you to solve complex problems. Let's discuss how we can engineer your next breakthrough.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild className="group rounded-full px-8 text-base h-12">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.25" />
              <defs>
                <radialGradient id="gradient">
                  <stop stopColor="white" />
                  <stop offset={1} stopColor="white" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
