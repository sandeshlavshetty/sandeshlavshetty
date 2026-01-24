export default function Footer() {
  return (
    <footer className="mt-32 pb-10">
      <div className="max-w-7xl mx-auto px-10">
        <div className="border-t border-white/10 pt-10 flex flex-col gap-4 text-sm text-gray-400">
          
          <p>
            Building reliable systems, thoughtful interfaces, and solutions that scale.
          </p>

          <div className="flex justify-between items-center">
            <span>© {new Date().getFullYear()} Sandesh Lavshetty</span>

            <span className="text-gray-500">
              Built with React & Tailwind
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
