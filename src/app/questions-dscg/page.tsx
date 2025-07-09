'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Award, FileText, CheckCircle, Clock, Target, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Exercise {
  id: number;
  title: string;
  context: string;
  question: string;
  points: number;
  duration: string;
  correction: string;
  methodology: string[];
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Cas pratique : Mise en place d'un ERP",
    context: "L'entreprise TECHNO SA (500 salariés) souhaite remplacer son système d'information vieillissant par un ERP intégré. Le projet concerne les modules comptabilité, gestion commerciale et ressources humaines. Budget alloué : 800 000 €. Délai souhaité : 18 mois.",
    question: "1. Identifiez les acteurs clés du projet et définissez leurs rôles respectifs (MOA/MOE). \n2. Proposez une organisation projet adaptée avec les comités nécessaires. \n3. Listez 5 risques majeurs et leurs stratégies de traitement.",
    points: 20,
    duration: "45 min",
    correction: "**1. Acteurs clés :**\n\n**MOA (Maîtrise d'Ouvrage) :**\n- Directeur Général : sponsor du projet\n- Directeur Financier : pilotage module comptabilité\n- Directeur Commercial : pilotage module ventes\n- DRH : pilotage module RH\n- Utilisateurs clés de chaque service\n\n**MOE (Maîtrise d'Œuvre) :**\n- DSI : chef de projet technique\n- Intégrateur ERP : réalisation technique\n- Consultants fonctionnels : paramétrage\n\n**2. Organisation projet :**\n\n**Comité Directeur :**\n- Président : Directeur Général\n- Membres : Directeurs métiers + DSI\n- Rôle : validation budget, orientations stratégiques\n\n**Comité de Pilotage :**\n- Président : Directeur de projet (MOA)\n- Membres : chefs de projet métiers + DSI\n- Rôle : suivi avancement, arbitrages\n\n**Équipes projet :**\n- 3 équipes métiers (Compta/Ventes/RH)\n- 1 équipe technique (DSI + intégrateur)\n\n**3. Risques majeurs :**\n\n1. **Résistance au changement** → Stratégie : RÉDUIRE (plan de conduite du changement, formation)\n2. **Dépassement budget** → Stratégie : RÉDUIRE (suivi budgétaire strict, jalons de validation)\n3. **Retard planning** → Stratégie : RÉDUIRE (planning détaillé, ressources supplémentaires)\n4. **Défaillance intégrateur** → Stratégie : TRANSFÉRER (clauses contractuelles, garanties)\n5. **Perte de données** → Stratégie : RÉDUIRE (sauvegardes, tests de migration)",
    methodology: [
      "Identifier tous les acteurs concernés par le projet",
      "Distinguer clairement MOA (client) et MOE (réalisateur)",
      "Structurer l'organisation en comités de gouvernance",
      "Utiliser la matrice RACI pour clarifier les responsabilités",
      "Appliquer les 4 stratégies de traitement des risques : Éviter, Réduire, Transférer, Accepter"
    ]
  },
  {
    id: 2,
    title: "Analyse : Échec d'un projet SI",
    context: "Le projet de refonte du site e-commerce de l'entreprise MODE+ a été abandonné après 2 ans et 1,2 M€ investis. Causes identifiées : spécifications floues, changements fréquents de périmètre, équipe projet instable, communication défaillante entre MOA et MOE.",
    question: "1. Analysez les causes d'échec en les classant par catégorie (organisationnel, technique, humain). \n2. Proposez 3 mesures préventives pour chaque catégorie. \n3. Définissez les indicateurs de pilotage qui auraient pu alerter en amont.",
    points: 15,
    duration: "30 min",
    correction: "**1. Analyse des causes d'échec :**\n\n**Organisationnel :**\n- Spécifications floues (défaut de cadrage)\n- Changements fréquents de périmètre (gouvernance faible)\n- Communication défaillante MOA/MOE\n\n**Technique :**\n- Absence de méthodologie structurée\n- Pas de validation par étapes\n- Manque de tests et prototypage\n\n**Humain :**\n- Équipe projet instable (turnover)\n- Manque de compétences\n- Résistance au changement non gérée\n\n**2. Mesures préventives :**\n\n**Organisationnel :**\n- Cahier des charges détaillé et validé\n- Comité de pilotage avec pouvoir de décision\n- Processus de gestion des changements formalisé\n\n**Technique :**\n- Méthodologie projet structurée (Agile/Cycle en V)\n- Livraisons itératives avec validation\n- Tests continus et recette utilisateur\n\n**Humain :**\n- Contrats long terme pour l'équipe projet\n- Plan de formation et montée en compétences\n- Conduite du changement dès le début\n\n**3. Indicateurs d'alerte :**\n\n**Délais :**\n- Écart planning > 10%\n- Vélocité en baisse\n- Jalons non respectés\n\n**Coûts :**\n- Dépassement budget > 5%\n- Coût prévisionnel à terminaison\n- Ratio coût/fonctionnalité\n\n**Qualité :**\n- Taux de défauts en hausse\n- Satisfaction utilisateur < 70%\n- Nombre de changements de spécifications",
    methodology: [
      "Utiliser une grille d'analyse multicritères (organisationnel/technique/humain)",
      "Appliquer le principe de prévention plutôt que correction",
      "Définir des indicateurs SMART (Spécifiques, Mesurables, Atteignables, Réalistes, Temporels)",
      "Mettre en place un système d'alerte précoce",
      "Capitaliser sur les échecs pour améliorer les projets futurs"
    ]
  },
  {
    id: 3,
    title: "Étude de cas : Choix méthodologique",
    context: "Une startup fintech doit développer une application mobile de paiement. Contraintes : time-to-market critique (6 mois), équipe réduite (5 développeurs), besoins évolutifs, réglementation stricte. Deux approches possibles : Agile ou Cycle en V.",
    question: "1. Comparez les deux approches selon les critères : délais, flexibilité, qualité, documentation. \n2. Justifiez votre choix méthodologique. \n3. Proposez une organisation projet adaptée à la méthode choisie.",
    points: 15,
    duration: "30 min",
    correction: "**1. Comparaison des approches :**\n\n**Cycle en V :**\n- Délais : Longs (phases séquentielles)\n- Flexibilité : Faible (changements coûteux)\n- Qualité : Élevée (tests structurés)\n- Documentation : Complète (traçabilité)\n\n**Agile :**\n- Délais : Courts (livraisons fréquentes)\n- Flexibilité : Élevée (adaptation continue)\n- Qualité : Variable (tests continus)\n- Documentation : Allégée (juste nécessaire)\n\n**2. Choix recommandé : AGILE adapté**\n\n**Justification :**\n- Time-to-market critique → Agile permet des livraisons rapides\n- Besoins évolutifs → Flexibilité d'adaptation\n- Équipe réduite → Communication directe facilitée\n- Contrainte réglementation → Adaptation avec documentation ciblée\n\n**Adaptations nécessaires :**\n- Documentation réglementaire renforcée\n- Tests de sécurité à chaque sprint\n- Validation juridique des fonctionnalités\n\n**3. Organisation projet Agile adaptée :**\n\n**Équipe Scrum :**\n- Product Owner : Responsable produit (définit les besoins)\n- Scrum Master : Chef de projet (facilite les processus)\n- Dev Team : 5 développeurs (réalisation)\n\n**Instances :**\n- Sprint Planning : Planification des sprints (2 semaines)\n- Daily Scrum : Point quotidien (15 min)\n- Sprint Review : Démonstration aux parties prenantes\n- Sprint Retrospective : Amélioration continue\n\n**Adaptations réglementaires :**\n- Comité de validation juridique\n- Documentation technique obligatoire\n- Tests de sécurité automatisés",
    methodology: [
      "Analyser le contexte projet (contraintes, enjeux, ressources)",
      "Utiliser une matrice de décision multicritères",
      "Adapter la méthodologie au contexte spécifique",
      "Prévoir les instances de gouvernance appropriées",
      "Anticiper les contraintes réglementaires et qualité"
    ]
  }
];

