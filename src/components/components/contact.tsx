import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Mail, MapPin} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-32 max-w-screen-xl flex flex-col mx-auto space-y-10">
      <div className="container">
        <div className="mb-14">
          <span className="text-sm font-semibold">Contact Us</span>
          <h1 className="mt-1 mb-3 text-3xl font-semibold text-balance md:text-4xl">
            Get in Touch with Our Friendly Team
          </h1>
          <p className="text-lg text-muted-foreground">
            Need assistance? We&apos;re here to help! Reach out via email, visit our office, or contact us on WhatsApp
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">Send Us an Email</p>
            <p className="mb-3 text-muted-foreground">
                Have a question or request? Drop us a message at our email address.
            </p>
            <a href="#" className="font-semibold hover:underline">
              semesta@mail.com
            </a>
          </div>
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">Visit Our Office</p>
            <p className="mb-3 text-muted-foreground">
              Let&apos;s meet in person! Stop by for a friendly chat and discuss how we can assist you further.
            </p>
            <a href="#" className="font-semibold hover:underline">
             Jl. Persatuan, Celeban UH III/549 Yogyakarta
            </a>
          </div>
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <IconBrandWhatsapp className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold"> Call Us On Whatsapp</p>
            <p className="mb-3 text-muted-foreground">
                Prefer a quick chat? Reach us on WhatsApp for instant support.
            </p>
            <a href="#" className="font-semibold hover:underline">
                (+62) 831 2476 1723
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };
