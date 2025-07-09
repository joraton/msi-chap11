import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Users, Building, UserCheck, Crown, Target, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Section1() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-100 p-3 rounded-full">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Section I - Organiser un projet
              </h1>
              <p className="text-gray-600">
                Les équipes, rôles et responsabilités
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                🎯 Facteur clé de réussite
              </h3>
              <p className="text-blue-800">
                L&apos;un des facteurs de réussite essentiel tient dans la <strong>bonne définition 
                du rôle de chacun</strong> et sa pleine contribution !
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              La distinction fondamentale : MOA vs MOE
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* MOA */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-blue-900">
                    MOA
                  </h3>
                </div>
                <h4 className="text-lg font-semibold text-blue-800 mb-3">
                  Maîtrise d&apos;Ouvrage
                </h4>
                <p className="text-blue-700 mb-4">
                  Désigne globalement l&apos;entreprise bénéficiaire du projet, le <strong>CLIENT</strong>.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-blue-700">
                      Responsable de l&apos;adéquation des résultats
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-blue-700">
                      Définition et vérification des résultats
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-blue-700">
                      Contrôle des délais et coûts
                    </span>
                  </div>
                </div>
              </div>

              {/* MOE */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-green-900">
                    MOE
                  </h3>
                </div>
                <h4 className="text-lg font-semibold text-green-800 mb-3">
                  Maîtrise d&apos;Œuvre
                </h4>
                <p className="text-green-700 mb-4">
                  Chargée de <strong>produire</strong> selon les objectifs fixés par la MOA.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-green-700">
                      Réalisation concrète du projet
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-green-700">
                      Respect de la trajectoire définie
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-green-700">
                      Livraison selon les spécifications
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                ⚖️ Principe fondamental
              </h3>
              <p className="text-yellow-800">
                <strong>Une maîtrise d&apos;ouvrage forte ne peut que déterminer une maîtrise d&apos;œuvre forte.</strong> 
                Alors qu&apos;une maîtrise d&apos;ouvrage qui n&apos;assume pas ses responsabilités ne doit pas 
                compter sur la maîtrise d&apos;œuvre pour la remplacer.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Les acteurs clés du projet
            </h2>

            <div className="space-y-6">
              {/* Comité Directeur */}
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-purple-900">
                    Le Comité Directeur
                  </h3>
                </div>
                <p className="text-purple-800 mb-4">
                  Comité permanent qui définit la politique informatique de l&apos;entreprise.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-2">Missions :</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Initie le projet</li>
                      <li>• Définit les orientations stratégiques</li>
                      <li>• Définit le périmètre fonctionnel</li>
                      <li>• Met en place le comité de pilotage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-2">Responsabilités :</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Validation du budget</li>
                      <li>• Décision de démarrage</li>
                      <li>• Supervision générale</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Comité de Pilotage */}
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-indigo-900">
                    Le Comité de Pilotage
                  </h3>
                </div>
                <p className="text-indigo-800 mb-4">
                  Organe directeur de la maîtrise d&apos;ouvrage, présidé par un directeur de projet.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-indigo-900 mb-2">Attributions :</h4>
                    <ul className="text-sm text-indigo-700 space-y-1">
                      <li>• Lancement du projet</li>
                      <li>• Choix stratégiques d&apos;architecture</li>
                      <li>• Conduite du changement</li>
                      <li>• Management du projet</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900 mb-2">Composition :</h4>
                    <ul className="text-sm text-indigo-700 space-y-1">
                      <li>• Représentants opérationnels</li>
                      <li>• Responsable informatique</li>
                      <li>• Assistant MOA</li>
                      <li>• Experts internes/externes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chef de Projet */}
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-orange-900">
                    Le Chef de Projet (MOE)
                  </h3>
                </div>
                <p className="text-orange-800 mb-4">
                  Responsable direct de la bonne marche du projet selon l&apos;AFNOR.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">Responsabilités :</h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Gestion du groupe et des individus</li>
                      <li>• Pilotage des livrables</li>
                      <li>• Gestion des risques et aléas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">Missions :</h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Gestion du changement</li>
                      <li>• Déblocage des décisions</li>
                      <li>• Respect QCD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">
                🎯 Moyens mnémotechniques
              </h3>
              <div className="space-y-2 text-green-800">
                <p><strong>MOA = CLIENT</strong> : Maîtrise d&apos;Ouvrage = Celui qui Commande</p>
                <p><strong>MOE = RÉALISATEUR</strong> : Maîtrise d&apos;Œuvre = Celui qui Exécute</p>
                <p><strong>Acronyme COPIL</strong> : COmité de PILotage = Pilote le projet</p>
              </div>
            </div>
          </div>

          {/* Product Owner Manager */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-orange-900 mb-4 flex items-center gap-2">
              <Target className="h-6 w-6" />
              👨‍💼 Le Product Owner Manager (POM)
            </h3>
            <div className="text-orange-800 space-y-4">
              <p className="font-medium">
                Cette nouvelle fonction apparaît de plus en plus, en particulier dans les offres d&apos;emploi !
              </p>
              <div className="bg-orange-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🎯 Spécificités du POM :</h4>
                <ul className="space-y-2">
                  <li>• Diffère d&apos;un simple chef de projet ou directeur de projet</li>
                  <li>• S&apos;inscrit dans le cadre des méthodes agiles (SCRUM)</li>
                  <li>• Fait l&apos;interface entre besoins utilisateurs et développements</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2">💡 Astuce mémorisation :</h4>
                <p className="text-orange-700 italic">
                  &quot;POM = Pont entre Utilisateurs et Développeurs dans l&apos;univers Agile&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t mt-8">
            <Link
              href="/introduction"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Introduction
            </Link>
            <Link
              href="/section-2"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Section II - Méthodologies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}