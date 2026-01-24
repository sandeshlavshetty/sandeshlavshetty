export default function ContactSection() {
  return (
    <section className="mt-24 mb-32">
      <h2 className="text-[64px] font-extrabold text-white leading-none">
        LET&apos;S WORK
        <span className="block text-white/20">TOGETHER</span>
      </h2>

      <form className="mt-14 space-y-6 max-w-3xl">
        <div className="grid grid-cols-2 gap-6">
          <Input label="Name" placeholder="Your Name" />
          <Input label="Email" placeholder="Your@email.com" />
        </div>

        <div>
          <label className="text-sm text-gray-400">Budget</label>
          <select className="mt-2 w-full bg-[#2a2a2a] text-gray-300 rounded-lg px-4 py-3 outline-none">
            <option>Select...</option>
            <option>$500 – $1k</option>
            <option>$1k – $5k</option>
            <option>$5k+</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-400">Message</label>
          <textarea
            rows={5}
            placeholder="Message"
            className="mt-2 w-full bg-[#2a2a2a] text-gray-300 rounded-lg px-4 py-3 outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-sm text-gray-400">{label}</label>
      <input
        placeholder={placeholder}
        className="mt-2 w-full bg-[#2a2a2a] text-gray-300 rounded-lg px-4 py-3 outline-none"
      />
    </div>
  );
}
