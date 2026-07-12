import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Share2 } from "lucide-react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-light-blue to-iedc-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>
          <p className="text-xl">Get in touch with the IEDC community</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold iedc-gray mb-8">Get In Touch</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-iedc-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold iedc-gray mb-2">Address</h3>
                    <p className="text-gray-600">
                      Street Number 18, Block EP&GP<br />
                      Sector V, IEM IEDC ECE, Godrej Genesis<br />
                      5th Floor, Bidhannagar<br />
                      North Twenty Four Parganas<br />
                      West Bengal, India, 700091
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-iedc-light-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold iedc-gray mb-2">Phone</h3>
                    <p className="text-gray-600">+91 9433569949</p>
                    <p className="text-gray-600">+91 98313 57968</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-iedc-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold iedc-gray mb-2">Email</h3>
                    <p className="text-gray-600">iedc.ece@iem.edu.in</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-iedc-light-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Share2 className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold iedc-gray mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="https://www.instagram.com/iedc_ece/" target="_blank" rel="noopener noreferrer" className="iedc-blue hover:text-pink-600 transition-colors">
                        <FaInstagram className="h-6 w-6" />
                      </a>
                      <a href="#" className="iedc-blue hover:text-blue-600 transition-colors">
                        <FaTwitter className="h-6 w-6" />
                      </a>
                      <a href="#" className="iedc-blue hover:text-blue-600 transition-colors">
                        <FaFacebook className="h-6 w-6" />
                      </a>
                      <a href="#" className="iedc-blue hover:text-blue-600 transition-colors">
                        <FaLinkedin className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-iedc-light-gray">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold iedc-gray mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="block text-sm font-medium iedc-gray mb-2">
                        First Name
                      </Label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className="focus:ring-iedc-blue focus:border-iedc-blue"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="block text-sm font-medium iedc-gray mb-2">
                        Last Name
                      </Label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="focus:ring-iedc-blue focus:border-iedc-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium iedc-gray mb-2">
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@example.com"
                      className="focus:ring-iedc-blue focus:border-iedc-blue"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="block text-sm font-medium iedc-gray mb-2">
                      Subject
                    </Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Inquiry about IEDC programs"
                      className="focus:ring-iedc-blue focus:border-iedc-blue"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium iedc-gray mb-2">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your inquiry or how we can help..."
                      className="focus:ring-iedc-blue focus:border-iedc-blue resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-iedc-blue text-white hover:bg-iedc-light-blue transition-colors"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
