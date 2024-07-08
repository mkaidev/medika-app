import Image from "next/image";
import Link from "next/link";

import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-8 h-10 w-fit"
            />
          </Link>

          <AppointmentForm
            patientId={patient.$id}
            userId={userId}
            type="create"
          />

          <p className="copyright mt-6 py-6">© 2024 Mkaidev | medika</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
