import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-8">About Me</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="bg-muted/50 rounded-lg p-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Detailed About Page Coming Soon
            </h2>
            <p className="text-muted-foreground">
              This page will contain a comprehensive overview of my background,
              experience, and expertise in business analysis and solution
              consulting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
