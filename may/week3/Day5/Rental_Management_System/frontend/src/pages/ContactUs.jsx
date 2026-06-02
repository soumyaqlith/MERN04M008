import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Car,
  Globe,
  AtSign,
  PlayCircle,
} from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-6">
              <Car size={18} />
              <span className="font-medium">RentRide Customer Support</span>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Have questions about bookings, vehicles, pricing, or support?
              We're here to help you get on the road quickly and safely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Let's Talk
              </h2>

              <p className="text-gray-600">
                Whether you need assistance with your booking or want to know
                more about our vehicle rental services, our team is ready to
                help.
              </p>
            </div>

            {/* INFO CARDS */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-md flex items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <Phone className="text-yellow-600" />
                </div>

                <div>
                  <h3 className="font-semibold">Phone Number</h3>
                  <p className="text-gray-500">+91 9876543210</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md flex items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <Mail className="text-yellow-600" />
                </div>

                <div>
                  <h3 className="font-semibold">Email Address</h3>
                  <p className="text-gray-500">support@rentride.com</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md flex items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <MapPin className="text-yellow-600" />
                </div>

                <div>
                  <h3 className="font-semibold">Office Address</h3>
                  <p className="text-gray-500">Bhubaneswar, Odisha, India</p>
                </div>
              </div>
            </div>
            {/* SOCIAL LINKS */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>

              <div className="flex items-center gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3 rounded-xl text-white shadow-lg"
                >
                  <AtSign size={22} />
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black p-3 rounded-xl text-white shadow-lg"
                >
                  <Globe size={22} />
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 p-3 rounded-xl text-white shadow-lg"
                >
                  <PlayCircle size={22} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-black p-3 rounded-xl">
                <MessageSquare className="text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Send Message
                </h2>
                <p className="text-gray-500 text-sm">
                  Fill out the form below.
                </p>
              </div>
            </div>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-black text-white py-16 mt-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Rent Your Next Vehicle?
          </h2>

          <p className="text-gray-300 mb-6">
            Explore our collection of cars, bikes, and premium vehicles.
          </p>

          <button className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition">
            Browse Vehicles
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
