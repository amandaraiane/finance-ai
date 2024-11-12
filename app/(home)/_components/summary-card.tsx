import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { AddTransactionButton } from "@/app/_components/add-transaction-button";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
  userCanAddTransaction?: boolean;
}
export function SummaryCard({
  icon,
  title,
  amount,
  userCanAddTransaction,
  size = "small",
}: SummaryCardProps) {
  return (
    <Card
      className={`${size === "large" ? "bg-white bg-opacity-5" : "bg-transparent"}`}
    >
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p
          className={`${size === "small" ? "text-muted-foreground" : "text-white opacity-70"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`font-bold ${size === "small" ? "text-2xl" : "text-4xl"}`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {size === "large" && (
          <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
        )}
      </CardContent>
    </Card>
  );
}
