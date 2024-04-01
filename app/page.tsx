"use client"
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ArrowRight } from "lucide-react";
import ReactPlayer from "react-player"
import { useEffect, useState } from "react";

export default function Home() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="">
      <div className="flex flex-col lg:flex-row bg-[#1E1919]">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox. <br />
            <br />
            Storing everything for you and your business needs. All in one place
          </h1>

          <p className="pb-10 pt-10">
            Enhance your personal storage with Dropbox, offering a simple and efficient way to upload, organize, and access files from anywhere. Securely store important documents and media, and experience the convenience of easy file management and sharing in one centralized solution.
          </p>

          <Link href="/dashboard" className="flex cursor-pointer bg-blue-500 p-5 w-fit">
            Try it for free!
            <ArrowRight className="ml-10" />
          </Link>
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 p-10 flex justify-center items-center">
          <div className="rounded-lg overflow-hidden aspect-widescreen">
            {isClient && (
              <ReactPlayer
                url='/dropboxVideo.mp4'
                playing={true}
                loop={true}
                muted={true}
                width="100%"
                height="100%" />
            )}
          </div>
        </div>

      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This Dropbox Clone Project is made only for informational and Educational purposes only. We do not own or affiliate with Dropbox and/or any of it&apos;s subsidiaries in any form. Copyright Disclaimer under Section 51 of the Copyright Act, 1956, allowance is made for &quot;fair dealing&quot; for the purposes of private study, research, criticism, review, and news reporting.
      </p>
    </main>
  );
}
