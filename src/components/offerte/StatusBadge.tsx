
import { Circle } from "lucide-react";
import { OfferStatus } from "@/types/offerte";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: OfferStatus;
  showText?: boolean;
  size?: "sm" | "md";
}

export const StatusBadge = ({ status, showText = true, size = "md" }: StatusBadgeProps) => {
  const getStatusColor = (status: OfferStatus) => {
    switch (status) {
      case "RICEVUTA":
        return "text-blue-500";
      case "IN_LAVORAZIONE":
        return "text-gray-500";
      case "INVIATA":
        return "text-orange-500";
      case "CONFERMATA":
        return "text-green-500";
      case "SCADUTA":
        return "text-red-500";
      default:
        return "text-gray-400";
    }
  };

  const getStatusText = (status: OfferStatus) => {
    switch (status) {
      case "RICEVUTA":
        return "Ricevuta";
      case "IN_LAVORAZIONE":
        return "In lavorazione";
      case "INVIATA":
        return "Inviata";
      case "CONFERMATA":
        return "Confermata";
      case "SCADUTA":
        return "Scaduta";
      default:
        return status;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Circle
        className={cn(
          "fill-current", 
          getStatusColor(status),
          size === "sm" ? "h-3 w-3" : "h-4 w-4"
        )}
      />
      {showText && (
        <span className={size === "sm" ? "text-xs" : "text-sm"}>
          {getStatusText(status)}
        </span>
      )}
    </div>
  );
};
