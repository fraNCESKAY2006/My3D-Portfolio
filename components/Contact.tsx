
import React, { useState, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import AnimatedBlob from './canvas/AnimatedBlob';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
        alert("Please fill out all fields.");
        return;
    }
    setLoading(true);
    // Mock API call
    setTimeout(() => {
      setLoading(false);
      alert("Thank you! I will get back to you as soon as possible.");
      setForm({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="relative container mx-auto px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <Canvas>
                <Suspense fallback={null}>
                    <AnimatedBlob />
                </Suspense>
            </Canvas>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-10">
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    show: { opacity: 1, x: 0, transition: { type: 'spring', duration: 1.2, bounce: 0.4 } }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="flex-[0.75] bg-black/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl"
            >
                <p className="text-sm uppercase tracking-wider text-gray-400">Get in touch</p>
                <h3 className="text-4xl md:text-5xl font-bold text-white mt-2 glowing-text">Contact.</h3>

                <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#6a11cb] transition-all" />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className="bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#6a11cb] transition-all" />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#6a11cb] transition-all" />
                    </label>
                    <button type="submit" className="royal-gradient py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:scale-105 transition-transform duration-300 glowing-button">
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>
        </div>
    </div>
  );
};

export default Contact;
