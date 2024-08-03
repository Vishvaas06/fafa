import * as React from "react";
import StatusDot from "@/components/StatusDot";
import { Separator } from "@/components/ui/Separator";

export default function Status() {
  const infos = [
    "This instance did not respond in time and may be unavailable.",
    "Maintaince was scheduled and features may not work as intended.",
    "High latency across this instance.",
    "No Issues reported.",
  ];
  const statuses = ["red", "yellow", "green"];

  const statusDots = Array.from({ length: 250 }, () => ({
    status: statuses[Math.floor(Math.random() * statuses.length)],
    ping: `${Math.floor(Math.random() * 200)}ms`,
    info: infos[Math.floor(Math.random() * infos.length)],
  }));

  return (
    <main className="flex min-h-screen flex-col p-6 md:p-24">
      <div className="justify-start text-left">
        <h1 className="text-4xl font-bold">[DISCORD BOT] Status</h1>
        <p className="text-lg mt-4"> Check the status of our services. </p>
        <p className="text-gray-500 text-sm mt-2">
          Hover over the dots for more information.
        </p>
        <Separator className="mb-8 mt-8 mr-16" />
        <div>
          <h2 className="text-3xl font-bold">Server Shards</h2>
          <p className="text-gray-500 text-sm mt-2">
            This is the shard where the bot of one of your servers is running.
          </p>
          <div className="flex items-center">
            <StatusDot
              className="w-14 h-14 mt-4"
              id={Math.floor(Math.random() * 250)}
              key={Math.floor(Math.random() * 250)}
              status="green"
              ping={Math.floor(Math.random() * 200) + "ms"}
              info="This likes to massively explode, like really bad. You don't want this to explode actually."
            />
            <div className="ml-4 mt-2">
              <p className="text-lg">
                Server Name{" "}
                <span className="text-sm text-gray-500">(Server ID)</span>
              </p>
              <p className="text-gray-500 text-sm">Shard ID</p>
            </div>
          </div>
        </div>
        <Separator className="mb-8 mt-8 mr-16" />
        <h2 className="text-3xl mb-8 font-bold">Other Shards</h2>
      </div>
      <div className="flex flex-wrap gap-8 items-center">
        {statusDots.map((dot, index) => (
          <StatusDot
            id={index + 1}
            key={index}
            status={dot.status as "red" | "yellow" | "green"}
            ping={dot.ping}
            info={dot.info}
          />
        ))}
      </div>
    </main>
  );
}
