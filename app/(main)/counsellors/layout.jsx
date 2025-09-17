export const metadata = {
  title: "Find Counsellors - Prana",
  description: "Browse and book appointments with top counsellors",
};

export default async function DoctorsLayout({ children }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">{children}</div>
    </div>
  );
}