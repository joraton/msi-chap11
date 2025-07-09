import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  index: number;
}

export default function SectionBlock({
  title,
  description,
  href,
  icon: Icon,
  color,
  bgColor,
  index
}: SectionBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-6"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Icon */}
          <div className={`${bgColor} p-2.5 sm:p-3 rounded-full flex-shrink-0`}>
            <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${color}`} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 truncate">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        {/* Button */}
        <Link
          href={href}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base flex-shrink-0"
        >
          Commencer
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}