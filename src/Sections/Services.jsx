import { services } from "../constants"
import ServiceMan from "../components/ServiceMan"
function Services() {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceMan key={service.label} {...service} />
      ))}

    </section>
  )
}

export default Services