'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { HelpCircle, CheckCircle, XCircle, ArrowRight, ArrowLeft, Trophy } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Que signifie MOA dans un projet de système d'information ?",
    options: [
      "Maîtrise d'Œuvre Avancée",
      "Maîtrise d'Ouvrage",
      "Management Opérationnel Agile",
      "Méthode d'Organisation Adaptée"
    ],
    correct: 1,
    explanation: "MOA signifie Maîtrise d'Ouvrage. Elle désigne l'entreprise bénéficiaire du projet, le CLIENT, responsable de l'adéquation des résultats aux besoins."
  },
  {
    id: 2,
    question: "Quelles sont les trois dimensions fondamentales d'un projet (triangle QCD) ?",
    options: [
      "Qualité, Coûts, Délais",
      "Quantité, Complexité, Durée",
      "Qualité, Compétences, Documentation",
      "Questions, Contrôle, Décisions"
    ],
    correct: 0,
    explanation: "Le triangle QCD représente les trois dimensions fondamentales d'un projet : Qualité, Coûts et Délais. Ces trois éléments sont interdépendants."
  },
  {
    id: 3,
    question: "Qui préside le comité de pilotage d'un projet ?",
    options: [
      "Le chef de projet",
      "Le directeur de projet",
      "Le responsable informatique",
      "Un représentant utilisateur"
    ],
    correct: 1,
    explanation: "Le comité de pilotage est présidé par un directeur de projet. Il est l'organe directeur de la maîtrise d'ouvrage."
  },
  {
    id: 4,
    question: "Dans l'approche Agile, comment appelle-t-on les itérations de développement ?",
    options: [
      "Phases",
      "Cycles",
      "Sprints",
      "Modules"
    ],
    correct: 2,
    explanation: "Dans l'approche Agile, les itérations de développement sont appelées des Sprints. Chaque sprint produit des fonctionnalités utilisables."
  },
  {
    id: 5,
    question: "Quelle stratégie de gestion des risques consiste à déléguer le risque à un tiers ?",
    options: [
      "Éviter",
      "Réduire",
      "Transférer",
      "Accepter"
    ],
    correct: 2,
    explanation: "Transférer consiste à déléguer le risque à un tiers (assurance, sous-traitant, etc.). C'est l'une des quatre stratégies de traitement des risques."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(selectedAnswers[currentQuestion - 1] !== undefined);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const score = selectedAnswers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BackToPlanButton />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="mb-8">
              <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Quiz terminé !
              </h1>
              <div className="text-6xl font-bold mb-4">
                <span className={percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-orange-600' : 'text-red-600'}>
                  {percentage}%
                </span>
              </div>
              <p className="text-xl text-gray-600">
                Vous avez obtenu {score} sur {questions.length} bonnes réponses
              </p>
            </div>

            <div className="mb-8">
              {percentage >= 80 && (
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    🎉 Excellent travail !
                  </h3>
                  <p className="text-green-800">
                    Vous maîtrisez parfaitement les concepts de gestion de projet SI.
                  </p>
                </div>
              )}
              {percentage >= 60 && percentage < 80 && (
                <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">
                    👍 Bon travail !
                  </h3>
                  <p className="text-orange-800">
                    Vous avez une bonne compréhension. Révisez les points manqués.
                  </p>
                </div>
              )}
              {percentage < 60 && (
                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">
                    📚 À retravailler
                  </h3>
                  <p className="text-red-800">
                    Relisez le cours et refaites le quiz pour améliorer vos résultats.
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={resetQuiz}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Refaire le quiz
              </button>
              <Link
                href="/questions-dscg"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Questions DSCG
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const selectedAnswer = selectedAnswers[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-orange-100 p-3 rounded-full">
              <HelpCircle className="h-8 w-8 text-orange-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">
                Quiz - Gestion de Projet SI
              </h1>
              <p className="text-gray-600">
                Question {currentQuestion + 1} sur {questions.length}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                {score}/{currentQuestion + (isAnswered ? 1 : 0)}
              </div>
              <div className="text-sm text-gray-500">Score actuel</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + (isAnswered ? 1 : 0)) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {question.question}
              </h2>

              <div className="space-y-4">
                {question.options.map((option, index) => {
                  let buttonClass = "w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ";
                  
                  if (!isAnswered) {
                    buttonClass += "border-gray-200 hover:border-blue-300 hover:bg-blue-50";
                  } else {
                    if (index === question.correct) {
                      buttonClass += "border-green-500 bg-green-50 text-green-900";
                    } else if (index === selectedAnswer) {
                      buttonClass += "border-red-500 bg-red-50 text-red-900";
                    } else {
                      buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => !isAnswered && handleAnswer(index)}
                      disabled={isAnswered}
                      className={buttonClass}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {isAnswered && (
                          <div>
                            {index === question.correct && (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            )}
                            {index === selectedAnswer && index !== question.correct && (
                              <XCircle className="h-5 w-5 text-red-600" />
                            )}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8"
              >
                <div className={`p-6 rounded-lg border-l-4 ${
                  isCorrect 
                    ? 'bg-green-50 border-green-500' 
                    : 'bg-red-50 border-red-500'
                }`}>
                  <h3 className={`text-lg font-semibold mb-2 ${
                    isCorrect ? 'text-green-900' : 'text-red-900'
                  }`}>
                    {isCorrect ? '✅ Correct !' : '❌ Incorrect'}
                  </h3>
                  <p className={isCorrect ? 'text-green-800' : 'text-red-800'}>
                    {question.explanation}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t">
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Précédent
            </button>
            
            {isAnswered && (
              <button
                onClick={nextQuestion}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                {currentQuestion === questions.length - 1 ? 'Voir les résultats' : 'Suivant'}
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}