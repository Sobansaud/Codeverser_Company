import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award, Users, Zap, Shield, TrendingUp, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CodeVerser - Karachi-Based Software Development Company",
  description: "Discover CodeVerser's story from Karachi, Pakistan. Learn about our founder Muhammad Soban Saud and our commitment to delivering honest, high-quality software solutions.",
  openGraph: {
    title: "About CodeVerser - Karachi-Based Software Development Company",
    description: "Discover CodeVerser's story from Karachi, Pakistan. Learn about our founder Muhammad Soban Saud and our commitment to delivering honest, high-quality software solutions.",
    type: "website",
    url: "https://codeverser.com/about",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "CodeVerser Founder"
      }
    ]
  }
};

const leaders = [
  {
    name: "Muhammad Soban Saud",
    role: "CEO & Founder",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/professional-1763548253747.png?width=8000&height=8000&resize=contain",
    bio: "At 18, Soban founded CodeVerser with a passion for turning complex tech into simple solutions. From his home in Karachi, he has built a reputation for delivering high-quality software that exceeds expectations, combining technical expertise with a deep understanding of business needs."
  },
  {
  name: "Abdul Samay",
  role: "CTO & Co-Founder",
  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  bio: "Abdul Samay brings a sharp frontend development expertise and a passion for building seamless user experiences. Based in Karachi alongside Soban, he co-founded CodeVerser to transform complex challenges into elegant, scalable solutions, blending technical skill with a clear focus on practical business impact."
},

];

const values = [
  {
    icon: Target,
    title: "Honesty in Every Interaction",
    description: "We believe in straightforward communication and realistic expectations, no overpromising or hidden agendas."
  },
  {
    icon: Shield,
    title: "Quality Over Quantity",
    description: "Every line of code is written with care, ensuring robust, maintainable solutions that stand the test of time."
  },
  {
    icon: Heart,
    title: "Local Focus, Global Standards",
    description: "While we're based in Karachi, we deliver work that meets international standards and serves clients worldwide."
  },
  {
    icon: Users,
    title: "Personal Touch",
    description: "We treat every client like a partner, taking the time to understand their business and build genuine relationships."
  }
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Direct Communication",
    description: "No middlemen or complex hierarchies – you work directly with the founder and core team for faster decisions and better results."
  },
  {
    icon: Award,
    title: "Karachi-Based Expertise",
    description: "Understanding local business culture and challenges, we deliver solutions that resonate with Pakistani entrepreneurs and enterprises."
  },
  {
    icon: TrendingUp,
    title: "Flexible Approach",
    description: "Whether you need a quick prototype or a full-scale application, we adapt our process to fit your timeline and budget."
  },
  {
    icon: Users,
    title: "Young & Energetic Team",
    description: "Our fresh perspective brings innovative ideas and modern development practices to every project we undertake."
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/5 via-primary/10 to-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Building the Future of{" "}
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Software Innovation
              </span>
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg lg:text-xl">
              CodeVerser started as a solo venture in Karachi, driven by the belief that every business deserves access to world-class software solutions, regardless of size or location.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <Card className="border-2 border-primary/20 bg-linear-to-br from-primary/5 to-transparent hover:shadow-xl transition-all duration-300">
              <CardHeader className="space-y-4 pb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-cyan-600 shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl">Our Mission</CardTitle>
                <CardDescription className="text-sm leading-6 sm:text-base sm:leading-7">
                  To deliver bespoke software solutions that solve real problems for Pakistani businesses and beyond, ensuring every client gets a product that feels custom-built for their unique needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground sm:text-base">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 shrink-0" />
                    <span>Provide affordable, high-quality software development services to local businesses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 shrink-0" />
                    <span>Focus on understanding each client's specific challenges and delivering tailored solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 shrink-0" />
                    <span>Maintain transparency and direct communication throughout every project</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-linear-to-br from-primary/5 to-transparent hover:shadow-xl transition-all duration-300">
              <CardHeader className="space-y-4 pb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-cyan-600 shadow-lg">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl">Our Vision</CardTitle>
                <CardDescription className="text-sm leading-6 sm:text-base sm:leading-7">
                  To establish CodeVerser as Pakistan's go-to software development company, recognized for our commitment to quality, innovation, and building lasting relationships with clients across industries.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground sm:text-base">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 shrink-0" />
                    <span>Become a benchmark for reliable software development in Pakistan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 shrink-0" />
                    <span>Expand our services to help more local businesses thrive through technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 shrink-0" />
                    <span>Build a team culture focused on continuous learning and client-centric innovation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-linear-to-b from-primary/5 to-transparent px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Our Core Values</h2>
            <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {values.map((value) =>
              <Card key={value.title} className="text-center border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 bg-linear-to-br from-card to-primary/5">
                <CardHeader className="space-y-4">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-cyan-600 shadow-lg">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{value.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            )}
          </div>
        </div>
      </section>

    {/* Leadership Team */}
<section className="px-6 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Meet Our Leadership</h2>
      <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
        Experienced leaders committed to your success
      </p>
    </div>
    <div className="mx-auto mt-12 grid w-full max-w-[1000px] grid-cols-1 gap-16 sm:grid-cols-2 justify-center">
      {leaders.map((leader) =>
        <div key={leader.name} className="group max-w-md p-6 rounded-2xl ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 text-center">
          <div className="relative mb-6 overflow-hidden rounded-2xl">
            <Image
              src={leader.image}
              alt={leader.name}
              width={600}
              height={600}
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 className="text-lg font-semibold sm:text-xl whitespace-pre-line">{leader.name}</h3>
          <p className="mt-1 text-sm font-medium bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-base whitespace-pre-line">
            {leader.role}
          </p>
          <p className="mt-2 text-xs text-muted-foreground sm:mt-3 sm:text-sm">{leader.bio}</p>
        </div>
      )}
    </div>
  </div>
</section>


      {/* Team Image */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl ring-2 ring-primary/20 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=600&fit=crop"
              alt="CodeVerser team collaboration"
              width={1400}
              height={600}
              className="w-full h-auto" />
            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent" />
          </div>
          <div className="mt-10 text-center sm:mt-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Let's Build Something Great Together
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto sm:text-lg lg:text-xl">
              From Karachi to your doorstep, we're ready to turn your software ideas into reality with honesty, quality, and dedication.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
