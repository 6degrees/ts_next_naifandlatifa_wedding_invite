"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { useAppContext } from "@/context/AppContext";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const { selectedLanguage } = useAppContext();

  // Dynamically assign font based on selected language
  const fontClass = selectedLanguage === "ar" ? "font-nymphaTrial" : "font-arbMuslimah";

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        `inline-flex h-14 items-center justify-center rounded-lg border border-white bg-transparent p-1 text-gray-500 ${fontClass}`,
        className
      )}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { selectedLanguage } = useAppContext();
  const fontClass = selectedLanguage === "ar" ? "font-nymphaTrial" : "font-arbMuslimah";

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        `inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-3 text-xl transition-all text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
        data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow hover:bg-white/10 hover:border-white hover:text-gray-700 ${fontClass}`,
        className
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} asChild className={cn("mt-2", className)} {...props}>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {props.children}
    </motion.div>
  </TabsPrimitive.Content>
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
