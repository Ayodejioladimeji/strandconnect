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
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "px-4 py-2 rounded-md text-sm font-medium border transition-colors",
                selected
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-card-foreground border-tag-border hover:bg-secondary/50"
            )}
        >
            {children}
        </button>
    );
};