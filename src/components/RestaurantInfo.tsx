import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
} from "lucide-react";

const restaurantDetails = {
  address: "Restaurant address coming soon",
  phone: "Contact number coming soon",
  whatsapp: "WhatsApp number coming soon",
  email: "Email address coming soon",
  hours: [
    { day: "Monday – Friday", time: "Hours to be confirmed" },
    { day: "Saturday", time: "Hours to be confirmed" },
    { day: "Sunday", time: "Hours to be confirmed" },
  ],
};

const informationCards = [
  {
    title: "Find us",
    subtitle: "Our location",
    description: restaurantDetails.address,
    icon: MapPin,
  },
  {
    title: "Come through",
    subtitle: "Opening hours",
    description: "Check our opening times before visiting.",
    icon: Clock,
  },
  {
    title: "Get in touch",
    subtitle: "Contact us",
    description: restaurantDetails.phone,
    icon: Phone,
  },
];

export default function RestaurantInfo() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#24221f] px-4 py-20 text-[#f8f5ef] sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d49a78]">
            The Food District
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl md:text-6xl">
            Good food.
            <span className="block text-[#d49a78]">Good company.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            Planning a visit or have a question? Find our details below.
            We look forward to welcoming you.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {informationCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] sm:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b7472a]/20 text-[#d49a78]">
                  <Icon size={20} />
                </div>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d49a78]">
                  {item.subtitle}
                </p>

                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <Clock size={19} className="text-[#d49a78]" />
              <h3 className="font-bold">Opening hours</h3>
            </div>

            <div className="mt-5 space-y-4">
              {restaurantDetails.hours.map((item) => (
                <div
                  key={item.day}
                  className="flex flex-wrap justify-between gap-2 border-b border-white/10 pb-3 text-sm"
                >
                  <span className="text-white/70">{item.day}</span>
                  <span className="text-white/40">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d49a78]">
              Stay connected
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Let's keep in touch.
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/50">
              Our contact and social media details will be available here
              soon.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white/50">
                <MessageCircle size={15} />
                WhatsApp coming soon
              </span>

              <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white/50">
                <span className="font-bold">IG</span>
                Instagram coming soon
              </span>

              <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white/50">
                <span className="font-bold">f</span>
                Facebook coming soon
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>Different cravings. One destination.</p>
          <p>The Food District</p>
        </div>
      </div>
    </section>
  );
}
