import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { FrameIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import twibbonImg from "@/../public/landing/19187638.jpg"
import stefanImg from "@/../public/landing/stefan.jpg"

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      <FrameIcon className="absolute w-[640px] text-muted h-auto right-[20px] -top-[120px]" />

      <Card className="absolute w-[420px] -top-[30px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar className="size-10">
            <AvatarImage
              alt="Stefan avatar"
              src="landing/stefan.jpg"
              className="object-cover size-full"
            />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Stefan</CardTitle>
            <CardDescription>@stefan</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Image 
            src={twibbonImg}
            width={420}
            height={420}
            alt="twibbon"
            className="object-cover size-full"
          />
        </CardContent>
        </Card>

      {/* Testimonial */}
      <Card className="absolute w-[440px] top-[420px] right-[20px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardContent> 📣 Aku #BersamaPerubahan! Ayo tunjukkan semangatmu lewat Twibbon ini!</CardContent>
      </Card>
    </div>
  );
};