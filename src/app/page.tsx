"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Card, ImageSkeletons } from "@/components/Cards";
import DiscordIcon from "@/components/icons/Discord";

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/invite");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col md:flex-row items-center w-full">
          <Image
            src="https://cdn.discordapp.com/embed/avatars/0.png"
            alt="Bot Avatar"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold">Discord Bot</h1>
            <p className="text-md md:text-lg mt-2">
              This is a super great Discord Bot, the features are great and
              greater than any other Discord Bot!
            </p>
            <p className="text-sm md:text-md mt-2">
              This great bot is in <b>1,234,567</b> servers
            </p>
            <div className="flex flex-col md:flex-row mt-4">
              <button
                onClick={handleRedirect}
                className="bg-blueDiscord text-white px-4 py-2 rounded-md mb-2 md:mb-0 md:mr-2 flex items-center justify-center space-x-2"
              >
                <DiscordIcon className="fill-current text-white" />
                <span>Add to Discord</span>
              </button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded-md">
                View Features
              </button>
            </div>
          </div>
        </div>
        <ImageSkeletons numberOfImages={5} />
        <Card
          title="What are you waiting for?"
          classes="mt-32 w-full flex flex-row-reverse items-center"
          description="Invite DISCORD BOT now!"
        >
          <button
            onClick={handleRedirect}
            className="bg-blueDiscord text-white px-4 py-2 rounded-md mb-2 md:mb-0 md:mr-2 flex items-center justify-center space-x-2"
          >
            <DiscordIcon className="fill-current text-white" />
            <span>Add to Discord</span>
          </button>
        </Card>
      </div>
    </main>
  );
}
