"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card } from '@/components/ui/card'
import { Award, Users, Building2, Target } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "50+", label: "Team Members" },
    { icon: <Building2 className="h-6 w-6" />, value: "10+", label: "Years Experience" },
    { icon: <Target className="h-6 w-6" />, value: "200+", label: "Projects Completed" },
    { icon: <Award className="h-6 w-6" />, value: "15+", label: "Industry Awards" },
  ]

  return (
    <section ref={ref} className="py-16 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are a team of passionate innovators dedicated to transforming businesses through technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
                width={1000}
                height={1000}
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Our Story</h3>
            <p className="text-muted-foreground">
              Founded with a vision to bridge the gap between technology and business success, 
              we have grown from a small team of developers into a full-service digital solutions provider.
            </p>
            <p className="text-muted-foreground">
              Our approach combines technical excellence with creative innovation, 
              delivering solutions that not only meet today is needs but anticipate tomorrow is challenges.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex justify-center mb-2 text-primary"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-2xl font-bold"
                  >
                    {stat.value}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-sm text-muted-foreground"
                  >
                    {stat.label}
                  </motion.p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}