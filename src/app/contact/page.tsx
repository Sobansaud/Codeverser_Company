"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email");
      return false;
    }
    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please enter a message");
      return false;
    }
    if (formData.message.trim().length < 10) {
      setErrorMessage("Message must be at least 10 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "c9b5d366-4b07-4f1d-bde9-71649d33714c",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "CodeVerser Contact Form",
          subject: "New Contact Form Submission from CodeVerser Website",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-background to-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Connect with CodeVerser
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Ready to transform your business with custom software? Reach out directly to our founder for a personalized consultation. We're here to turn your vision into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-purple-600">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Email Us</CardTitle>
                  <CardDescription>
                    Send us an email anytime
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:codeverse627@gmail.com"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    codeverse627@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-purple-600">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Call Us</CardTitle>
                  <CardDescription>
                    Available 24/7 for your convenience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:+923299274846"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    +92 329 9274846
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-cyan-600">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Visit Us</CardTitle>
                  <CardDescription>
                    Come say hello at our office
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <address className="text-sm not-italic text-muted-foreground">
                    Karachi, Pakistan
                  </address>
                </CardContent>
              </Card>

              <Card className="border-2 bg-linear-to-br from-blue-500/10 to-purple-600/10 border-primary/30">
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-purple-600">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Working Hours</CardTitle>
                  <CardDescription>
                    We're always here for you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-primary">
                    Open 24/7 - Every Day
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Round-the-clock support for all your needs
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        required
                        aria-required="true"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        required
                        aria-required="true"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        required
                        aria-required="true"
                        className="min-h-[150px] w-full"
                      />
                    </div>

                    {status === "error" && (
                      <div
                        className="flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4"
                        role="alert"
                        aria-live="polite"
                      >
                        <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-destructive">
                            {errorMessage || "Something went wrong"}
                          </p>
                        </div>
                      </div>
                    )}

                    {status === "success" && (
                      <div
                        className="flex items-start gap-3 rounded-lg border border-green-500/50 bg-green-500/10 p-4"
                        role="alert"
                        aria-live="polite"
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-green-600 dark:text-green-400">
                            Message sent successfully!
                          </p>
                          <p className="mt-1 text-sm text-green-600/80 dark:text-green-400/80">
                            We'll get back to you within 24 hours.
                          </p>
                        </div>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "loading"}
                      className="w-full bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-linear-to-b from-muted/30 to-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Visit Our Office
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're located in Karachi, Pakistan - Ready to serve you 24/7
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl border-2 shadow-xl">
            <div className="aspect-21/9 bg-linear-to-br from-blue-500/10 to-cyan-600/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold text-foreground">Karachi, Pakistan</p>
                <p className="text-sm text-muted-foreground mt-2">Available 24/7 for your convenience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}