import * as React from "react";
import { Card as CardComponent, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface ImagePreviewsProps {
  numberOfImages: number;
}

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  classes?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

export function ImageSkeletons({ numberOfImages }: ImagePreviewsProps) {
  return (
    <div className="flex flex-col items-center w-full mt-32 space-y-16">
      {Array.from({ length: numberOfImages }, (_, i) => (
        <CardComponent
          key={i}
          className={`w-full max-w-xl h-40 transition-transform transform ${
            i % 2 === 0 ? "self-start" : "self-end"
          }`}
        >
          <CardContent className="flex items-center justify-center h-full">
            {i + 1}
          </CardContent>
        </CardComponent>
      ))}
    </div>
  );
}

export function Card({
  title,
  description,
  image,
  classes,
  styles,
  children,
}: CardProps) {
  return (
    <div className="flex flex-col" style={{ width: "100%" }}>
      <div className={cn("w-full", classes)} style={styles}>
        <div
          className="flex flex-col items-center h-full"
          style={{ width: "100%" }}
        >
          {image ? (
            <img src={image} alt={title} className="w-24 h-24 rounded-full" />
          ) : (
            <h2 className="text-2xl mt-6 font-bold">{title}</h2>
          )}
          {description ? <p className="text-md mb-5">{description}</p> : null}
          {children}
        </div>
      </div>
    </div>
  );
}
