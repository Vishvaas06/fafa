"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart";

import { CartesianGrid, Dot, Line, LineChart } from "recharts";

import { cn } from "@/lib/utils";

const chartConfig = {
  latency: {
    label: "Latency",
    color: "#2563eb",
  },
} satisfies ChartConfig;

interface StatusDotProps {
  id: number;
  status: "red" | "yellow" | "green";
  ping: string;
  info: string;
  className?: string;
}

const StatusDot: React.FC<StatusDotProps> = ({
  status,
  ping,
  info,
  id,
  className,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case "red":
        return "bg-red-500";
      case "yellow":
        return "bg-yellow-500";
      case "green":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  function newDate(days: number) {
    return new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  }

  const chartData = [
    {
      month: newDate(Math.random() * 7)
        .toISOString()
        .split("T")[0],
      latency: 186,
    },
    {
      month: newDate(Math.random() * 7)
        .toISOString()
        .split("T")[0],
      latency: 305,
    },
    {
      month: newDate(Math.random() * 7)
        .toISOString()
        .split("T")[0],
      latency: 237,
    },
    {
      month: newDate(Math.random() * 7)
        .toISOString()
        .split("T")[0],
      latency: 73,
    },
    {
      month: newDate(Math.random() * 7)
        .toISOString()
        .split("T")[0],
      latency: 209,
    },
    {
      month: newDate(Math.random() * 7)
        .toISOString()
        .split("T")[0],
      latency: 214,
    },
    {
      month: newDate(Math.random() * 7)
        .toISOString()
        .split("T")[0],
      latency: 114,
    },
  ];

  return (
    <div className="relative group">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div
              className={cn(
                `w-5 h-5 rounded-full border ${getStatusColor()}`,
                className
              )}
            ></div>
          </TooltipTrigger>
          <TooltipContent className="break-words max-w-xs">
            <h3 className="text-lg font-bold">Shard {id}</h3>
            <p>Ping: {ping}</p>
            <p>Reported issues: {info}</p>
            <h3 className="text-lg font-bold mt-4">Average Latency</h3>
            <div>
              <ChartContainer config={chartConfig}>
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    top: 24,
                    left: 24,
                    right: 24,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        indicator="line"
                        nameKey="latency"
                        hideLabel
                      />
                    }
                  />
                  <Line
                    dataKey="latency"
                    type="natural"
                    strokeWidth={1}
                    dot={({ payload, ...props }) => {
                      return (
                        <Dot
                          key={payload.browser}
                          r={5}
                          cx={props.cx}
                          cy={props.cy}
                          fill={payload.fill}
                          stroke={payload.fill}
                        />
                      );
                    }}
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default StatusDot;
