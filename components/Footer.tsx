export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Abdul Hadi. Built with Next.js & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
