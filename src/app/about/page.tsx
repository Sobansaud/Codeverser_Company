import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award, Users, Zap, Shield, TrendingUp, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CodeVerser - Our Mission, Vision & Team",
  description: "Learn about CodeVerser's mission to transform businesses through innovative AI and software solutions. Meet our expert team and discover why companies trust us.",
  openGraph: {
    title: "About CodeVerser - Our Mission, Vision & Team",
    description: "Learn about CodeVerser's mission to transform businesses through innovative AI and software solutions.",
    type: "website",
    url: "https://codeverser.com/about",
    images: [
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop",
      width: 1200,
      height: 630,
      alt: "CodeVerser Team"
    }]

  }
};

const leaders = [
{
  name: "",
  role: "CEO & Co-Founder",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  bio: "Former VP of Engineering at a Fortune 500 tech company with 15+ years of experience building scalable systems."
},
{
  name: "Abdul Samay",
  role: "CTO & Co-Founder",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  bio: "AI researcher and architect with PhD in Machine Learning from MIT. Previously led AI initiatives at leading tech firms."
},
{
  name: "Marcus Rodriguez",
  role: "Head of Product",
  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  bio: "Product strategist with a track record of launching successful SaaS products used by millions worldwide."
},
{
  name: "Emma Williams",
  role: "Head of Design",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  bio: "Award-winning UX designer passionate about creating intuitive, beautiful interfaces that users love."
}];


const values = [
{
  icon: Target,
  title: "Innovation First",
  description: "We stay at the forefront of technology, constantly exploring new ways to solve complex problems."
},
{
  icon: Shield,
  title: "Trust & Security",
  description: "Your data security and privacy are our top priorities in everything we build."
},
{
  icon: Heart,
  title: "Client Success",
  description: "Your success is our success. We're committed to delivering measurable business outcomes."
},
{
  icon: Users,
  title: "Collaboration",
  description: "We work as an extension of your team, bringing transparency and partnership to every project."
}];


const whyChooseUs = [
{
  icon: Zap,
  title: "Cutting-Edge Technology",
  description: "We leverage the latest AI, cloud, and development frameworks to build future-proof solutions."
},
{
  icon: Award,
  title: "Proven Track Record",
  description: "200+ successful projects delivered across industries with 98% client satisfaction rate."
},
{
  icon: TrendingUp,
  title: "Scalable Solutions",
  description: "Every solution we build is designed to grow with your business from day one."
},
{
  icon: Users,
  title: "Expert Team",
  description: "Our team combines decades of experience in software development, AI, and business strategy."
}];


export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/10 to-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Software Innovation
              </span>
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg lg:text-xl">
              CodeVerser was founded with a simple mission: to help businesses harness the power of AI and modern software to achieve extraordinary results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-xl transition-all duration-300">
              <CardHeader className="space-y-4 pb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl">Our Mission</CardTitle>
                <CardDescription className="text-sm leading-6 sm:text-base sm:leading-7">
                  To empower businesses of all sizes with intelligent, scalable software solutions that drive growth, efficiency, and innovation. We believe technology should be a catalyst for success, not a barrier.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground sm:text-base">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0" />
                    <span>Democratize access to enterprise-grade AI and software solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0" />
                    <span>Deliver measurable ROI through innovative technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0" />
                    <span>Build long-term partnerships based on trust and results</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-xl transition-all duration-300">
              <CardHeader className="space-y-4 pb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl">Our Vision</CardTitle>
                <CardDescription className="text-sm leading-6 sm:text-base sm:leading-7">
                  To be the world's most trusted partner for AI-powered software solutions, known for transforming ambitious ideas into reality and helping businesses achieve what they thought was impossible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground sm:text-base">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex-shrink-0" />
                    <span>Lead the industry in AI integration and innovation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex-shrink-0" />
                    <span>Create solutions that positively impact millions of users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex-shrink-0" />
                    <span>Set new standards for quality, security, and client satisfaction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Our Core Values</h2>
            <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {values.map((value, index) =>
            <Card key={value.title} className="text-center border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-primary/5">
                <CardHeader className="space-y-4">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
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
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Meet Our Leadership</h2>
            <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
              Experienced leaders committed to your success
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-12">
            {leaders.map((leader) =>
            <div key={leader.name} className="group">
                <div className="relative mb-5 overflow-hidden rounded-2xl ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <Image
                  src={leader.image}
                  alt={leader.name}
                  width={400}
                  height={400}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110" />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-semibold sm:text-xl !whitespace-pre-line">{leader.name}</h3>
                <p className="mt-1 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-base">{leader.role}</p>
                <p className="mt-2 text-xs text-muted-foreground sm:mt-3 sm:text-sm">{leader.bio}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Why Choose CodeVerser?</h2>
            <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
              We bring more than just technical expertise—we bring partnership and results
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {whyChooseUs.map((item) =>
            <Card key={item.title} className="border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-primary/5">
                <CardHeader className="space-y-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
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

            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </div>
          <div className="mt-10 text-center sm:mt-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Join Us on This Journey
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto sm:text-lg lg:text-xl">
              Whether you're a startup with a bold vision or an enterprise looking to innovate, we're here to help you succeed.
            </p>
          </div>
        </div>
      </section>
    </>);

}