import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <h2 className="font-bold text-lg">Logo</h2>
        <div className="flex gap-6">
          {links.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const links = [
  {
    href: "/how-it-works",
    label: "How It Works",
  },
  {
    href: "/pricing",
    label: "Pricing",
  },
  {
    href: "/docs",
    label: "Docs",
  },
  {
    href: "/login",
    label: "Login",
  },
  {
    href: "/sign-up",
    label: "Sign Up",
  },
];
