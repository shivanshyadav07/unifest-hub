export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center px-6">
      <h1 className="text-5xl font-bold mb-4">Unifest Hub</h1>
      <p className="text-lg mb-6 max-w-2xl">
        The easiest way for universities to manage and showcase their events. 
        Registration, updates, and comparisons—all in one place.
      </p>
      <a
        href="#features"
        className="bg-white text-indigo-600 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-gray-100 transition"
      >
        Explore Features
      </a>
    </section>
  );
}