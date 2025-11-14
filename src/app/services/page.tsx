import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Cloud, Code, Cpu, Database, Smartphone, Zap, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Custom SaaS, AI Integration & Software Development",
  description: "Expert software development services including custom SaaS, AI integration, web & mobile apps, cloud solutions, ML/LLM consulting, and automation systems.",
  openGraph: {
    title: "Our Services - Custom SaaS, AI Integration & Software Development",
    description: "Expert software development services including custom SaaS, AI integration, web & mobile apps, cloud solutions, and automation systems.",
    type: "website",
    url: "https://codeverser.com/services",
  },
};

const services = [
  {
    icon: Code,
    title: "Custom SaaS Development",
    description: "Transform your business model into a scalable, cloud-based software solution that generates recurring revenue and delights users.",
    features: [
      "Multi-tenant architecture design",
      "Subscription and billing integration",
      "User management and authentication",
      "Real-time collaboration features",
      "API development and integration",
      "Analytics and reporting dashboards",
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Development",
    description: "Beautiful, performant applications that work seamlessly across all devices—web, iOS, and Android platforms.",
    features: [
      "Responsive web applications",
      "Native iOS and Android apps",
      "Cross-platform development with React Native",
      "Progressive Web Apps (PWAs)",
      "Offline-first capabilities",
      "Push notifications and real-time updates",
    ],
    technologies: ["React", "Next.js", "React Native", "Flutter", "Swift", "Kotlin"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Enhance your applications with intelligent features powered by machine learning and artificial intelligence.",
    features: [
      "Natural Language Processing (NLP)",
      "Computer vision and image recognition",
      "Predictive analytics and forecasting",
      "Recommendation systems",
      "Chatbots and virtual assistants",
      "Document processing and automation",
    ],
    technologies: ["OpenAI", "TensorFlow", "PyTorch", "LangChain", "Pinecone", "Hugging Face"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    icon: Zap,
    title: "ML/LLM Consulting",
    description: "Expert guidance on implementing large language models and machine learning systems to solve complex business problems.",
    features: [
      "AI strategy and roadmap development",
      "LLM fine-tuning and optimization",
      "RAG (Retrieval Augmented Generation) systems",
      "Model evaluation and selection",
      "Prompt engineering best practices",
      "Cost optimization for AI workloads",
    ],
    technologies: ["GPT-4", "Claude", "Llama", "Vector Databases", "LangChain", "AutoML"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migrate, optimize, and manage your infrastructure in the cloud for maximum reliability, performance, and cost-efficiency.",
    features: [
      "Cloud migration strategy and execution",
      "Infrastructure as Code (IaC)",
      "Kubernetes and container orchestration",
      "Serverless architecture design",
      "DevOps and CI/CD pipelines",
      "Cloud security and compliance",
    ],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
  },
  {
    icon: Database,
    title: "Automation Systems",
    description: "Streamline operations and eliminate manual work with intelligent automation and workflow solutions.",
    features: [
      "Business process automation",
      "Workflow orchestration",
      "Data pipeline automation",
      "Integration with existing systems",
      "Robotic Process Automation (RPA)",
      "Automated testing and deployment",
    ],
    technologies: ["Zapier", "Make", "n8n", "Apache Airflow", "GitHub Actions", "Jenkins"],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Software Solutions
              </span>
              {" "}for Modern Businesses
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              From custom SaaS platforms to AI integration, we provide end-to-end software services that drive innovation and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                      Key Features
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                      Technologies We Use
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A proven methodology that delivers results
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We dive deep into understanding your business, goals, and challenges.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "We create a detailed roadmap and technical architecture for your solution.",
              },
              {
                step: "03",
                title: "Development",
                description: "Our expert team builds your solution using agile methodologies.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We deploy, monitor, and continuously improve your solution.",
              },
            ].map((phase) => (
              <Card key={phase.step}>
                <CardHeader>
                  <div className="mb-2 text-4xl font-bold text-primary/20">{phase.step}</div>
                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                  <CardDescription>{phase.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="overflow-hidden border-2">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss your project and how we can help you achieve your business goals with innovative software solutions.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild className="group">
                  <Link href="/contact">
                    Start Your Project
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
