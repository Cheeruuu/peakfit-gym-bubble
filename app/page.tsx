"use client";

import { useState } from "react";

const services = [
  {
    title: "Personal Training",
    description: "1-on-1 coaching designed around your goals.",
    icon: "🏋️",
  },
  {
    title: "Group Classes",
    description: "HIIT, strength, mobility and more.",
    icon: "🔥",
  },
  {
    title: "Open Gym",
    description: "Train at your own pace with premium equipment.",
    icon: "💪",
  },
  {
    title: "Nutrition Coaching",
    description: "Personalized guidance to support your results.",
    icon: "🥗",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! 👋 Welcome to PeakFit Gym. I'm your AI receptionist. How can I help you today?",
    },
  ]);

  const businessId = "gym-demo";

  function sendMessage(text?: string) {
    const finalMessage = text ?? message;

    if (!finalMessage.trim()) return;

    setMessages((current) => [
      ...current,
      {
        sender: "user",
        text: finalMessage,
      },
      {
        sender: "bot",
        text: getDemoReply(finalMessage),
      },
    ]);

    setMessage("");
  }

  function getDemoReply(text: string) {
    const lower = text.toLowerCase();

    if (lower.includes("personal") || lower.includes("training")) {
      return "Absolutely! 💪 Personal training sessions are available. I can help you book one once our booking system is connected.";
    }

    if (lower.includes("class") || lower.includes("group")) {
      return "We offer several group classes including HIIT, strength and mobility. I can help you find a suitable class.";
    }

    if (lower.includes("membership")) {
      return "We have flexible membership options for different training goals. I can provide membership information.";
    }

    if (lower.includes("hour") || lower.includes("open")) {
      return "PeakFit Gym is open from 6:00 AM to 10:00 PM every day.";
    }

    if (lower.includes("book") || lower.includes("appointment")) {
      return "Sure! I can help you book a session. Our real booking system will be connected in the next step.";
    }

    return "I'd be happy to help! You can ask me about memberships, personal training, group classes, opening hours, or booking a session.";
  }

  return (
    <main className="min-h-screen bg-[#080b0f] text-white">
      {/* Demo business ID */}
      <div
        data-business-id={businessId}
        className="hidden"
      />

      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-[#080b0f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-xl text-black">
              🏋️
            </div>

            <div className="text-xl font-bold">
              PeakFit<span className="text-yellow-400">Gym</span>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#home" className="text-yellow-400">
              Home
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#memberships" className="hover:text-white">
              Memberships
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="rounded-full bg-yellow-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-yellow-300"
          >
            Book a Session
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[720px] items-center overflow-hidden pt-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(250,204,21,0.12),transparent_35%)]" />

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div className="relative z-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Stronger • Healthier • Happier
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Your Fitness
              <br />
              Journey
              <br />
              <span className="text-yellow-400">Starts Here.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
              Modern equipment, expert trainers and a supportive community
              designed to help you become stronger and healthier.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => setOpen(true)}
                className="rounded-full bg-yellow-400 px-7 py-4 font-bold text-black transition hover:scale-105 hover:bg-yellow-300"
              >
                Join Now →
              </button>

              <a
                href="#services"
                className="rounded-full border border-white/30 px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <div className="text-3xl font-black">2K+</div>
                <div className="text-sm text-gray-500">Active Members</div>
              </div>

              <div>
                <div className="text-3xl font-black">15+</div>
                <div className="text-sm text-gray-500">Expert Trainers</div>
              </div>

              <div>
                <div className="text-3xl font-black">6AM–10PM</div>
                <div className="text-sm text-gray-500">Open Daily</div>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative hidden h-[520px] md:block">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-yellow-400/20 via-transparent to-transparent" />

            <div className="absolute right-0 top-10 h-[450px] w-[90%] rounded-[40px] border border-white/10 bg-gradient-to-br from-[#20262d] via-[#11161c] to-[#080b0f] shadow-2xl">
              <div className="absolute left-8 top-8 rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold text-black">
                PEAK PERFORMANCE
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <div className="mb-3 text-6xl">🏋️‍♂️</div>

                <h2 className="text-4xl font-black">
                  BETTER
                  <br />
                  THAN
                  <br />
                  YESTERDAY.
                </h2>

                <div className="mt-6 h-2 w-32 rounded-full bg-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-white/10 bg-[#0d1116]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-10 md:grid-cols-4">
          <Feature icon="🏋️" title="Expert Trainers" text="Certified & experienced" />
          <Feature icon="❤️" title="Modern Equipment" text="Top-notch facilities" />
          <Feature icon="👥" title="Community" text="Together we grow" />
          <Feature icon="🕐" title="Flexible Hours" text="6 AM – 10 PM" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
            What We Offer
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Our Services
          </h2>

          <p className="mt-4 max-w-xl text-gray-400">
            Everything you need to reach your fitness goals.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-[#0d1116] p-7 transition hover:-translate-y-1 hover:border-yellow-400/50"
            >
              <div className="mb-8 text-4xl">{service.icon}</div>

              <h3 className="text-xl font-bold">
                {service.title}
              </h3>

              <p className="mt-3 min-h-[55px] text-sm leading-6 text-gray-400">
                {service.description}
              </p>

              <button
                onClick={() => setOpen(true)}
                className="mt-6 text-sm font-bold text-yellow-400"
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section
        id="memberships"
        className="border-y border-white/10 bg-[#0d1116] px-6 py-24"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
            Memberships
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Find Your Perfect Plan
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Flexible options for beginners, serious athletes and everyone in
            between.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Plan name="Basic" price="£29" />
            <Plan name="Performance" price="£49" featured />
            <Plan name="Elite" price="£79" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-yellow-400/20 bg-yellow-400 p-10 text-center text-black md:p-16">
          <h2 className="text-4xl font-black md:text-5xl">
            Ready to get stronger?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-black/70">
            Talk to our AI receptionist and find the right session for you.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-8 rounded-full bg-black px-8 py-4 font-bold text-white transition hover:scale-105"
          >
            Talk to PeakFit AI →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-white/10 px-6 py-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <div>
            © 2026 PeakFit Gym. Demo website.
          </div>

          <div>
            AI Receptionist Demo • Business ID: {businessId}
          </div>
        </div>
      </footer>

      {/* CHAT BUBBLE */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open AI receptionist"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-2xl text-black shadow-2xl transition hover:scale-110"
      >
        {open ? "✕" : "💬"}
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-28 right-6 z-50 flex h-[570px] w-[370px] max-w-[calc(100vw-30px)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white text-black shadow-2xl">
          {/* CHAT HEADER */}
          <div className="flex items-center justify-between bg-[#0b0f14] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-xl text-black">
                🏋️
              </div>

              <div>
                <div className="font-bold">
                  PeakFit AI Receptionist
                </div>

                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Usually replies instantly
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-xl text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-5">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    msg.sender === "user"
                      ? "rounded-br-md bg-yellow-400 text-black"
                      : "rounded-bl-md bg-white text-gray-800 shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* QUICK ACTIONS */}
            {messages.length === 1 && (
              <div className="space-y-2 pt-2">
                <QuickButton
                  text="Book a personal training session"
                  onClick={() =>
                    sendMessage("I want to book a personal training session")
                  }
                />

                <QuickButton
                  text="Book a group class"
                  onClick={() =>
                    sendMessage("I want to book a group class")
                  }
                />

                <QuickButton
                  text="Membership information"
                  onClick={() =>
                    sendMessage("Tell me about memberships")
                  }
                />

                <QuickButton
                  text="General questions"
                  onClick={() =>
                    sendMessage("I have a general question")
                  }
                />
              </div>
            )}
          </div>

          {/* INPUT */}
          <div className="border-t bg-white p-3">
            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 bg-transparent text-sm outline-none"
              />

              <button
                onClick={() => sendMessage()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-white/10 px-5 py-5 first:border-0 md:border-l">
      <div className="mb-2 text-2xl">{icon}</div>
      <div className="font-bold">{title}</div>
      <div className="mt-1 text-sm text-gray-500">{text}</div>
    </div>
  );
}

function Plan({
  name,
  price,
  featured = false,
}: {
  name: string;
  price: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-7 text-left ${
        featured
          ? "border-yellow-400 bg-yellow-400 text-black"
          : "border-white/10 bg-[#080b0f]"
      }`}
    >
      {featured && (
        <div className="mb-4 text-xs font-black uppercase tracking-widest">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-bold">{name}</h3>

      <div className="mt-5 text-4xl font-black">
        {price}
        <span className="text-sm font-normal opacity-60">
          /month
        </span>
      </div>

      <ul className="mt-6 space-y-3 text-sm opacity-80">
        <li>✓ Gym access</li>
        <li>✓ Modern equipment</li>
        <li>✓ Member support</li>
      </ul>
    </div>
  );
}

function QuickButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="block w-full rounded-full border border-gray-300 bg-white px-4 py-3 text-left text-sm transition hover:border-yellow-400 hover:bg-yellow-50"
    >
      {text}
    </button>
  );
}