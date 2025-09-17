import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SPECIALTIES } from "@/lib/specialities";

export default async function DoctorsPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Counsellor</h1>
        <p className="text-muted-foreground text-lg">
          Browse by specialty or view all available counsellors
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {SPECIALTIES.map((specialty) => (
          <Link key={specialty.name} href={`/counsellors/${specialty.name}`}>
            <Card className="hover:border-purple-600/40 transition-all cursor-pointer border-purple-200 h-full">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <div className="text-purple-600">{specialty.icon}</div>
                </div>
                <h3 className="font-medium text-gray-900">{specialty.name}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