export default function QuestionsDSCG() {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [showCorrection, setShowCorrection] = useState(false);
  const [showMethodology, setShowMethodology] = useState(false);

  const selectExercise = (id: number) => {
    setSelectedExercise(id);
    setShowCorrection(false);
    setShowMethodology(false);
  };

  const selectedEx = exercises.find(ex => ex.id === selectedExercise);

  if (selectedExercise && selectedEx) {
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
                    {selectedEx.title}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {selectedEx.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="h-4 w-4" />
                      {selectedEx.points} points
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedExercise(null)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour
              </button>
            </div>

            {/* Context */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                📋 Contexte
              </h3>
              <p className="text-blue-800 leading-relaxed">
                {selectedEx.context}
              </p>
            </div>

            {/* Question */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                ❓ Travail à faire
              </h3>
              <div className="whitespace-pre-line text-gray-800">
                {selectedEx.question}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setShowMethodology(!showMethodology)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {showMethodology ? 'Masquer' : 'Voir'} la méthodologie
              </button>
              <button
                onClick={() => setShowCorrection(!showCorrection)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {showCorrection ? 'Masquer' : 'Voir'} la correction
              </button>
            </div>

            {/* Methodology */}
            {showMethodology && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8"
              >
                <h3 className="text-lg font-semibold text-purple-900 mb-4">
                  🎯 Méthodologie recommandée
                </h3>
                <ul className="space-y-2">
                  {selectedEx.methodology.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-purple-800">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

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
                  {selectedEx.correction}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-red-100 p-3 rounded-full">
              <Award className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Cas pratique - Gestion de Projet SI
              </h1>
              <p className="text-gray-600">
                Exercices pratiques et cas concrets d&apos;application
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-900 mb-3">
              🎯 Objectifs pédagogiques
            </h3>
            <div className="text-red-800 space-y-2">
              <p>• Appliquer les concepts théoriques à des situations concrètes</p>
              <p>• Développer une approche méthodologique structurée</p>
              <p>• Maîtriser les techniques d&apos;analyse et de résolution de problèmes</p>
              <p>• Se préparer aux épreuves du DSCG UE5 - Management des SI</p>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">
              💡 Conseils pour réussir
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-yellow-800">
              <div>
                <h4 className="font-semibold mb-2">Avant de commencer :</h4>
                <ul className="text-sm space-y-1">
                  <li>• Lisez attentivement le contexte</li>
                  <li>• Identifiez les mots-clés</li>
                  <li>• Structurez votre réponse</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Pendant l&apos;exercice :</h4>
                <ul className="text-sm space-y-1">
                  <li>• Utilisez le vocabulaire technique</li>
                  <li>• Justifiez vos choix</li>
                  <li>• Donnez des exemples concrets</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exercises List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Exercices disponibles
            </h2>
            
            {exercises.map((exercise, index) => (
              <motion.div
                key={exercise.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => selectExercise(exercise.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Exercice {exercise.id} : {exercise.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {exercise.context}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {exercise.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Target className="h-4 w-4" />
                        {exercise.points} points
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        Niveau DSCG
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium">
                      Commencer
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t mt-8">
            <Link
              href="/quiz"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour au Quiz
            </Link>
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Retour au plan du cours
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}