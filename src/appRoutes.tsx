import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import { useHashScroll } from "@/hooks/useHashScroll";

const TimelinePage = lazy(() => import("@/pages/Timeline"));
const BandsPage = lazy(() => import("@/pages/Bands"));
const DictionaryPage = lazy(() => import("@/pages/Dictionary"));
const InterviewsPage = lazy(() => import("@/pages/Interviews"));
const ArchivePage = lazy(() => import("@/pages/Archive"));
const EducationPage = lazy(() => import("@/pages/Education"));
const ArticlesPage = lazy(() => import("@/pages/Articles"));
const SourcesPage = lazy(() => import("@/pages/Sources"));
const SearchPage = lazy(() => import("@/pages/Search"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function RouteFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className="flex min-h-[60vh] items-center justify-center"
    >
      <div className="h-8 w-8 animate-pulse rounded-full bg-muted" aria-hidden="true" />
    </div>
  );
}

export function AppRoutes() {
  useHashScroll();
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/bands" element={<BandsPage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="/interviews" element={<InterviewsPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/sources" element={<SourcesPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
