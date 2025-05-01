import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <section className="py-32 max-w-screen-xl flex flex-col mx-auto space-y-10">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16">
          <div className="md:w-1/2">
            <h4 className="mb-1 text-2xl font-bold md:text-3xl">
            The Best Data Solutions for Your Business 
            </h4>
            <p className="text-muted-foreground">
            Manage and optimize your company's data with cutting-edge technology to enhance efficiency and security.
            </p>
            <Button className="mt-6">
              Get Started <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
          <div className="md:w-1/2">
            <ul className="flex w-full flex-col space-y-2 text-sm font-medium sm:text-base">
              <li className="flex items-center">
                <Check className="mr-4 size-4 flex-shrink-0" />
                Advanced technology for accurate data analysis.
              </li>
              <li className="flex items-center">
                <Check className="mr-4 size-4 flex-shrink-0" />
                High-level security for reliable business operations.
              </li>
              <li className="flex items-center">
                <Check className="mr-4 size-4 flex-shrink-0" />
                Seamless integration with existing systems.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta };
