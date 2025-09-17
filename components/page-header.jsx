import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export function PageHeader({
  icon,
  title,
  backLink = "/",
  backLabel = "Back to Home",
}) {
  return (
    <div className="flex flex-col justify-between gap-5 mb-8">
      <Link href={backLink}>
        <Button
          variant="outline"
          size="sm"
          className="mt-5 mb-2 bg-[#eac6ff] border-[#d07fff] hover:cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {backLabel}
        </Button>
      </Link>
      <div className="flex items-end gap-2">
        {icon && (
          <div className="bg-gradient-to-r from-[#18063d] to-[#4b0f7a] bg-clip-text">
            {React.cloneElement(icon, {
              className: "h-12 md:h-14 w-12 md:w-14",
            })}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl gradient-title font-extrabold bg-gradient-to-r from-[#18063d] to-[#4b0f7a]  text-transparent bg-clip-text">{title}</h1>
      </div>
    </div>
  );
}