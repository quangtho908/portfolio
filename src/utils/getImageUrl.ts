import type { Media } from "@/payload-types";

export default function getImageUrl(
  image: number | null | Media | undefined
): string {
  if (!image || image instanceof Number || !(image as Media)?.url)
    return "/slide_hero-1.jpg";

  const env = process.env.NODE_ENV;

  if (env !== "development") {
    return (image as Media).url || "/slide_hero-1.jpg";
  }

  return `${process.env.NEXT_PUBLIC_BASE_URL || ""}${(image as Media).url}`;
}
