'use client';

import { Target, Rocket, BarChart3, Users, Settings, HelpCircle, Award, FileText } from 'lucide-react';
import SectionBlock from './SectionBlock';

const sections = [
  {
    title: 'Introduction',
    description: 'Concepts de base et définitions des projets SI',
    href: '/introduction',
    icon: Rocket,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Section I - Organiser un projet',
    description: 'Les équipes, rôles et responsabilités',
    href: '/section-1',
    icon: Users,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Section II - Méthodologies',
    description: 'Approches et méthodes de gestion de projet',
    href: '/section-2',
    icon: Settings,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Section III - Pilotage et contrôle',
    description: 'Suivi, indicateurs et gestion des risques',
    href: '/section-3',
    icon: BarChart3,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  },
  {
    title: 'Quiz',
    description: 'Évaluation interactive de vos connaissances',
    href: '/quiz',
    icon: HelpCircle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Questions DSCG',
    description: 'Historique complet des questions DSCG (2016-2024)',
    href: '/questions-dscg-historique',
    icon: FileText,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Cas pratique',
    description: 'Exercices pratiques et cas concrets',
    href: '/questions-dscg',
    icon: Award,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    title: 'Cas créé par l\'IA',
    description: 'Étude de cas réelle : Fusion des bailleurs sociaux Haute-Loire Habitat',
    href: '/cas-examen',
    icon: FileText,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  }
];

export default function CoursePlan() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Target className="h-8 w-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">
            Plan du cours
          </h2>
        </div>
        <p className="text-gray-600 text-lg">
          Suivez le parcours structuré pour maîtriser la mise en place d&apos;un projet
        </p>
      </div>

      {/* Sections Grid */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <SectionBlock
            key={section.href}
            {...section}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}