import React, { useState } from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const [active, setActive] = useState<Boolean>(false);

  return (
    <div className="relative">
      <label
        htmlFor=""
        className={`absolute duration-300 text-muted-foreground  bg-background  rounded-2xl px-3 left-3 ${
          active ? "-top-3 z-10 border " : "top-3 -z-10"
        }`}
      >
        {props.placeholder}
      </label>
      <input
        type={type}
        data-slot="input"
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        className={cn(
          `file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground
        dark:bg-input/30 border-input h-12 rounded-xl w-full min-w-0  border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow]
        outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed
        disabled:opacity-50 md:text-sm`,
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
        placeholder=""
      />
    </div>
  );
}

export { Input };
