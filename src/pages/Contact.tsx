import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-8">Contact</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="bg-muted/50 rounded-lg p-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Enhanced Contact Page Coming Soon
            </h2>
            <p className="text-muted-foreground">
              This page will feature an enhanced contact form, detailed contact
              information, and integration with scheduling systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
