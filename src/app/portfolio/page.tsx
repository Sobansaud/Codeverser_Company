import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Our Successful Projects | CodeVerser",
  description: "Explore CodeVerser's portfolio of successful AI, SaaS, and software development projects. See real examples of our work and client success stories.",
  openGraph: {
    title: "Portfolio - Our Successful Projects | CodeVerser",
    description: "Explore CodeVerser's portfolio of successful AI, SaaS, and software development projects.",
    type: "website",
    url: "https://codeverser.com/portfolio",
  },
};

const projects = [
  {
    title: "HealthTech AI Platform",
    category: "AI Integration",
    description: "Built an AI-powered diagnostic assistant that helps healthcare providers analyze medical imaging and patient data, reducing diagnosis time by 40%.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Python", "TensorFlow", "AWS", "PostgreSQL"],
    results: [
      "40% faster diagnosis time",
      "95% accuracy rate",
      "10,000+ patients served monthly",
    ],
    link: "#",
  },
  {
    title: "FinanceFlow SaaS",
    category: "Custom SaaS Development",
    description: "Developed a comprehensive financial management SaaS platform for SMBs with automated invoicing, expense tracking, and real-time reporting.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    results: [
      "5,000+ active users",
      "$2M+ in transactions processed",
      "99.9% uptime",
    ],
    link: "#",
  },
  {
    title: "EduLearn Mobile App",
    category: "Web & Mobile App",
    description: "Created a cross-platform educational app with personalized learning paths, video content, and progress tracking for K-12 students.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    technologies: ["React Native", "Firebase", "Node.js", "AWS S3"],
    results: [
      "50,000+ downloads",
      "4.8★ average rating",
      "30% improvement in student engagement",
    ],
    link: "#",
  },
  {
    title: "RetailGenius Analytics",
    category: "ML/LLM Consulting",
    description: "Implemented a machine learning system for inventory optimization and demand forecasting, helping retailers reduce waste and increase profits.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["Python", "Scikit-learn", "Apache Kafka", "BigQuery"],
    results: [
      "25% reduction in waste",
      "15% increase in profit margins",
      "Real-time inventory insights",
    ],
    link: "#",
  },
  {
    title: "CloudMigrate Enterprise",
    category: "Cloud Solutions",
    description: "Led a successful cloud migration for a Fortune 500 company, moving legacy infrastructure to AWS with zero downtime and 40% cost savings.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    results: [
      "Zero downtime migration",
      "40% cost reduction",
      "3x performance improvement",
    ],
    link: "#",
  },
  {
    title: "WorkflowPro Automation",
    category: "Automation Systems",
    description: "Designed and implemented intelligent automation workflows that streamlined operations for a logistics company, saving 200+ hours monthly.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    technologies: ["n8n", "PostgreSQL", "Redis", "REST APIs", "Webhooks"],
    results: [
      "200+ hours saved monthly",
      "85% reduction in manual tasks",
      "99.5% automation accuracy",
    ],
    link: "#",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Explore real-world examples of how we've helped businesses transform with innovative software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="overflow-hidden border-2 hover:shadow-xl transition-shadow"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="mb-4">
                      <Badge variant="secondary" className="mb-4">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-3xl mb-3">{project.title}</CardTitle>
                      <CardDescription className="text-base leading-7">
                        {project.description}
                      </CardDescription>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
                        Key Results
                      </h3>
                      <ul className="space-y-2">
                        {project.results.map((result) => (
                          <li key={result} className="flex items-start gap-3">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-sm font-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button variant="outline" asChild className="group">
                        <Link href={project.link}>
                          View Case Study
                          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Proven Track Record
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Numbers that speak for themselves
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "200+", label: "Projects Completed" },
              { value: "150+", label: "Happy Clients" },
              { value: "98%", label: "Success Rate" },
              { value: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="overflow-hidden border-2 bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Start Your Success Story?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Join our growing list of satisfied clients and transform your business with innovative software solutions.
              </p>
              <div className="mt-8">
                <Button size="lg" variant="secondary" asChild className="group">
                  <Link href="/contact">
                    Let's Talk About Your Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
