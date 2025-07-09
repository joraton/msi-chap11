import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Settings, Workflow, GitBranch, Zap, ArrowRight, ArrowLeft, CheckCircle, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function Section2() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-100 p-3 rounded-full">
              <Settings className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Section II - Méthodologies de projet
              </h1>
              <p className="text-gray-600">
                Approches et méthodes de gestion de projet
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                🎯 Objectif de cette section
              </h3>
              <p className="text-purple-800">
                Comprendre les différentes approches méthodologiques pour structurer 
                et piloter efficacement un projet de système d&apos;information.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Les approches méthodologiques principales
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Approche en cascade */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Workflow className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-900">
                    Approche en Cascade
                  </h3>
                </div>
                <p className="text-blue-700 mb-4">
                  Méthode séquentielle où chaque phase doit être terminée avant de passer à la suivante.
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <div className="text-sm font-semibold text-blue-900">1. Analyse des besoins</div>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <div className="text-sm font-semibold text-blue-900">2. Conception</div>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <div className="text-sm font-semibold text-blue-900">3. Développement</div>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <div className="text-sm font-semibold text-blue-900">4. Tests</div>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <div className="text-sm font-semibold text-blue-900">5. Déploiement</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded">
                  <div className="text-xs text-blue-800">
                    <strong>Avantages :</strong> Structure claire, documentation complète<br/>
                    <strong>Inconvénients :</strong> Peu flexible, retours tardifs
                  </div>
                </div>
              </div>

              {/* Approche Agile */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                  <h3 className="text-xl font-bold text-green-900">
                    Approche Agile
                  </h3>
                </div>
                <p className="text-green-700 mb-4">
                  Méthode itérative privilégiant la collaboration et l&apos;adaptation au changement.
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border border-green-200">
                    <div className="text-sm font-semibold text-green-900">Sprint 1 : Fonctionnalités prioritaires</div>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <div className="text-sm font-semibold text-green-900">Sprint 2 : Améliorations</div>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <div className="text-sm font-semibold text-green-900">Sprint 3 : Nouvelles fonctionnalités</div>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <div className="text-sm font-semibold text-green-900">...</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-100 rounded">
                  <div className="text-xs text-green-800">
                    <strong>Avantages :</strong> Flexibilité, feedback rapide<br/>
                    <strong>Inconvénients :</strong> Moins de documentation, planification complexe
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Les phases clés d&apos;un projet
            </h2>

            <div className="space-y-6">
              {/* Phase d'étude préalable */}
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-orange-900">
                    1. Étude Préalable
                  </h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">Objectifs :</h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Définir le périmètre</li>
                      <li>• Évaluer la faisabilité</li>
                      <li>• Estimer les coûts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">Livrables :</h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Cahier des charges</li>
                      <li>• Planning prévisionnel</li>
                      <li>• Budget détaillé</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">Acteurs :</h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Comité directeur</li>
                      <li>• Utilisateurs clés</li>
                      <li>• Experts métier</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase de conception */}
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <div className="flex items-center gap-3 mb-4">
                  <GitBranch className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-indigo-900">
                    2. Conception
                  </h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-indigo-900 mb-2">Conception fonctionnelle :</h4>
                    <ul className="text-sm text-indigo-700 space-y-1">
                      <li>• Spécifications détaillées</li>
                      <li>• Maquettes et prototypes</li>
                      <li>• Règles de gestion</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900 mb-2">Conception technique :</h4>
                    <ul className="text-sm text-indigo-700 space-y-1">
                      <li>• Architecture système</li>
                      <li>• Choix technologiques</li>
                      <li>• Modèles de données</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900 mb-2">Validation :</h4>
                    <ul className="text-sm text-indigo-700 space-y-1">
                      <li>• Revues de conception</li>
                      <li>• Tests de validation</li>
                      <li>• Approbation MOA</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase de réalisation */}
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="h-6 w-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-teal-900">
                    3. Réalisation
                  </h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-2">Développement :</h4>
                    <ul className="text-sm text-teal-700 space-y-1">
                      <li>• Codage des modules</li>
                      <li>• Tests unitaires</li>
                      <li>• Intégration continue</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-2">Tests :</h4>
                    <ul className="text-sm text-teal-700 space-y-1">
                      <li>• Tests d&apos;intégration</li>
                      <li>• Tests de performance</li>
                      <li>• Tests utilisateurs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-2">Documentation :</h4>
                    <ul className="text-sm text-teal-700 space-y-1">
                      <li>• Manuel utilisateur</li>
                      <li>• Guide d&apos;exploitation</li>
                      <li>• Procédures de maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                💡 Bonnes pratiques méthodologiques
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-yellow-800">
                <div>
                  <h4 className="font-semibold mb-2">Communication :</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Réunions régulières</li>
                    <li>• Reporting transparent</li>
                    <li>• Gestion des parties prenantes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Qualité :</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Revues de code</li>
                    <li>• Tests automatisés</li>
                    <li>• Contrôle continu</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Diagramme de Gantt */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BarChart3 className="h-6 w-6" />
                📊 Exemple : Diagramme de Gantt (40 semaines)
              </h3>
              <div className="space-y-4">
                <div className="text-gray-700 mb-4">
                  <p>Visualisation d&apos;un projet en 5 tâches principales :</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm font-medium">Tâche 1 : Audit</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                      <div className="bg-blue-500 h-6 rounded-full" style={{width: '20%'}}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">S1-S8</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm font-medium">Tâche 2 : Infrastructure</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                      <div className="bg-green-500 h-6 rounded-full ml-[15%]" style={{width: '25%'}}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">S6-S16</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm font-medium">Tâche 3 : Migration</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                      <div className="bg-yellow-500 h-6 rounded-full ml-[35%]" style={{width: '30%'}}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">S14-S26</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm font-medium">Tâche 4 : Déploiement</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                      <div className="bg-purple-500 h-6 rounded-full ml-[60%]" style={{width: '30%'}}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">S24-S36</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm font-medium">Tâche 5 : Formation</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                      <div className="bg-red-500 h-6 rounded-full ml-[85%]" style={{width: '15%'}}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">S34-S40</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mt-4">
                  <p><strong>Note :</strong> Les chevauchements permettent d&apos;optimiser les délais et de paralléliser certaines activités.</p>
                </div>
              </div>
            </div>

            {/* Key Takeaway */}
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-3 flex items-center gap-2">
                <CheckCircle className="h-6 w-6" />
                💡 Point clé à retenir
              </h3>
              <p className="text-purple-800 font-medium">
                Le choix de la méthodologie dépend du contexte : stabilité des besoins, 
                criticité du projet, expérience de l&apos;équipe et contraintes temporelles.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">
                🎯 Moyens mnémotechniques
              </h3>
              <div className="space-y-2 text-green-800">
                <p><strong>CASCADE</strong> : Chaque Activité Suit Chronologiquement l&apos;Autre Dans l&apos;Ensemble</p>
                <p><strong>AGILE</strong> : Adaptation Garantie, Itérations Légères, Évolution</p>
                <p><strong>EPC</strong> : Étude → Préparation → Conception (phases principales)</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t">
            <Link
              href="/section-1"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Précédent
            </Link>
            <Link
              href="/section-3"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Suivant : Section III
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}