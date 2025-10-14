import { cn } from "@/lib/utils";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "font-bold text-2xl md:text-3xl text-shop-dark-green capitalize tracking-wide ",
        className
      )}
    >
      {children}
    </h2>
  );
};

export { Title };
