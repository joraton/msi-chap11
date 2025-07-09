import CourseHeader from '@/components/home/CourseHeader';
import CoursePlan from '@/components/home/CoursePlan';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-4 sm:py-6 lg:py-8 space-y-8 sm:space-y-10 lg:space-y-12 px-4 sm:px-6 lg:px-8">
        <CourseHeader />
        <CoursePlan />
      </div>
    </main>
  );
}
