import {
  Users,
  GraduationCap,
  Briefcase,
  Brain,
  Heart,
  HandHeart,
  AlertTriangle,
  Coffee,
  Gamepad2,
} from "lucide-react";

export const SPECIALTIES = [
  {
    name: "General Counselor",
    icon: <Users className="h-5 w-5" />,
  },
  {
    name: "Academic Counselor",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    name: "Career Counselor",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    name: "Mental Health Counselor",
    icon: <Brain className="h-5 w-5" />,
  },
  {
    name: "Family & Relationship Counselor",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    name: "Peer Counselor",
    icon: <HandHeart className="h-5 w-5" />,
  },
  {
    name: "Crisis Counselor",
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    name: "Wellness & Lifestyle Counselor",
    icon: <Coffee className="h-5 w-5" />,
  },
  {
    name: "Substance Abuse Counselor",
    icon: <Gamepad2 className="h-5 w-5" />,
  }
];
