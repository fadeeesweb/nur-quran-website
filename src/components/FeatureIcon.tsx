import {
  Bookmark,
  BookOpen,
  Brain,
  CalendarDays,
  CircleDot,
  Clock,
  Compass,
  Headphones,
  HeartHandshake,
  Languages,
  MoonStar,
  Route,
  ScrollText,
  Search,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  book: BookOpen,
  languages: Languages,
  headphones: Headphones,
  scroll: ScrollText,
  bookmark: Bookmark,
  search: Search,
  brain: Brain,
  clock: Clock,
  compass: Compass,
  hands: HeartHandshake,
  calendar: CalendarDays,
  moon: MoonStar,
  circle: CircleDot,
  target: Target,
  route: Route,
  chart: TrendingUp,
};

type Props = {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

/** Small line icon used across the features and tools sections. */
export function FeatureIcon({ name, size = 20, className, strokeWidth = 1.6 }: Props) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />
  );
}
