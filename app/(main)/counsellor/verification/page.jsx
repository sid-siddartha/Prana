import { Brain, HeartPulse, Flower2, AlertCircle,ClipboardCheck,XCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,

} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getCurrentUser } from "@/actions/onboarding";
import { redirect } from "next/navigation";

export default async function VerificationPage() {
  // Get complete user profile
  const user = await getCurrentUser();

  // If already verified, redirect to dashboard
  if (user?.verificationStatus === "VERIFIED") {
    redirect("/dashboard");
  }

  const isRejected = user?.verificationStatus === "REJECTED";

  return (
    <div className="container mx-auto px-4 py-16 -mt-[60px]">
      <div className="max-w-4xl mx-auto">
        <Card className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="text-center">
            <div
              className={`mx-auto p-4 rounded-full mb-4 w-fit ${
                isRejected ? "bg-red-100" : "bg-purple-100"
              }`}
            >
              {isRejected ? (
                <XCircle className="h-8 w-8 text-red-500" />
              ) : (
                <ClipboardCheck className="h-8 w-8 text-purple-600" />
              )}
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              {isRejected
                ? "Verification Declined"
                : "Verification in Progress"}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              {isRejected
                ? "Unfortunately, your application needs revision"
                : "Thank you for submitting your information"}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            {isRejected ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-600 text-left">
                  <p className="mb-2">
                    Our review team has found that your application doesn’t meet
                    current requirements. Common reasons include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li>Insufficient or unclear documentation</li>
                    <li>Professional experience requirements not met</li>
                    <li>Incomplete or vague service description</li>
                  </ul>
                  <p>
                    Please update your details and resubmit for review — we’re
                    here to help you succeed.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6 flex items-start">
                <Flower2 className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 text-left">
                  Your profile is under review by our administrative team.
                  Reviews usually take 1–2 business days. You’ll receive an
                  email notification once your account is verified.
                </p>
              </div>
            )}

            <p className="text-gray-600 mb-6">
              {isRejected
                ? "You can update your profile and resubmit for verification."
                : "While you wait, explore our platform or reach out to support if you need help."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isRejected ? (
                <>
                  <Button asChild variant="outline" className="border-gray-300">
                    <Link href="/">Return to Home</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[#6e2799] to-[#4b39b6] text-white hover:opacity-90"
                  >
                    <Link href="/counsellor/update-profile">Update Profile</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild variant="outline" className="border-gray-300">
                    <Link href="/">Return to Home</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[#6e2799] to-[#4b39b6] text-white hover:opacity-90"
                  >
                    <Link href="/contact-support">Contact Support</Link>
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
