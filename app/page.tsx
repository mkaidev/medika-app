import Image from "next/image";
import Link from "next/link";

import PatientForm from "@/components/forms/PatientForm";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP Verification | PasskeyModal */}

      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-4 h-10 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular flex justify-between mt-5">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Mkaidev | medika
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%] max-h-screen"
      />
    </div>
  );
}
