import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Home, 
  Users, 
  Award, 
  CheckCircle,
  MessageCircle,
  Calendar,
  Bed,
  Bath,
  Square
} from 'lucide-react';

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  highlight: string;
  image: string;
  beds: number;
  baths: number;
  sqft: string;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  content: string;
  rating: number;
  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Premium 3BHK Apartment",
    price: "₹85 Lakhs",
    location: "Whitefield, Bengaluru",
    highlight: "Ready to move, premium amenities",
    image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
    beds: 3,
    baths: 2,
    sqft: "1,450"
  },
  {
    id: 2,
    title: "Modern 2BHK Residence",
    price: "₹62 Lakhs",
    location: "ITPL Main Road, Whitefield",
    highlight: "Near tech parks, excellent connectivity",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    beds: 2,
    baths: 2,
    sqft: "1,120"
  },
  {
    id: 3,
    title: "Luxury 3BHK Penthouse",
    price: "₹1.2 Crores",
    location: "Prestige Tech Park Area",
    highlight: "Penthouse with terrace garden",
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
    beds: 3,
    baths: 3,
    sqft: "1,850"
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Brookefield, Bengaluru",
    content: "Rohit helped us find our dream home within our budget. His knowledge of Whitefield area is exceptional and he guided us through every step.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
  },
  {
    id: 2,
    name: "Ankit Patel",
    location: "ITPL Main Road",
    content: "Professional service and honest advice. Rohit showed us multiple options and helped negotiate the best price. Highly recommended!",
    rating: 5,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
  },
  {
    id: 3,
    name: "Meera & Rajesh",
    location: "Whitefield Gardens",
    content: "We were first-time buyers and Rohit made the entire process smooth. His expertise in the local market is unmatched.",
    rating: 5,
    image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg"
  }
];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('https://realestate-h3p5.onrender.com/api/save-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Thank you! We will contact you soon...');
    } else {
      alert('Submission failed. Try again later.');
    }

    setFormData({ name: '', email: '', phone: '', location: '' });
  } catch (err) {
    console.error('Error:', err);
    alert('An error occurred.');
  }
};

  const handleWhatsAppClick = () => {
    const message = "Hi Rohit, I'm interested in properties in Whitefield. Can we schedule a consultation?";
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Home className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Rohit Malhotra</h1>
                <p className="text-sm text-gray-600">Real Estate Consultant</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-700">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Helping You Find Your 
                <span className="text-blue-600"> Dream Home</span> in Bengaluru
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Specialist in premium 2BHK & 3BHK apartments in Whitefield. 
                Over 8 years of experience helping families find their perfect home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Free Consultation</span>
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Now</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
                alt="Rohit Malhotra - Real Estate Consultant"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Verified Agent</p>
                    <p className="text-xs text-gray-600">RERA Registered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">200+</p>
              <p className="text-gray-600">Happy Families</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-emerald-100 p-3 rounded-full mb-3">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">8+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-100 p-3 rounded-full mb-3">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">RERA</p>
              <p className="text-gray-600">Certified</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-3 rounded-full mb-3">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">4.9/5</p>
              <p className="text-gray-600">Client Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked premium apartments in Whitefield's most sought-after locations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{property.highlight}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.sqft} sq ft</span>
                    </div>
                  </div>
                  <button
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Schedule Site Visit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from happy homeowners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Get a free consultation and personalized property recommendations. 
                No hidden charges, no obligations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Free site visits with no pressure</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Expert guidance on legal documentation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Best price negotiation support</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Free Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select preferred location</option>
                    <option value="whitefield">Whitefield</option>
                    <option value="itpl">ITPL Main Road</option>
                    <option value="brookfield">Brookefield</option>
                    <option value="kundalahalli">Kundalahalli</option>
                    <option value="marathahalli">Marathahalli</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Prime Location in Whitefield
            </h2>
            <p className="text-xl text-gray-600">
              Strategic location with excellent connectivity to IT hubs and amenities
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4449985332657!2d77.74994831529877!3d12.96958329086775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b9f1e9c4c7%3A0x5d8e4b7e5d4f6c8d!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Whitefield Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Home className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">Rohit Malhotra</h3>
                  <p className="text-gray-400">Real Estate Consultant</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner in finding the perfect home in Bengaluru. 
                Specializing in premium residential properties in Whitefield.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-400 mr-3" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-3" />
                  <span>rohit@dreamhomesblr.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                  <span>Whitefield, Bengaluru</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Free Consultation
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp Chat
                </button>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Properties
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Rohit Malhotra Real Estate. All rights reserved. | RERA Registration: KAR/P/2024/12345
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default App;