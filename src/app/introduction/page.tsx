import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Rocket, Target, Clock, CheckCircle, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-full">
              <Rocket className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Introduction aux Projets SI
              </h1>
              <p className="text-gray-600">
                Concepts fondamentaux et définitions
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Qu&apos;est-ce qu&apos;un projet de système d&apos;information ?
              </h3>
              <p className="text-blue-800">
                Un projet de système d&apos;information correspond à une création ou à une 
                évolution d&apos;un système d&apos;information existant. Dans tous les cas, il 
                s&apos;agit d&apos;<strong>une opération unique et ponctuelle</strong>.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Caractéristiques fondamentales
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-900">
                    Opération unique
                  </h3>
                </div>
                <p className="text-green-800">
                  Même si des similitudes peuvent exister entre deux projets, 
                  chacun d&apos;eux a ses spécificités propres.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-6 w-6 text-purple-600" />
                  <h3 className="text-lg font-semibold text-purple-900">
                    Limité dans le temps
                  </h3>
                </div>
                <p className="text-purple-800">
                  Tout projet a systématiquement <strong>une date de début</strong> et 
                  <strong>une date de fin</strong>, parfaitement identifiées.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                Le Triangle QCD
              </h3>
              <div className="text-center">
                <div className="inline-block bg-white p-6 rounded-lg shadow-md">
                  <div className="text-6xl mb-4">📐</div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-100 p-3 rounded">
                      <div className="font-bold text-blue-900">QUALITÉ</div>
                    </div>
                    <div className="bg-green-100 p-3 rounded">
                      <div className="font-bold text-green-900">COÛTS</div>
                    </div>
                    <div className="bg-purple-100 p-3 rounded">
                      <div className="font-bold text-purple-900">DÉLAIS</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-700 mt-4">
                Un projet se caractérise par trois dimensions fondamentales
              </p>
            </div>

            {/* Urbanisation du SI */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">
                🏗️ Contexte : L'urbanisation du SI
              </h3>
              <div className="text-purple-800 space-y-3">
                <p>
                  Le besoin fréquent d&apos;innovations au sein du SI, combiné à une démarche de contrôle et d&apos;optimisation, aboutit à la notion générale d&apos;<strong>urbanisation</strong>.
                </p>
                <p>
                  Dans ce contexte, les entreprises vont recourir à la <strong>gestion de projet</strong> pour mettre en œuvre les nouveautés qu'elles souhaitent apporter à leur SI.
                </p>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <p className="font-semibold">🎯 Objectif :</p>
                  <p>Permettre une évolution cohérente du SI grâce à une mise en place rigoureuse.</p>
                </div>
              </div>
            </div>

            {/* Certifications et normes */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
                <Award className="h-6 w-6" />
                🏆 Certifications et normes en gestion de projet
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-blue-800">Certifications internationales :</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>PMP (Project Management Professional) :</strong> Certification PMI, référence mondiale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>PRINCE2 :</strong> Méthode structurée britannique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Scrum Master :</strong> Certification agile</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-blue-800">Normes et référentiels :</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>ISO 21500 :</strong> Norme internationale de management de projet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>PMBOK Guide :</strong> Corpus de connaissances du PMI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>ITIL :</strong> Bonnes pratiques pour les services IT</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Facteurs de succès et d'échec */}
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                📈 Facteurs de succès et d'échec des projets SI
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-800">✅ Facteurs de succès :</h4>
                  <ul className="space-y-2 text-green-700">
                    <li>• Implication forte de la direction</li>
                    <li>• Définition claire des objectifs</li>
                    <li>• Communication efficace</li>
                    <li>• Gestion proactive des risques</li>
                    <li>• Équipe compétente et motivée</li>
                    <li>• Méthodologie adaptée</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-red-800">❌ Facteurs d'échec :</h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• Objectifs flous ou changeants</li>
                    <li>• Manque de ressources</li>
                    <li>• Communication défaillante</li>
                    <li>• Résistance au changement</li>
                    <li>• Sous-estimation des risques</li>
                    <li>• Absence de pilotage</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-100 rounded border border-yellow-300">
                <p className="text-yellow-800 text-sm">
                  <strong>Statistique :</strong> Selon le Standish Group, seulement 29% des projets IT sont considérés comme réussis (2015).
                </p>
              </div>
            </div>

            {/* Key Takeaway */}
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle className="h-6 w-6" />
                💡 Point clé à retenir
              </h3>
              <p className="text-green-800 font-medium">
                Un projet SI réussi nécessite un équilibre entre qualité, coûts et délais, 
                tout en s'inscrivant dans une démarche d'urbanisation cohérente.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t">
            <div></div>
            <Link
              href="/section-1"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Suivant : Section I
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}