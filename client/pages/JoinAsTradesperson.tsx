import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ChevronDown, ArrowRight, Quote } from "lucide-react";

const HERO_TRADES = [
  { slug: "electrician", label: "Electrician" },
  { slug: "plumber", label: "Plumber" },
  { slug: "builder", label: "Builder" },
  { slug: "roofer", label: "Roofer" },
  { slug: "painter", label: "Painter" },
  { slug: "gardener", label: "Gardener" },
  { slug: "cleaner", label: "Cleaner" },
  { slug: "mechanic", label: "Mechanic" },
];

const TRUST_BADGES = [
  "Free qualified leads",
  "Fast sign up",
  "Verified directory listing",
];

const HOW_IT_WORKS_STEPS = [
  {
    title: "Create your free profile",
    description:
      "Tell us about your business, services and the areas you cover in Costa del Sol.",
  },
  {
    title: "Get enquiries from local homeowners",
    description:
      "We show your profile to homeowners looking for your trade and location.",
  },
  {
    title: "Build a trusted reputation",
    description:
      "Collect reviews and build a track record that helps you win more of the right work.",
  },
];

const KEY_BENEFITS = [
  {
    title: "Improve your visibility",
    description:
      "Appear in local searches when homeowners are actively looking for your trade.",
  },
  {
    title: "Save time on admin",
    description:
      "Spend less time chasing work and more time on paid jobs.",
  },
  {
    title: "Get featured in local searches",
    description:
      "Stand out with a rich profile, photos of your work and verified reviews.",
  },
  {
    title: "Build your reputation",
    description:
      "Showcase your experience, qualifications and feedback from real customers.",
  },
];

const TRADES_GRID = HERO_TRADES;

const GETTING_STARTED_STEPS = [
  "Choose your trade",
  "Create your profile",
  "Add your details",
  "Start receiving enquiries",
];

export default function JoinAsTradesperson() {
  const navigate = useNavigate();
  const [tradeDialogOpen, setTradeDialogOpen] = useState(false);
  const [selectedTradeSlug, setSelectedTradeSlug] = useState<string>("");

  const selectedTradeLabel =
    HERO_TRADES.find((trade) => trade.slug === selectedTradeSlug)?.label || "";

  const goToDetails = (tradeSlug: string) => {
    navigate(`/tradesperson/details?trade=${encodeURIComponent(tradeSlug)}`);
  };

  const handleGoClick = () => {
    if (!selectedTradeSlug) return;
    goToDetails(selectedTradeSlug);
  };

  const handleTradeSelect = (tradeSlug: string) => {
    setSelectedTradeSlug(tradeSlug);
    setTradeDialogOpen(false);
  };

  return {
    /* Page background wrapper */
  };
}
