"use client";

import certLottieIcon from "@/../public/lottie/Accreditation.json"
import twibbonLottieIcon from "@/../public/lottie/user_profile.json"
import { Button } from "@/components/ui/button";
import { RadixRadioCard } from "@/components/ui/radio-card";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState("");

  const options = [
    {
      icon: certLottieIcon,
      value: "certificate",
      label: "Sertifikat",
      description: "Bisa digunakan untuk membuat sertifikat untuk event",
    },
    {
      icon: twibbonLottieIcon,
      value: "twibbon",
      label: "Twibbon",
      description: "Buat twibbon untuk memeriahkan campaign kamu",
    },
  ];

  return (
    <div className="font-sans min-h-screen max-w-screen-xl mx-auto px-8">
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">
          Apa yang Akan Kamu Buat Hari ini?
        </h1>
        <p className="text-lg">Pilih salah satu dari pilihan berikut</p>
      </div>
      <div>
        <RadixRadioCard
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          options={options}
          value={selected}
          onChange={setSelected}
        />
        <Button
          disabled={!selected}
          className="block ml-auto mt-16 cursor-pointer"
        >
          Selanjutnya
        </Button>
      </div>
    </div>
  );
}
