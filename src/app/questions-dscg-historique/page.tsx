'use client';

import { ArrowLeft, Calendar, FileText, Award, CheckCircle, ChevronDown, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const dscgData = [
  {
    year: 2016,
    questions: [
      {
        title: "Question 2 (Dossier 2 – Projet de SI de SOVANI)",
        question: "Identifier et apporter des commentaires sur les principales étapes à adopter dans cette perspective de mise en œuvre du projet ERP.",
        correction: [
          "Diagnostic d'un projet à déclencher par le maître d'œuvre : Il est déclenché par la liquidation judiciaire de l'éditeur.",
          "Validation du projet à déclencher par un comité de sélection.",
          "Choix d'un chef de projet : Ressource interne ou externe.",
          "Consultation des RH : Présentation des enjeux du projet, communication du déroulement prévu, prise en considération des échanges pour une collaboration constructive et adhésion du personnel.",
          "Constitution d'une équipe projet : Équipe pluridisciplinaire, choix de spécialistes métiers, embauche ou appel à une ESN, constitution d'un comité de pilotage avec un chef de projet.",
          "Choix d'une méthode de conduite de projet : Ex. CMMI, CobiT, ITIL.",
          "Description détaillée du projet : Caractéristiques, contexte, périmètre, délais, nature du projet, budget prévisionnel, avantages attendus, objectifs, risques, informations nécessaires, appel d'offre, estimation du temps.",
          "Étude de faisabilité des solutions présentées : Étude technique, ordonnancement, concordance des délais, disponibilité des ressources, budget, adéquation projet et solutions.",
          "Sélection de la solution optimale par le comité de pilotage : Concordance solution/objectifs, tests et comparaisons (y compris coûts), choix des partenaires/personnes ressources internes, prise en considération des risques.",
          "Finalisation de l'étude technique du projet : Caractéristiques techniques détaillées, identification des étapes, ordonnancement arrêté, budget complet.",
          "Lancement du projet : Démarrage et communication du projet final aux RH.",
          "Réalisation du projet : Déploiement et plan de formation.",
          "Suivi de l'avancement du projet : Surveillance de l'ordonnancement, tests intermédiaires sur la concordance projet/objectifs/coûts.",
          "Concordance projet et réalisation : Mesure et vérification des étapes, détection des écarts, réaction et réajustements.",
          "Finalisation du projet : Prise en main et conduite du changement.",
          "Suivi post-projet : Vérification des attentes et impacts, réactions et modifications éventuelles."
        ]
      },
      {
        title: "Question 4 (Dossier 2 – Projet de SI de SOVANI)",
        question: "Présenter sous forme de tableau, 3 facteurs de réussite d'une telle conduite de projet en intégrant par exemple les référentiels et autres bonnes pratiques.",
        correction: [
          "Participation des RH : Indispensable pour l'adhésion du personnel.",
          "Formation des RH : Pour que le personnel ait les compétences nécessaires et limite les résistances au changement.",
          "Maîtrise du budget : Pour ne pas impacter d'autres projets ou la performance de l'entreprise.",
          "Prévoir un tableau de bord : Avec des indicateurs clés (temps, coûts, heures de formation, gains de temps, qualité post-projet).",
          "Implication de la DG : Permet une réelle imprégnation du projet dans toute la société.",
          "Identification des risques projet : Diagnostic des risques (dépassements de budget, écarts entre prévu et réalisé).",
          "Mesure de la conformité : Appréciation de la correspondance entre le projet défini et la livraison effective.",
          "Exploitation d'outils de gestion de projet : Méthodes d'ordonnancement (PERT, GANTT), référentiels comme CobiT, ITIL, CMMI.",
          "Choix du ou des maîtres d'œuvres/prestataires : La qualité des interventions et de la collaboration des ESN est un facteur clé de succès."
        ]
      }
    ]
  },
  {
    year: 2017,
    questions: [
      {
        title: "Question 7 (Dossier 2. Projet de déploiement de l'application métier)",
        question: "Préciser ce que recouvre le concept d'\"Accords de niveaux de service\" (SLA) et indiquer les avantages procurés par une gestion de SLA et le référentiel qui le préconise. Deux avantages sont attendus.",
        correction: [
          "Les Accords de Niveaux de Service (SLA - Service Level Agreements) définissent des objectifs spécifiques pour juger la performance des services.",
          "Ils transforment une obligation de moyen en une obligation de résultat pour le prestataire.",
          "Ils améliorent la qualité des services informatiques via des suivis et rapports statistiques.",
          "Le référentiel qui préconise une gestion de SLA est ITIL (Information Technology Infrastructure Library)."
        ]
      }
    ]
  },
  {
    year: 2018,
    questions: [
      {
        title: "Question 1 (Dossier 1 : REMPLACEMENT DU PGI)",
        question: "Quels sont les organes à mettre en place pour la gestion de ce projet ? Préciser leur composition et leur rôle respectif.",
        correction: [
          "Le comité de pilotage : Organe directeur de la maîtrise d'ouvrage (MOA), présidé par un directeur de projet. Composé de représentants opérationnels (responsables métiers, utilisateurs-clés), du responsable informatique, et d'experts internes ou externes (intégrateur).",
          "Le comité des utilisateurs : Composé de tous les utilisateurs représentatifs des domaines d'activité concernés. Ses attributions sont l'expression détaillée des besoins, la validation des solutions/maquettes, la participation aux tests, la participation aux actions de formation, la réception définitive du progiciel, et l'accompagnement du déploiement.",
          "Le chef de projet : Assure le pilotage du projet, la coordination des acteurs, le compte-rendu à la direction, l'interface avec la MOA, la supervision des tests et du recettage, et la validation des supports."
        ]
      },
      {
        title: "Question 2 (Dossier 1 : REMPLACEMENT DU PGI)",
        question: "Quelles sont les principales conditions de réussite du projet ? (Quatre conditions sont attendues.)",
        correction: [
          "Objectifs clairement définis : Pour pouvoir constamment se référer aux raisons du projet et prendre des décisions.",
          "Équipes projets organisées avec soin : Avec des contrôles appropriés.",
          "Ne pas négliger la dimension humaine : Animation et motivation des équipes.",
          "Prendre en compte la gestion du changement : Intégrer les acteurs concernés et assurer une communication appropriée.",
          "Maîtriser les délais et les coûts : Implique une analyse des risques."
        ]
      },
      {
        title: "Question 4 (Dossier 1 : REMPLACEMENT DU PGI)",
        question: "Quelles sont les principales difficultés rencontrées lors de la mise en place d'un PGI ? (Quatre difficultés sont attendues.)",
        correction: [
          "Nécessité d'adapter certains processus aux contraintes du progiciel : L'entreprise doit parfois modifier son organisation.",
          "Le projet impacte l'organisation dans son ensemble : Risques si la gestion du changement est mal appréhendée.",
          "Coûts induits très importants, et souvent sous-estimés : Temps de travail du personnel, baisse d'efficacité due à la désorganisation.",
          "Dépendance vis-à-vis d'un éditeur : Retour en arrière ou changement de PGI difficiles.",
          "Dépendance par rapport aux intégrateurs et aux consultants : Crée des asymétries d'information et risques.",
          "Complexité du paramétrage : Peut entraîner des dépassements de délais et de coûts ou des difficultés d'utilisation."
        ]
      },
      {
        title: "Question 1 (Dossier 2 : ORDONNANCEMENT DU PROJET PGI)",
        question: "En fonction des tâches et contraintes d'antériorité, proposer un graphe d'ordonnancement. Indiquer quel est le chemin critique et préciser la durée du projet (ne pas tenir compte des jours fériés).",
        correction: [
          "Cette question nécessite l'établissement d'un graphe d'ordonnancement (similaire à un diagramme de Gantt) pour visualiser le projet.",
          "Pour le cas donné, le chemin critique est A - D - E - F - G - H - I - J - N - O - Q.",
          "La durée du projet est de 181 jours."
        ]
      },
      {
        title: "Question 3 (Dossier 2 : ORDONNANCEMENT DU PROJET PGI)",
        question: "Proposer une solution pour compenser cet allongement et maintenir la durée initiale du projet. Justifier votre proposition.",
        correction: [
          "Pour compenser un allongement de durée, des solutions peuvent être d'optimiser l'ordonnancement en rendant des tâches parallèles ou en augmentant les ressources.",
          "Par exemple, dissocier la documentation technique et utilisateur pour la réaliser en parallèle ou augmenter le nombre de formateurs pour réduire la durée des formations."
        ]
      }
    ]
  },
  {
    year: 2019,
    questions: [
      {
        title: "Question 3 (Dossier 3 : PILOTAGE DU CHANGEMENT)",
        question: "Représenter le diagramme de Gantt du projet en 6 phases (PPOC) ébauché par le dirigeant de SOLIDOR et en déduire quelle serait sa durée minimum (en mois) et sa date de fin (au plus tôt).",
        correction: [
          "Cette question demande de construire un diagramme de Gantt pour le projet de pilotage opérationnel du changement (PPOC).",
          "Pour les tâches A à F avec leurs durées et antériorités, la durée minimum du projet est de 12 mois.",
          "La date de fin au plus tôt est le 1er janvier 2021, si le projet débute le 1er janvier 2020."
        ]
      }
    ]
  },
  {
    year: 2020,
    questions: [
      {
        title: "Question 9 (Semaine 6)",
        question: "Comment prévenir les risques « SI » ? Que faire si ces risques se réalisent ?",
        correction: [
          "La prévention des risques SI implique d'élaborer des scénarios et de rédiger un plan de continuité d'activité (PCA).",
          "En cas de réalisation des risques (attaque, fuite, destruction), il faut mettre à disposition du personnel la procédure de crise (PCA) et prévenir la CNIL sous 72h en cas de violation de données personnelles."
        ]
      },
      {
        title: "Question 17 (Semaine 9)",
        question: "Comment structurer votre propos et vos séances pour faire passer vos messages dans chacun des deux séminaires (end-user et key-user) ?",
        correction: [
          "Pour la migration vers un ERP, un séminaire peut être structuré avec un tronc commun (1h) sur l'intégration du SI.",
          "Suivi de spécialisations (2h chacune) pour les utilisateurs finaux (end-user) et les utilisateurs clés (key-user).",
          "Une conclusion (1h) sur le bien-fondé de l'évolution du SI doit clôturer les sessions."
        ]
      },
      {
        title: "Question 18 (Semaine 9)",
        question: "Quelle conclusion pourriez-vous proposer lors de ce double séminaire afin de montrer le bien-fondé de cette migration vers un ERP ?",
        correction: [
          "La conclusion doit s'appuyer sur des données factuelles, comme la comparaison entre l'ancien système non intégré (3 silos) et le nouveau système intégré (1 ERP unique avec 1 base de données et 6 modules).",
          "Elle peut souligner que l'architecture modulaire des ERP permet une meilleure réactivité mais aussi une vulnérabilité accrue en cas d'attaque.",
          "Il est important de rappeler la forte responsabilité des utilisateurs, particulièrement des 'key-users'."
        ]
      }
    ]
  },
  {
    year: 2021,
    questions: [
      {
        title: "Question 4 (Dossier 2 – CADRAGE DU PROJET)",
        question: "Vous définissez dans le contexte du projet de transformation un facteur clé de succès et un risque identifié distinct.",
        correction: [
          "Analyse et audit correctement menés : Base d'une bonne définition du projet.",
          "Coopération des différentes DSI existantes : Indispensable pour travailler ensemble.",
          "Choix de la solution progiciel pour le nouveau SI : Doit remporter l'adhésion des utilisateurs.",
          "Qualité de prestation des intervenants : Choix des membres du projet et des prestataires selon leurs expériences et compétences.",
          "Coopération des utilisateurs : Adhésion aux choix de la DSI et définition des nouveaux rôles.",
          "Respect du planning : Essentiel pour éviter les coupures de service, notamment avec des dates limites réglementaires.",
          "Périmètre des tests : Tests pertinents sur les fonctionnalités, couvrant les tests techniques, d'intégration, fonctionnels et utilisateurs."
        ]
      },
      {
        title: "Question 5 (Dossier 2 – CADRAGE DU PROJET)",
        question: "Vous présenterez 2 méthodes de conduite de projet de votre choix, vous expliquerez dans quelles mesures elles vous semblent ici adaptées à cette transformation ?",
        correction: [
          "Méthode traditionnelle, cycle en V : Recommandée pour une date de mise en production unique et une équipe projet limitée, permet de planifier efficacement.",
          "Méthode agile : Non recommandée ici en raison de la faible disponibilité des acteurs et des utilisateurs finaux, et des mises en production partielles non exploitables dans un grand changement organisationnel.",
          "Méthode adaptative et agile : Non recommandée car le contexte n'implique pas des variables inconnues, et elle augmenterait le risque et le coût du projet.",
          "Méthode du chemin critique : Non recommandée en raison des ressources limitées et de la forte dépendance entre les tâches, ce qui limite la mutualisation d'actions simultanées.",
          "Méthode Prince 2 : Non adaptée ici car elle est pour de très grands projets et organisations, et ne respecterait pas l'organisation et le budget.",
          "Méthode Lean management : Non adaptée au secteur d'activité, car elle se concentre sur l'élimination des tâches à faible valeur ajoutée."
        ]
      },
      {
        title: "Question 6 (Dossier 2 – CADRAGE DU PROJET)",
        question: "Vous tracerez un diagramme de Gantt type d'un projet en 5 tâches et 40 semaines.",
        correction: [
          "La correction présente un exemple typique de diagramme de Gantt avec les 5 tâches usuelles d'un projet de transformation numérique : conception, développement, paramétrage, test, déploiement, échelonnées sur 40 semaines."
        ]
      }
    ]
  },
  {
    year: 2022,
    questions: [
      {
        title: "Question 3 (Dossier 1 – CONSTRUCTION DU SYSTÈME D'INFORMATION)",
        question: "Définir pour ce projet deux facteurs clés de succès pour réussir cette transformation.",
        correction: [
          "Gouvernance bien définie et validée par les différentes directions générales : Inclut la définition d'un nouveau schéma directeur pour les DSI.",
          "Analyse et audit correctement menés : Base d'une bonne définition du projet de transformation du SI.",
          "Coopération des différentes entités du groupe : Indispensable pour réussir les changements.",
          "Communication à l'ensemble des acteurs : Pour anticiper les conduites de changement.",
          "Qualité de prestation des intervenants : Choix des membres du projet et des prestataires en fonction de leurs expériences et compétences.",
          "Adhésion des utilisateurs finaux à la nouvelle organisation du SI : Définition des nouveaux rôles.",
          "Respect du planning.",
          "Suivre les bonnes pratiques de projets et des référentiels comme ITIL."
        ]
      },
      {
        title: "Question 3 (Dossier 2 – MISE EN ŒUVRE D'UN WORKFLOW FACTURE DURANT L'ANNÉE DE TRANSITION EN 2022)",
        question: "Décrire les étapes de mise en œuvre d'un Workflow Facture en précisant la méthodologie de projet employée.",
        correction: [
          "Les étapes de mise en œuvre d'un Workflow Facture sont celles de tout projet informatique : une phase d'analyse, une phase de paramétrage ou de développement, une phase de recette (technique, fonctionnelle, métier), une phase de formation et d'accompagnement à la mise en production.",
          "La méthodologie de projets employée est en général la méthode traditionnelle (en cascade) ou cycle en V, recommandée car il y a généralement une date unique de mise en production pour toutes les factures, ce qui permet de planifier efficacement.",
          "La méthodologie Agile peut aussi être utilisée pour des mises en production successives par typologie de facture."
        ]
      }
    ]
  },
  {
    year: 2023,
    questions: [
      {
        title: "Question 6 (Dossier 2 – DIRECTION DE PROJET)",
        question: "Pour piloter l'ensemble de vos projets au sein du programme de bascule des clients de l'ESN, vous décidez d'organiser un Comité de pilotage mensuel. Quels sont les participants à convier à ce comité ?",
        correction: [
          "Le chef ou le directeur de projet : Celui qui anime le comité.",
          "Le sponsor du projet : Celui qui finance le budget du programme, souvent un directeur opérationnel.",
          "Les membres de l'équipe : Peuvent intervenir en fonction des sujets à l'ordre du jour.",
          "Le donneur d'ordre du programme : Le client pour lequel le programme est réalisé, délégué par la direction générale."
        ]
      },
      {
        title: "Question 7 (Dossier 2 – DIRECTION DE PROJET)",
        question: "Décrire la méthodologie de projet employée pour basculer un client de GED à partir des informations présentées en annexe 2 et 3. Justifier ce choix de méthodologie en décrivant les avantages et les inconvénients.",
        correction: [
          "La méthodologie de projet utilisée est le cycle en V ou en cascade. Les tâches se succèdent sans itération (analyse, installation/paramétrage, recette, formation, mise en production).",
          "Avantages : S'adapte aux programmes multi-projets identiques (spécialisation des ressources, parallélisation des tâches). Facilite la gestion et le pilotage avec une visibilité claire de la cible. Limite la conduite du changement car l'outil et l'éditeur sont déjà connus. La durée courte du projet la rend plus efficace.",
          "Inconvénients : Risque d'excès de confiance de l'équipe. Manque de souplesse pour des cas très particuliers (méthode itérative serait plus adaptée). Manque de communication entre client et fournisseur, donnant beaucoup d'autonomie à la MOE. Peut entraîner une phase de recette plus longue que prévue et une période de garantie plus longue après la mise en production."
        ]
      },
      {
        title: "Question 8 (Dossier 2 – DIRECTION DE PROJET)",
        question: "Donner deux critères d'organisation du programme de projet à l'aide des éléments présentés au sein des annexes 2 et 3 afin de réaliser les 100 bascules clients en un minimum de temps. Vous présenterez ensuite un Gantt du programme pour les 5 premières bascules.",
        correction: [
          "Traiter les étapes de plusieurs bascules sans attendre qu'une bascule se termine : Permet de limiter les temps d'attente des ressources spécialisées.",
          "Prioriser les étapes entre les bascules pour ne pas laisser des ressources sans charge : Certaines étapes peuvent être réalisées indépendamment.",
          "Répartir les étapes sur le chemin critique des projets : Permet d'avancer d'autres projets.",
          "La gestion de projet est transverse et mutualisée."
        ]
      }
    ]
  },
  {
    year: 2024,
    questions: [
      {
        title: "Question 3.2 (Dossier 3 – GESTION DE PROJET, SI FANTOMES ET BYOD)",
        question: "Vous relèverez les erreurs déjà commises en termes de gestion de projet par Etienne Dupond. Vous structurerez votre réponse autour des grandes phases de la gestion de projet informatique.",
        correction: [
          "Études Préliminaires : Pas d'identification précise des objectifs, risques non estimés, manque de compréhension des besoins utilisateurs.",
          "Lancement et définition du projet : Grandes lignes du projet et gouvernance non précisées, équipe projet non définie, chef de projet non connu, absence de comité de pilotage, cahier des charges réalisé par le secrétaire, MOE décisionnaire.",
          "Expression du besoin : Fonctionnalités précises à développer non identifiées en amont.",
          "Planification : Absence de mise en place d'outil de gestion de projet (PERT/GANTT), manque de relation avec le futur utilisateur."
        ]
      }
    ]
  }
];

export default function QuestionsDSCGHistorique() {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [visibleCorrections, setVisibleCorrections] = useState<Set<string>>(new Set());

  const toggleCorrection = (questionId: string) => {
    const newVisible = new Set(visibleCorrections);
    if (newVisible.has(questionId)) {
      newVisible.delete(questionId);
    } else {
      newVisible.add(questionId);
    }
    setVisibleCorrections(newVisible);
  };

  const filteredData = selectedYear === 'all' ? dscgData : dscgData.filter(year => year.year === selectedYear);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Retour au cours</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <FileText className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Questions DSCG - Historique complet
              </h1>
              <p className="text-gray-600 mt-1">
                Récapitulatif exhaustif des questions et corrections DSCG sur la mise en place d'un projet (2016-2024)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-start gap-4">
            <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Contexte pédagogique
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le thème de la <strong>&quot;mise en place d&apos;un projet&quot;</strong> est central dans le Management des Systèmes d&apos;Information (MSI), 
                comme l&apos;indique le <strong>Chapitre 11</strong> intitulé &quot;LA MISE EN PLACE D&apos;UN PROJET&quot;. Un projet de système d&apos;information 
                implique la création ou l&apos;évolution d&apos;un SI existant, c&apos;est une opération unique et ponctuelle, limitée dans le temps 
                avec des dates de début et de fin identifiées.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Il est caractérisé par trois dimensions fondamentales : la qualité, les coûts et les délais (le &quot;triangle qualité, coûts et délais&quot;). 
                La mise en place rigoureuse d&apos;un projet est essentielle pour une évolution cohérente du SI.
              </p>
            </div>
          </div>
        </div>

        {/* Sélecteur d'année */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-4">
            <Calendar className="h-5 w-5 text-blue-600" />
            <label htmlFor="year-select" className="font-medium text-gray-700">
              Filtrer par année :
            </label>
            <div className="relative">
              <select
                id="year-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Toutes les années</option>
                {dscgData.map(year => (
                  <option key={year.year} value={year.year}>
                    DSCG {year.year}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Questions par année */}
        <div className="space-y-8">
          {filteredData.map((yearData) => (
            <div key={yearData.year} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* En-tête de l'année */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">
                    DSCG {yearData.year}
                  </h2>
                  <span className="text-blue-100">
                    (UE5 – Management des Systèmes d'Information)
                  </span>
                </div>
              </div>

              {/* Questions de l'année */}
              <div className="p-6 space-y-6">
                {yearData.questions.map((q, index) => {
                  const questionId = `${yearData.year}-${index}`;
                  const isVisible = visibleCorrections.has(questionId);
                  
                  return (
                    <div key={index} className="border-l-4 border-blue-200 pl-6">
                      {/* Titre de la question */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {q.title}
                      </h3>
                      
                      {/* Énoncé */}
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          Énoncé :
                        </h4>
                        <p className="text-gray-700 italic">
                          &quot;{q.question}&quot;
                        </p>
                      </div>

                      {/* Bouton pour afficher/masquer la correction */}
                      <button
                        onClick={() => toggleCorrection(questionId)}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors mb-4"
                      >
                        {isVisible ? (
                          <>
                            <EyeOff className="h-4 w-4" />
                            Masquer la correction
                          </>
                        ) : (
                          <>
                            <Eye className="h-4 w-4" />
                            Afficher la correction
                          </>
                        )}
                      </button>

                      {/* Correction */}
                      {isVisible && (
                        <div className="bg-green-50 rounded-lg p-4 animate-in slide-in-from-top-2 duration-300">
                          <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Correction :
                          </h4>
                          <ul className="space-y-2">
                            {q.correction.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start gap-3 text-gray-700">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                 })}
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
          <div className="flex items-start gap-4">
            <Award className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Synthèse pédagogique
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Ce panorama des sessions de DSCG met en évidence l&apos;importance constante de la <strong>gestion de projet</strong> 
                dans le domaine des Systèmes d&apos;Information, en abordant les aspects organisationnels, méthodologiques, 
                de planification et de gestion des risques et des ressources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}