import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TagButtonProps {
    children: React.ReactNode;
    selected?: boolean;
    onClick?: () => void;
    variant?: "primary" | "secondary";
}

export const TagButton = ({
    children,
    selected = false,
    onClick,
    variant = "primary"
}: TagButtonProps) => {
    return (
        <Button
        variant="dark"
            onClick={onClick}
            className={cn(
                "px-4 py-2 rounded-md text-sm font-medium border transition-colors font-light cursor-pointer",
                selected
                    ? "bg-black text-white border"
                    : "bg-card text-card-foreground border hover:bg-secondary/50"
            )}
        >
            {children}
        </Button>
    );
};