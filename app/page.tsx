'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, Users, TrendingUp, Target, Zap, Globe, BarChart3, UserCheck, Award } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-900 text-dark-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark-900"></div>
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile Image */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-800">
                  <Image 
                    src="/profile.png" 
                    alt="Tener Profile" 
                    width={128}
                    height={128}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Tener</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-dark-100 mb-4">
              Head of Growth / Regional Growth Lead
            </h2>
            
            <p className="text-xl text-dark-300 mb-8 max-w-2xl mx-auto">
              Outcome-driven growth operator scaling Web3 projects from zero to traction.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#case-studies" className="btn-primary">
                View Case Studies
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* About / Growth Philosophy */}
      <section className="py-20 bg-dark-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              <span className="gradient-text">Growth Philosophy</span>
            </h2>
            <p className="text-lg text-dark-200 leading-relaxed">
              My approach to Web3 growth is rooted in relentless experimentation, strategic distribution, 
              and optimizing funnels to drive compounding results. I believe in leveraging community and 
              on-chain insights to build sustainable growth loops, focusing on tangible outcomes over 
              theoretical frameworks. My philosophy is simple: identify opportunities, execute rapidly, 
              measure meticulously, and scale what works.
            </p>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Core Growth Case Studies */}
      <section id="case-studies" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="gradient-text">Core Growth Case Studies</span>
            </h2>
            <p className="text-dark-300 text-lg">From zero to traction, documented</p>
          </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* TON House of Stars */}
            <div className="card">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary-400">TON House of Stars</h3>
                <a 
                  href="https://x.com/tonhouseofstars" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
              
              <p className="text-sm font-medium text-primary-300 mb-4">Co-Founder & Head of Growth</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-dark-100 mb-2">What it is:</h4>
                <p className="text-dark-300">
                  TON House of Stars is an innovative Telegram Stars exchange built on the TON blockchain, 
                  providing a seamless platform for users to trade Telegram's in-app currency.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-dark-100 mb-2">Growth Strategies:</h4>
                <ul className="space-y-2 text-dark-300">
                  <li className="flex items-start">
                    <UserCheck className="w-4 h-4 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Strategic Partnerships:</strong> Forged key collaborations with top TON ecosystem projects</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Early User Incentives:</strong> Designed targeted incentive programs for early adopters</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-4 h-4 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Community-Led Distribution:</strong> Leveraged Telegram's native community features</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="metric-card">
                  <div className="text-2xl font-bold text-primary-400">~$7,500</div>
                  <div className="text-sm text-dark-400">Total Volume</div>
                </div>
                <div className="metric-card">
                  <div className="text-2xl font-bold text-primary-400">145+</div>
                  <div className="text-sm text-dark-400">Active Users</div>
                </div>
                <div className="metric-card">
                  <div className="text-2xl font-bold text-primary-400">47%</div>
                  <div className="text-sm text-dark-400">WoW User Growth</div>
                </div>
                <div className="metric-card">
                  <div className="text-2xl font-bold text-primary-400">60%</div>
                  <div className="text-sm text-dark-400">WoW Volume Growth</div>
                </div>
              </div>
            </motion.div>
            </div>

            {/* Nest Wallet */}
            <div className="card">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary-400">Nest Wallet</h3>
                <a 
                  href="https://x.com/nestwalletxyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
              
              <p className="text-sm font-medium text-primary-300 mb-4">Regional Growth Lead</p>
              <p className="text-xs text-dark-400 mb-4">Reference: @bigzuko_ (X)</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-dark-100 mb-2">Scope of Responsibility:</h4>
                <ul className="space-y-2 text-dark-300">
                  <li className="flex items-start">
                    <Globe className="w-4 h-4 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>IRL Activations:</strong> Organized educational events, meetups, and workshops</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-4 h-4 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Ambassadorial Presence:</strong> Represented at key industry events</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-4 h-4 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Localized Strategy:</strong> Adapted global strategies for regional impact</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="metric-card">
                  <div className="text-2xl font-bold text-primary-400">~$500k</div>
                  <div className="text-sm text-dark-400">Average Daily Volume (Dec 2024)</div>
                </div>
                <div className="metric-card">
                  <div className="text-xl font-bold text-primary-400">Multiple IRL Events</div>
                  <div className="text-sm text-dark-400">Educational campus events executed</div>
                </div>
                <div className="metric-card">
                  <div className="text-xl font-bold text-primary-400">Increased Sign-ups</div>
                  <div className="text-sm text-dark-400">Measurable growth in on-chain activity</div>
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Skill Stack */}
      <section className="py-20 bg-dark-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="gradient-text">Growth Skill Stack</span>
            </h2>
          </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: BarChart3,
                title: "Web3 Growth Strategy",
                description: "Architecting comprehensive growth plans for dApps, protocols, and platforms"
              },
              {
                icon: Users,
                title: "Community & Ecosystem Growth",
                description: "Building vibrant communities and driving network effects"
              },
              {
                icon: TrendingUp,
                title: "On-chain Metrics & Data-Backed Growth",
                description: "Utilizing blockchain data to identify opportunities and optimize campaigns"
              },
              {
                icon: UserCheck,
                title: "Partnerships & BD-Driven Distribution",
                description: "Forging strategic alliances to unlock new distribution channels"
              },
              {
                icon: Globe,
                title: "IRL Activations + Online Funnels",
                description: "Integrating offline engagement with online conversion funnels"
              },
              {
                icon: Zap,
                title: "Rapid Experimentation",
                description: "Testing and scaling growth initiatives with data-driven iteration"
              }
            ].map((skill, index) => (
              <div key={index} className="card text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <skill.icon className="w-8 h-8 text-primary-400 mx-auto mb-4" />
                <h3 className="font-semibold text-dark-100 mb-2">{skill.title}</h3>
                <p className="text-sm text-dark-300">{skill.description}</p>
              </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Proof of Work */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              <span className="gradient-text">Let's Build Together</span>
            </h2>
            <p className="text-lg text-dark-200 mb-8">
              Ready to scale your Web3 project? Let's discuss how we can drive sustainable growth for your platform.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:contact@tener.dev" className="btn-primary">
                Get in Touch
              </a>
              <a href="https://x.com/Web3kxn_" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Connect on X
              </a>
            </div>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
