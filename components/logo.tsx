import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = Omit<ImageProps, "src" | "width" | "height" | "alt"> & {
  alt?: string;
};

export const Logo = ({ className, alt = "NovaLeads", ...props }: LogoProps) => {
  return (
    <Image
      src="/novaleads.jpeg"
      alt={alt}
      width={56}
      height={56}
      className={cn(
        "h-10 w-10 rounded-xl bg-white object-contain p-1",
        className
      )}
      {...props}
    />
  );
};
