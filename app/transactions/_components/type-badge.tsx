import { CircleIcon } from "lucide-react";
import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

export function TransactionTypeBadge({
  transaction,
}: TransactionTypeBadgeProps) {
  if (transaction.type == TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-zinc-900 font-bold text-green-500 hover:bg-green-950">
        <CircleIcon className="mr-1 fill-green-500" size={10} /> Depósito
      </Badge>
    );
  }
  if (transaction.type == TransactionType.EXPENSE) {
    return (
      <Badge className="bg-zinc-900 font-bold text-red-600 hover:bg-red-950">
        <CircleIcon className="mr-1 fill-red-600" size={10} /> Despesa
      </Badge>
    );
  }
  return (
    <Badge className="bg-zinc-900 font-bold text-zinc-50 hover:bg-zinc-950">
      <CircleIcon className="mr-1 fill-zinc-50" size={10} /> Investimento
    </Badge>
  );
}
