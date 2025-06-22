import Navigation from "@/components/Navigation";

const Mentorship = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Mentorship & Services
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="bg-muted/50 rounded-lg p-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Mentorship Programs Page Coming Soon
            </h2>
            <p className="text-muted-foreground">
              This page will detail my BA mentoring programs, training services,
              and consulting offerings for professionals and organizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
