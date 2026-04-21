import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import TimelinePage from "@/pages/Timeline";
import BandsPage from "@/pages/Bands";
import DictionaryPage from "@/pages/Dictionary";
import InterviewsPage from "@/pages/Interviews";
import ArchivePage from "@/pages/Archive";
import EducationPage from "@/pages/Education";
import ArticlesPage from "@/pages/Articles";
import SourcesPage from "@/pages/Sources";
import SearchPage from "@/pages/Search";
import NotFound from "@/pages/NotFound";

export function AppRoutes() {
  return (
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
  );
}
