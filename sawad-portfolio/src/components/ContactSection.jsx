export default function ContactSection() {
  return (
    <section className="mt-24 mb-32">
      <h2 className="text-[100px] font-black text-white leading-[0.85] tracking-tighter uppercase">
        LET&apos;S WORK
        <span className="block text-[#1a1a1a]">TOGETHER</span>
      </h2>

      <form
        action="https://formspree.io/f/xvzkyggj" // 🔁 replace with your Formspree ID
        method="POST"
        className="mt-14 space-y-6 max-w-3xl"
      >
        <div className="grid grid-cols-2 gap-6">
          <Input label="Name" name="name" placeholder="Your Name" />

          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Your@email.com"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell me about your project, idea, or opportunity"
            className="mt-2 w-full bg-[#2a2a2a] text-gray-300 rounded-lg px-4 py-3 outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

function Input({ label, name, type = "text", placeholder }) {
  return (
    <div>
      <label className="text-sm text-gray-400">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full bg-[#2a2a2a] text-gray-300 rounded-lg px-4 py-3 outline-none"
      />
    </div>
  );
}
