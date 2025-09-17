import { getCurrentUser } from "@/actions/onboarding";
import { redirect } from "next/navigation";
import react from "react";
import { Toaster } from "sonner";

export const metadata = {
  title: "Onboarding - Prana",
  description: "Complete your profile to get started with Prana",
};

const OnboardingLayout =  async ({ children }) => {
  // Get complete user profile
  const user = await getCurrentUser();

  // Redirect users who have already completed onboarding
  if (user) {
    if (user.role === "PATIENT") {
      redirect("/counsellor");
    } else if (user.role === "DOCTOR") {
      // Check verification status for doctors
      if (user.verificationStatus === "VERIFIED") {
        redirect("/counsellor");
      } else {
        redirect("/counsellor/verification");
      }
    } else if (user.role === "ADMIN") {
      redirect("/admin");
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#6d2699] mb-2">
            Welcome to Prana
          </h1>
          <p className="text-muted-foreground text-lg">
            Tell us how you want to use the platform
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}


export default OnboardingLayout
