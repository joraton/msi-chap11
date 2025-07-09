'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { FileText, Building, Users, Server, Database, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Organisme {
  id: string;
  nom: string;
  sigle: string;
  logements: number;
  factures: number;
  sites: number;
  personnel: {
    direction: string[];
    finance: string[];
    informatique: string[];
    patrimoine: string[];
    locatif: string[];
    autres: string[];
  };
  infrastructure: {
    serveurs: string[];
    erp: string;
    particularites: string[];
  };
  couleur: string;
}

const organismes: Organisme[] = [
  {
    id: 'hpg',
    nom: 'Habitat du Pays de Grèzes',
    sigle: 'HPG',
    logements: 8000,
    factures: 6000,
    sites: 1,
    personnel: {
      direction: ['1 directeur général', '3 administrateurs'],
      finance: ['1 directeur financier', '2 comptables'],
      informatique: ['1 directeur SI', '1 technicien informatique'],
      patrimoine: ['1 responsable patrimoine', '8 chargés de gestion'],
      locatif: ['1 responsable locatif', '12 chargés de gestion'],
      autres: ['1 responsable juridique']
    },
    infrastructure: {
      serveurs: ['1 serveur IBM AS/400 (fin de vie)', '1 serveur Windows 2008 (hors support)', '1 serveur NAS (récent)'],
      erp: 'Sivara (AS400 + Windows) - Économique mais limité',
      particularites: ['Connexion haut débit', 'Postes fixes et portables récents', 'GED Xpert compatible']
    },
    couleur: 'blue'
  },
  {
    id: 'hlm',
    nom: 'Haute Loire Métropole',
    sigle: 'HLM',
    logements: 11000,
    factures: 18000,
    sites: 2,
    personnel: {
      direction: ['1 directeur général', '5 administrateurs'],
      finance: ['1 directeur financier', '4 comptables'],
      informatique: ['1 directeur SI', '2 techniciens informatiques'],
      patrimoine: ['2 responsables patrimoine', '12 chargés de gestion'],
      locatif: ['2 responsables locatif', '21 chargés de gestion'],
      autres: ['1 responsable construction + 4 chargés', '1 responsable juridique', '1 responsable sinistres']
    },
    infrastructure: {
      serveurs: ['1 serveur IBM AS/400 (milieu de vie)', 'Mini-datacenter Windows 2008/2012/2016', 'Espace évolution disponible'],
      erp: 'Soki (AS400 + Windows) - Leader du secteur, coûteux mais performant',
      particularites: ['Connexion très haut débit', 'Postes milieu de vie', 'Infrastructure évolutive', 'GED Xpert compatible']
    },
    couleur: 'green'
  },
  {
    id: 'bh',
    nom: 'Brioude Habitat',
    sigle: 'BH',
    logements: 3000,
    factures: 3000,
    sites: 3,
    personnel: {
      direction: ['1 directeur général', '3 administrateurs'],
      finance: ['1 directeur financier', '1 comptable'],
      informatique: ['Aucune personne (sous-traité)'],
      patrimoine: ['3 chargés patrimoine et construction'],
      locatif: ['1 responsable locatif', '4 chargés de gestion'],
      autres: ['1 responsable juridique (contentieux + sinistres)']
    },
    infrastructure: {
      serveurs: ['SI externalisé (SaaS)', 'Clients légers Citrix'],
      erp: 'Habitat Gestion (Web) - Adapté petites structures, économique SaaS',
      particularites: ['Tout externalisé', 'Connexion haut débit', 'Évolutions imposées', 'Pas de personnalisation']
    },
    couleur: 'purple'
  }
];

