import React from "react";
import { motion } from "framer-motion";
import {
  Car,
  Shield,
  Clock3,
  Users,
  ArrowRight,
  Star,
  MapPin,
} from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";

function CarModel() {
  const { scene } = useGLTF("/models/car.glb");

  return <primitive object={scene} scale={0.8} position={[0, -0.5, 0]} />;
}

function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen overflow-hidden">
      {/* HERO SECTION */}

      <section className="relative max-w-7xl mx-auto px-6 py-15">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold"
            >
              #1 Vehicle Rental Platform
            </motion.span>

            <h1 className="text-6xl font-black mt-6 leading-tight text-gray-900">
              Rent The
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                Perfect Ride
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Explore luxury cars, bikes and commercial vehicles with affordable
              pricing and premium service.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="bg-black text-white px-8 py-4 rounded-xl hover:scale-105 transition">
                Explore Vehicles
              </button>

              <button className="border border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* RIGHT 3D */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="h-[500px]"
          >
            <Canvas camera={{ position: [0, 2, 12], fov: 30 }}>
              <ambientLight intensity={1.5} />

              <directionalLight position={[5, 5, 5]} intensity={3} />

              <Environment preset="city" />

              <CarModel />

              <ContactShadows
                position={[0, -1.5, 0]}
                opacity={0.4}
                scale={20}
                blur={2}
              />

              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={1}
              />
            </Canvas>
          </motion.div>
        </div>
      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              number: 500,
              text: "Vehicles",
            },
            {
              number: 1200,
              text: "Customers",
            },
            {
              number: 50,
              text: "Cities",
            },
            {
              number: 98,
              text: "Success Rate",
            },
          ].map((item, index) => (
            <motion.div
              whileHover={{
                y: -10,
              }}
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-black text-gray-900"
              >
                {item.number}+
              </motion.h2>

              <p className="text-gray-600 mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">Why Choose Us</h2>

          <p className="text-gray-600 mt-4">
            Premium experience with trusted service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield size={40} />,
              title: "Secure Rentals",
            },
            {
              icon: <Clock3 size={40} />,
              title: "24/7 Support",
            },
            {
              icon: <Users size={40} />,
              title: "Trusted By Thousands",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
              }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
            >
              <div className="bg-gray-100 w-fit p-4 rounded-2xl">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">{item.title}</h3>

              <p className="text-gray-600 mt-3">
                Experience seamless rentals with premium support and security.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VEHICLE TYPES */}

      <section className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold text-white mb-16">
            Available Categories
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {["Luxury Cars", "SUV", "Sports Cars", "Motorcycles"].map(
              (item, index) => (
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 text-white"
                >
                  <Car size={40} />

                  <h3 className="text-2xl font-bold mt-6">{item}</h3>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-center text-5xl font-bold mb-16">
          Happy Customers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-3xl shadow-lg border p-8"
            >
              <div className="flex gap-1 text-yellow-500">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>

              <p className="mt-4 text-gray-600">
                Amazing rental experience. Vehicles were clean and booking was
                extremely easy.
              </p>

              <div className="mt-6">
                <h4 className="font-bold">John Customer</h4>
                <p className="text-sm text-gray-500">Frequent Traveller</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="bg-black text-white py-24">
        <motion.div
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 80,
          }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h2 className="text-6xl font-black">Ready To Drive?</h2>

          <p className="mt-6 text-gray-300 text-lg">
            Find your perfect vehicle and start your journey today.
          </p>

          <button className="mt-10 bg-white text-black px-10 py-4 rounded-xl font-bold flex items-center gap-2 mx-auto hover:scale-105 transition">
            Book Now
            <ArrowRight />
          </button>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
