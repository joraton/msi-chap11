import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BarChart3, AlertTriangle, TrendingUp, Shield, ArrowRight, ArrowLeft, Target, Clock, Calculator } from 'lucide-react';
import Link from 'next/link';

export default function Section3() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-indigo-100 p-3 rounded-full">
              <BarChart3 className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Section III - Pilotage et contrôle
              </h1>
              <p className="text-gray-600">
                Suivi, indicateurs et gestion des risques
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                🎯 Enjeux du pilotage
              </h3>
              <p className="text-indigo-800">
                Le pilotage d&apos;un projet consiste à <strong>surveiller en permanence</strong> 
                l&apos;avancement, la qualité et les coûts pour prendre les bonnes décisions 
                au bon moment.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Les indicateurs de pilotage
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Indicateurs de délais */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                  <h3 className="text-lg font-bold text-blue-900">
                    Délais
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <div className="text-sm font-semibold text-blue-900">Avancement physique</div>
                    <div className="text-xs text-blue-700">% de tâches terminées</div>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <div className="text-sm font-semibold text-blue-900">Écart planning</div>
                    <div className="text-xs text-blue-700">Retard/avance en jours</div>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <div className="text-sm font-semibold text-blue-900">Vélocité</div>
                    <div className="text-xs text-blue-700">Rythme de réalisation</div>
                  </div>
                </div>
              </div>

              {/* Indicateurs de coûts */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                  <h3 className="text-lg font-bold text-green-900">
                    Coûts
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border border-green-200">
                    <div className="text-sm font-semibold text-green-900">Budget consommé</div>
                    <div className="text-xs text-green-700">% du budget utilisé</div>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <div className="text-sm font-semibold text-green-900">Coût prévisionnel</div>
                    <div className="text-xs text-green-700">Estimation à terminaison</div>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <div className="text-sm font-semibold text-green-900">ROI prévisionnel</div>
                    <div className="text-xs text-green-700">Retour sur investissement</div>
                  </div>
                </div>
              </div>

              {/* Indicateurs de qualité */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                  <h3 className="text-lg font-bold text-purple-900">
                    Qualité
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border border-purple-200">
                    <div className="text-sm font-semibold text-purple-900">Taux de défauts</div>
                    <div className="text-xs text-purple-700">Nombre d&apos;anomalies</div>
                  </div>
                  <div className="bg-white p-3 rounded border border-purple-200">
                    <div className="text-sm font-semibold text-purple-900">Couverture tests</div>
                    <div className="text-xs text-purple-700">% de code testé</div>
                  </div>
                  <div className="bg-white p-3 rounded border border-purple-200">
                    <div className="text-sm font-semibold text-purple-900">Satisfaction utilisateur</div>
                    <div className="text-xs text-purple-700">Feedback utilisateurs</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              La gestion des risques
            </h2>

            <div className="space-y-6">
              {/* Identification des risques */}
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <h3 className="text-xl font-bold text-red-900">
                    1. Identification des risques
                  </h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Risques techniques :</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Complexité technologique</li>
                      <li>• Obsolescence des outils</li>
                      <li>• Problèmes d&apos;intégration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Risques organisationnels :</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Résistance au changement</li>
                      <li>• Manque de compétences</li>
                      <li>• Turnover de l&apos;équipe</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Risques externes :</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Évolution réglementaire</li>
                      <li>• Défaillance fournisseur</li>
                      <li>• Contraintes budgétaires</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Évaluation des risques */}
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-orange-900">
                    2. Évaluation des risques
                  </h3>
                </div>
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-3">Matrice Probabilité × Impact</h4>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="bg-gray-100 p-2 text-center font-semibold">Impact \ Probabilité</div>
                    <div className="bg-gray-100 p-2 text-center font-semibold">Faible</div>
                    <div className="bg-gray-100 p-2 text-center font-semibold">Moyen</div>
                    <div className="bg-gray-100 p-2 text-center font-semibold">Fort</div>
                    
                    <div className="bg-gray-100 p-2 text-center font-semibold">Faible</div>
                    <div className="bg-green-200 p-2 text-center">Vert</div>
                    <div className="bg-green-200 p-2 text-center">Vert</div>
                    <div className="bg-yellow-200 p-2 text-center">Orange</div>
                    
                    <div className="bg-gray-100 p-2 text-center font-semibold">Moyen</div>
                    <div className="bg-green-200 p-2 text-center">Vert</div>
                    <div className="bg-yellow-200 p-2 text-center">Orange</div>
                    <div className="bg-red-200 p-2 text-center">Rouge</div>
                    
                    <div className="bg-gray-100 p-2 text-center font-semibold">Fort</div>
                    <div className="bg-yellow-200 p-2 text-center">Orange</div>
                    <div className="bg-red-200 p-2 text-center">Rouge</div>
                    <div className="bg-red-200 p-2 text-center">Rouge</div>
                  </div>
                </div>
              </div>

              {/* Traitement des risques */}
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-teal-900">
                    3. Traitement des risques
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-3">Stratégies de traitement :</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border border-teal-200">
                        <div className="font-semibold text-teal-900">Éviter</div>
                        <div className="text-sm text-teal-700">Modifier le projet pour éliminer le risque</div>
                      </div>
                      <div className="bg-white p-3 rounded border border-teal-200">
                        <div className="font-semibold text-teal-900">Réduire</div>
                        <div className="text-sm text-teal-700">Diminuer la probabilité ou l&apos;impact</div>
                      </div>
                      <div className="bg-white p-3 rounded border border-teal-200">
                        <div className="font-semibold text-teal-900">Transférer</div>
                        <div className="text-sm text-teal-700">Déléguer le risque à un tiers</div>
                      </div>
                      <div className="bg-white p-3 rounded border border-teal-200">
                        <div className="font-semibold text-teal-900">Accepter</div>
                        <div className="text-sm text-teal-700">Assumer le risque et prévoir des plans de contingence</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-3">Plan de contingence :</h4>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded border border-teal-200">
                        <div className="text-sm">
                          <strong>Si</strong> le risque se matérialise<br/>
                          <strong>Alors</strong> actions prédéfinies<br/>
                          <strong>Responsable</strong> : personne désignée<br/>
                          <strong>Délai</strong> : temps de réaction
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">
              Les outils de pilotage
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Tableau de bord projet</h3>
                <div className="space-y-2 text-sm text-blue-800">
                  <div>• Indicateurs clés en temps réel</div>
                  <div>• Alertes automatiques</div>
                  <div>• Graphiques d&apos;évolution</div>
                  <div>• Comparaison prévisionnel/réalisé</div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-bold text-green-900 mb-4">Comités de pilotage</h3>
                <div className="space-y-2 text-sm text-green-800">
                  <div>• Réunions périodiques</div>
                  <div>• Points d&apos;étape formalisés</div>
                  <div>• Prises de décision collectives</div>
                  <div>• Validation des livrables</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                💡 Bonnes pratiques de pilotage
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-yellow-800">
                <div>
                  <h4 className="font-semibold mb-2">Suivi régulier :</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Points hebdomadaires</li>
                    <li>• Reporting mensuel</li>
                    <li>• Revues trimestrielles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Communication :</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Transparence sur les difficultés</li>
                    <li>• Escalade rapide des problèmes</li>
                    <li>• Information des parties prenantes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Outils de gestion de projet */}
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center gap-2">
                 <Target className="h-6 w-6" />
                 🛠️ Outils de gestion de projet
               </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-indigo-800">Outils de planification :</h4>
                  <ul className="space-y-2 text-indigo-700">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span><strong>MS Project :</strong> Planification détaillée, diagrammes de Gantt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span><strong>Trello/Asana :</strong> Gestion agile, tableaux Kanban</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span><strong>Jira :</strong> Suivi des tâches, gestion des sprints</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-indigo-800">Outils de communication :</h4>
                  <ul className="space-y-2 text-indigo-700">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span><strong>Slack/Teams :</strong> Communication instantanée</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span><strong>Confluence :</strong> Documentation collaborative</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span><strong>SharePoint :</strong> Partage de documents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Méthodes d'estimation */}
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-orange-900 mb-4 flex items-center gap-2">
                 <Calculator className="h-6 w-6" />
                 📐 Méthodes d&apos;estimation
               </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">1. Méthode des points de fonction</h4>
                  <p className="text-orange-700 mb-2">Estimation basée sur la complexité fonctionnelle :</p>
                  <div className="bg-white p-4 rounded border border-orange-200">
                    <p className="text-sm text-orange-600 font-mono">
                      Effort = Nombre de points de fonction × Facteur de productivité
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">2. Méthode COCOMO</h4>
                  <p className="text-orange-700 mb-2">Estimation basée sur la taille du code :</p>
                  <div className="bg-white p-4 rounded border border-orange-200">
                    <p className="text-sm text-orange-600 font-mono">
                      Effort = a × (KLOC)^b × c
                    </p>
                    <p className="text-xs text-orange-500 mt-1">
                      KLOC = Milliers de lignes de code, a,b,c = coefficients selon le type de projet
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">3. Planning Poker (Agile)</h4>
                  <p className="text-orange-700">Estimation collaborative par l'équipe avec des cartes (1, 2, 3, 5, 8, 13, 21...)</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">
                🎯 Moyens mnémotechniques
              </h3>
              <div className="space-y-2 text-green-800">
                <p><strong>QCD</strong> : Qualité, Coûts, Délais (triangle de pilotage)</p>
                <p><strong>PERT</strong> : Prévision, Évaluation, Révision, Technique (méthode de planification)</p>
                <p><strong>SMART</strong> : Spécifique, Mesurable, Atteignable, Réaliste, Temporel (objectifs)</p>
                <p><strong>AMDEC</strong> : Analyse des Modes de Défaillance, Effets et Criticité (gestion des risques)</p>
              </div>
            </div>

            {/* Key Takeaway */}
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-3 flex items-center gap-2">
                 <Shield className="h-6 w-6" />
                 💡 Point clé à retenir
               </h3>
              <p className="text-purple-800 font-medium">
                Un pilotage efficace combine surveillance continue, anticipation des risques 
                et adaptation rapide aux changements.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t">
            <Link
              href="/section-2"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Précédent
            </Link>
            <Link
              href="/quiz"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Suivant : Quiz
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}