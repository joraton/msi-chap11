import { BookOpen, Clock, Target, Users } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <span>Accueil</span>
        <span className="mx-2">{'>'}</span>
        <span>Cours</span>
        <span className="mx-2">{'>'}</span>
        <span className="text-blue-600">La Mise en Place d&apos;un Projet</span>
      </nav>

      {/* Main Course Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 sm:p-6 lg:p-8 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Course Icon */}
          <div className="bg-white/20 p-3 sm:p-4 rounded-lg mx-auto sm:mx-0">
            <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
          </div>

          {/* Course Info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
              La Mise en Place d&apos;un Projet
            </h1>
            <p className="text-blue-100 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
              Maîtrisez l&apos;organisation, les équipes et les méthodologies pour réussir vos projets de système d&apos;information.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
              <div className="bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
                <Target className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">Expert</span>
              </div>
              <div className="bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">4h 15min</span>
              </div>
              <div className="bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
                <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">3 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}