const questions = [
  {
    id: 1,
    titre: "Organisations possibles du SI",
    question: "Décrire deux organisations possibles du Système d&apos;Information (SI) de la future Direction des systèmes d&apos;information en tenant compte du contexte.",
    points: 2,
    correction: "**Organisation 1 : Centralisation sur HLM**\n\n• Infrastructure : Utiliser le mini-datacenter de HLM comme base\n• ERP : Migrer tous vers Soki (leader du secteur)\n• Avantages : Infrastructure moderne, ERP performant, équipe SI expérimentée\n• Inconvénients : Coût élevé, migration complexe\n\n**Organisation 2 : Hybride avec externalisation partielle**\n\n• Infrastructure : Garder HLM en central + cloud pour BH\n• ERP : Soki pour HLM/HPG, Habitat Gestion en SaaS pour activités simples\n• Avantages : Coûts maîtrisés, transition progressive\n• Inconvénients : Complexité de gestion, interfaces multiples"
  },
  {
    id: 2,
    titre: "Schéma directeur",
    question: "Rappeler la définition d&apos;un schéma directeur, puis établir le schéma directeur de cette transformation dans un des cas présentés à la question 1.",
    points: 4,
    correction: "**Définition du schéma directeur :**\n\nDocument stratégique qui définit l&apos;évolution du SI sur 3-5 ans, aligné sur les objectifs métiers. Il comprend : état des lieux, cible, plan de transformation, budget, planning.\n\n**Schéma directeur - Organisation centralisée HLM :**\n\n**Phase 1 (6 mois) : Préparation**\n• Audit des 3 SI existants\n• Définition architecture cible\n• Plan de migration des données\n\n**Phase 2 (12 mois) : Migration infrastructure**\n• Extension datacenter HLM\n• Migration serveurs HPG vers HLM\n• Mise en place réseau sécurisé\n\n**Phase 3 (18 mois) : Unification applicative**\n• Migration HPG et BH vers Soki\n• Formation des équipes\n• Tests et recette\n\n**Budget estimé : 2M€**\n**ROI attendu : 3 ans**"
  },
  {
    id: 3,
    titre: "Facteur clé de succès et risque",
    question: "Définir pour le projet de transformation un facteur clé de succès et un risque identifié distinct.",
    points: 2,
    correction: "**Facteur clé de succès :**\n\n**Conduite du changement et formation**\n• Accompagnement des 50+ utilisateurs dans la transition\n• Formation approfondie sur les nouveaux outils\n• Communication transparente sur les bénéfices\n• Implication des équipes dans la conception\n\n**Risque identifié :**\n\n**Perte de données lors des migrations**\n• Probabilité : Moyenne\n• Impact : Critique (arrêt activité)\n• Stratégie : RÉDUIRE\n• Actions : Sauvegardes multiples, tests de migration, plan de rollback, validation par métier"
  },
  {
    id: 4,
    titre: "Méthodes de conduite de projet",
    question: "Présenter deux méthodes de conduite de projet de votre choix en expliquant dans quelles mesures elles vous semblent adaptées à cette transformation.",
    points: 2,
    correction: "**Méthode 1 : Cycle en V**\n\n• Adapté car : Projet complexe, enjeux critiques, besoins stables\n• Phases : Analyse → Conception → Réalisation → Tests → Déploiement\n• Avantages : Traçabilité, validation par étapes, maîtrise des risques\n• Inconvénients : Rigidité, délais longs\n\n**Méthode 2 : Approche hybride (Cycle en V + Agile)**\n\n• Architecture et infrastructure : Cycle en V (stabilité requise)\n• Applications métier : Agile (adaptation aux besoins utilisateurs)\n• Avantages : Flexibilité applicative + rigueur infrastructure\n• Recommandation : Méthode hybride pour ce contexte de fusion"
  },
  {
    id: 5,
    titre: "Diagramme de Gantt",
    question: "Tracer un diagramme de Gantt visualisant un projet en 5 tâches et 40 semaines.",
    points: 1,
    correction: "**Diagramme de Gantt - Projet Haute-Loire Habitat (40 semaines) :**\n\n**Tâche 1 : Audit et conception (S1-S8)**\n**Tâche 2 : Préparation infrastructure (S6-S16)**\n**Tâche 3 : Migration données (S14-S26)**\n**Tâche 4 : Déploiement applications (S24-S36)**\n**Tâche 5 : Formation et mise en service (S34-S40)**\n\n*Note : Chevauchements volontaires pour optimiser les délais*\n*Jalons : S8 (Validation conception), S16 (Infrastructure prête), S26 (Données migrées), S36 (Applications déployées), S40 (Mise en service)*"
  }
];

