import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Mentorship", path: "/mentorship" },
    { name: "Contact", path: "/contact" },
  ];

  const NavLink = ({
    name,
    path,
    mobile = false,
  }: {
    name: string;
    path: string;
    mobile?: boolean;
  }) => (
    <Link
      to={path}
      onClick={() => mobile && setIsOpen(false)}
      className={cn(
        "text-foreground/80 hover:text-foreground transition-colors font-medium",
        location.pathname === path && "text-foreground",
        mobile && "block py-2 text-lg",
      )}
    >
      {name}
    </Link>
  );

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            Thao Dinh
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.path} name={item.name} path={item.path} />
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    name={item.name}
                    path={item.path}
                    mobile
                  />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
