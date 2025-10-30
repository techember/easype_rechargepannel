import { CreditCard, Plane, Smartphone, Tv, Wrench } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <ServiceCard
            Icon={Smartphone}
            title="Mobile Recharge"
            description="Quick and secure mobile top-ups for all major operators."
          />
          <ServiceCard
            Icon={Tv}
            title="DTH Recharge"
            description="Instant DTH recharges with flexible plans and offers."
          />
          <ServiceCard
            Icon={CreditCard}
            title="BBPS Bill payments"
            description=" electricity, water, gas, and broadband bills easily."
          />
          <ServiceCard
            Icon={Plane}
            title="Travel Booking"
            description="Book flights, buses, and hotels at the best prices."
          />
          <ServiceCard
            Icon={Wrench}
            title="City Service Provider"
            description="Book local experts like barbers, electricians, plumbers, AC repair professionals and more."
          />
        </div>
      </div>
    </section>
  );
}
