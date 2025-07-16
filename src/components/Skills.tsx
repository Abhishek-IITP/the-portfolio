"use client";

import { Skill } from "../utils/interface";
import { ParallaxText } from "./ui/ParallaxText";

import { motion } from "framer-motion";
import Image from "next/image";

const SKILL_CATEGORIES = {
  Frontend: [
    'HTML', 'CSS', 'Javascript', 'TypeScript', 'React', 'Redux', 'Next.js', 'Tailwind', 'Sass', 'Figma', 'Three.js'
  ],
  Backend: [
    'Node.js', 'Express.js', 'FastAPI', 'Socket.io', 'GraphQL', 'Supabase', 'Firebase', 'Git', 'Python', 'C++', 'Docker', 'Vercel'
  ],
  Database: [
    'MongoDB', 'Supabase', 'PostgreSQL', 'SQL', 'Firebase', 'Prisma ORM'
  ],
  Tools: [
    'Git', 'Github', 
  ]
};

interface SkillsProps {
  skills: Skill[];
}

function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-16 px-4 md:px-8">
      <h2 className="text-4xl font-extrabold mb-10 text-center tracking-tight">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(SKILL_CATEGORIES).map(([category, names], idx) => (
          <motion.div
            key={category}
            className="bg-card/80 rounded-2xl p-6 flex flex-col items-center shadow-lg border border-primary/10 hover:shadow-primary/30 transition-shadow duration-300 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 * (idx + 1) }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(82, 82, 200, 0.2)' }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.filter(skill => names.includes(skill.name) && skill.enabled).map((skill, i) => (
                <motion.div
                  key={skill._id}
                  className="flex flex-col items-center gap-1 bg-primary/10 px-3 py-2 rounded-lg shadow-sm group-hover:bg-primary/20 transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={skill.image.url}
                    alt={skill.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain mb-1"
                  />
                  <span className="text-sm font-medium text-primary text-center whitespace-nowrap">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
