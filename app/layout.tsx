import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swayam — Video Editor & Visual Storyteller",
  description: "Selected personal edits and client projects by Swayam.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