export default function CasExamen() {
  const [selectedOrganisme, setSelectedOrganisme] = useState<string | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [showCorrection, setShowCorrection] = useState(false);

  const selectedOrg = organismes.find(org => org.id === selectedOrganisme);
  const selectedQ = questions.find(q => q.id === selectedQuestion);

  if (selectedQuestion && selectedQ) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BackToPlanButton />
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <FileText className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Question {selectedQ.id} : {selectedQ.titre}
                  </h1>
                  <p className="text-gray-600">{selectedQ.points} points</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedQuestion(null)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour
              </button>
            </div>

            {/* Question */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                📋 Travail à faire
              </h3>
              <p className="text-blue-800 leading-relaxed">
                {selectedQ.question}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setShowCorrection(!showCorrection)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {showCorrection ? 'Masquer' : 'Voir'} la correction
              </button>
            </div>

            {/* Correction */}
            {showCorrection && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-green-50 border border-green-200 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-green-900 mb-4">
                  ✅ Correction détaillée
                </h3>
                <div className="whitespace-pre-line text-green-800 leading-relaxed">
                  {selectedQ.correction}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (selectedOrganisme && selectedOrg) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BackToPlanButton />
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className={`bg-${selectedOrg.couleur}-100 p-3 rounded-full`}>
                  <Building className={`h-8 w-8 text-${selectedOrg.couleur}-600`} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {selectedOrg.nom} ({selectedOrg.sigle})
                  </h1>
                  <p className="text-gray-600">Analyse détaillée de l&apos;organisme</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedOrganisme(null)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour
              </button>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Building className="h-6 w-6 text-blue-600" />
                  <h3 className="font-semibold text-blue-900">Patrimoine</h3>
                </div>
                <p className="text-2xl font-bold text-blue-800">{selectedOrg.logements.toLocaleString()}</p>
                <p className="text-blue-600">logements</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="h-6 w-6 text-green-600" />
                  <h3 className="font-semibold text-green-900">Activité</h3>
                </div>
                <p className="text-2xl font-bold text-green-800">{selectedOrg.factures.toLocaleString()}</p>
                <p className="text-green-600">factures/an</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-6 w-6 text-purple-600" />
                  <h3 className="font-semibold text-purple-900">Sites</h3>
                </div>
                <p className="text-2xl font-bold text-purple-800">{selectedOrg.sites}</p>
                <p className="text-purple-600">site{selectedOrg.sites > 1 ? 's' : ''}</p>
              </div>
            </div>

            {/* Personnel */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">👥 Organisation du personnel</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Direction</h4>
                    <ul className="text-gray-700 space-y-1">
                      {selectedOrg.personnel.direction.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Finance</h4>
                    <ul className="text-gray-700 space-y-1">
                      {selectedOrg.personnel.finance.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Informatique</h4>
                    <ul className="text-gray-700 space-y-1">
                      {selectedOrg.personnel.informatique.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Patrimoine</h4>
                    <ul className="text-gray-700 space-y-1">
                      {selectedOrg.personnel.patrimoine.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Gestion locative</h4>
                    <ul className="text-gray-700 space-y-1">
                      {selectedOrg.personnel.locatif.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Autres</h4>
                    <ul className="text-gray-700 space-y-1">
                      {selectedOrg.personnel.autres.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🖥️ Infrastructure technique</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="h-6 w-6 text-gray-600" />
                    <h4 className="font-semibold text-gray-900">Serveurs</h4>
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    {selectedOrg.infrastructure.serveurs.map((serveur, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>{serveur}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="h-6 w-6 text-gray-600" />
                    <h4 className="font-semibold text-gray-900">ERP</h4>
                  </div>
                  <p className="text-gray-700 mb-4">{selectedOrg.infrastructure.erp}</p>
                  <h5 className="font-medium text-gray-900 mb-2">Particularités :</h5>
                  <ul className="text-gray-700 space-y-1">
                    {selectedOrg.infrastructure.particularites.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-red-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <FileText className="h-10 w-10 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Cas d&apos;examen : Haute-Loire Habitat
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fusion de trois organismes HLM : analyse des systèmes d&apos;information et conduite de projet
            </p>
          </div>

          {/* Context */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">📋 Contexte</h2>
            <p className="text-blue-800 leading-relaxed mb-4">
              Trois organismes HLM de Haute-Loire fusionnent pour créer &quot;Haute-Loire Habitat&quot; :
            </p>
            <ul className="text-blue-800 space-y-2">
              <li>• <strong>Habitat du Pays de Grèzes (HPG)</strong> : 8 000 logements, 1 site</li>
              <li>• <strong>Haute Loire Métropole (HLM)</strong> : 11 000 logements, 2 sites</li>
              <li>• <strong>Brioude Habitat (BH)</strong> : 3 000 logements, 3 sites</li>
            </ul>
            <p className="text-blue-800 mt-4">
              Objectif : Unifier les systèmes d&apos;information pour optimiser la gestion du patrimoine de 22 000 logements.
            </p>
          </div>

          {/* Organismes */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">🏢 Analyse des organismes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {organismes.map((org) => (
                <div
                  key={org.id}
                  onClick={() => setSelectedOrganisme(org.id)}
                  className={`bg-${org.couleur}-50 border border-${org.couleur}-200 p-6 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`bg-${org.couleur}-100 p-3 rounded-full`}>
                      <Building className={`h-6 w-6 text-${org.couleur}-600`} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-${org.couleur}-900`}>{org.sigle}</h3>
                      <p className={`text-sm text-${org.couleur}-700`}>{org.nom}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className={`text-${org.couleur}-700`}>Logements :</span>
                      <span className={`font-semibold text-${org.couleur}-900`}>{org.logements.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-${org.couleur}-700`}>Factures/an :</span>
                      <span className={`font-semibold text-${org.couleur}-900`}>{org.factures.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-${org.couleur}-700`}>Sites :</span>
                      <span className={`font-semibold text-${org.couleur}-900`}>{org.sites}</span>
                    </div>
                  </div>
                  <div className={`mt-4 text-center text-${org.couleur}-600 text-sm font-medium`}>
                    Cliquer pour analyser →
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Questions */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">❓ Questions d&apos;examen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {questions.map((question) => (
                <div
                  key={question.id}
                  onClick={() => setSelectedQuestion(question.id)}
                  className="bg-gray-50 border border-gray-200 p-6 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-red-100 p-2 rounded-full">
                      <FileText className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                      {question.points} pts
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    Question {question.id} : {question.titre}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {question.question.length > 120 
                      ? question.question.substring(0, 120) + '...' 
                      : question.question
                    }
                  </p>
                  <div className="text-center text-red-600 text-sm font-medium">
                    Cliquer pour répondre →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}