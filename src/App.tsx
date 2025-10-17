import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MessageSection } from "./components/MessageSection";
import { FlowSection } from "./components/FlowSection";
import { JobSection } from "./components/JobSection";
import { DataSection } from "./components/DataSection";
import { FaqSection } from "./components/FaqSection";
import { EntrySection } from "./components/EntrySection";
import { Footer } from "./components/Footer";
import { JobDetailSales } from "./pages/JobDetailSales";
import { JobRequirementsSales } from "./pages/JobRequirementsSales";
import { JobRequirementsDriver } from "./pages/JobRequirementsDriver";
import { JobRequirementsTechnical } from "./pages/JobRequirementsTechnical";
import { JobRequirementsProduction } from "./pages/JobRequirementsProduction";
import { JobRequirementsList } from "./pages/JobRequirementsList";
import { FaqPage } from "./pages/FaqPage";
import { EntryForm } from "./pages/EntryForm";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  useEffect(() => {
    // Handle initial hash
    const hash = window.location.hash.slice(1);
    if (hash) {
      setCurrentPage(hash);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1) || "home";
      setCurrentPage(newHash);
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Simple hash-based routing
  if (currentPage === "job-sales") {
    return <JobDetailSales />;
  }

  if (currentPage === "requirements-sales") {
    return <JobRequirementsSales />;
  }

  if (currentPage === "requirements-driver") {
    return <JobRequirementsDriver />;
  }

  if (currentPage === "requirements-technical") {
    return <JobRequirementsTechnical />;
  }

  if (currentPage === "requirements-production") {
    return <JobRequirementsProduction />;
  }

  if (currentPage === "requirements-list") {
    return <JobRequirementsList />;
  }

  if (currentPage === "faq-page") {
    return <FaqPage />;
  }

  if (currentPage === "entry-form") {
    return <EntryForm />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <MessageSection />
        <JobSection />
        <DataSection />
        <FaqSection />
        <FlowSection />
        <EntrySection />
      </main>
      <Footer />
    </div>
  );
}
