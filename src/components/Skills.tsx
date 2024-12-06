import React from 'react';
import { Code2, Database, Palette, Users } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      category: "Programming",
      icon: <Code2 className="w-6 h-6" />,
      items: ["Python", "R", "UI/UX", "Prompt Engineering"]
    },
    {
      category: "Tools",
      icon: <Database className="w-6 h-6" />,
      items: ["VS Code", "Canva", "Excel"]
    },
    {
      category: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      items: ["Problem Solving", "Teamwork"]
    },
    {
      category: "Design",
      icon: <Palette className="w-6 h-6" />,
      items: ["UI/UX Design", "Creative Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}