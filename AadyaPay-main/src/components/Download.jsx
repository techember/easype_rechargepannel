export default function CTA() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-green-200 via-yellow-100 to-green-300 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-6 text-green-900">
          Download EasyPe Today
        </h2>

        <p className="mb-8 text-lg text-gray-800">
          Experience fast, secure, and rewarding payments. Join millions of users already using EasyPe.
        </p>

        <div className="space-x-4">
          <button className="px-6 py-3 rounded-full bg-green-700 text-white font-bold shadow-lg hover:bg-green-800 transition duration-300">
            Google Play
          </button>
        </div>
      </div>
    </section>
  );
}
