import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  Wallet2Icon,
} from "lucide-react";

import { SummaryCard } from "./summary-card";

interface SummaryCardsProps {
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  userCanAddTransaction?: boolean;
}

export async function SummaryCards({
  balance,
  depositsTotal,
  expensesTotal,
  investmentsTotal,
  userCanAddTransaction,
}: SummaryCardsProps) {
  return (
    <div className="space-y-6">
      <SummaryCard
        amount={balance}
        icon={<Wallet2Icon size={16} />}
        title="Saldo"
        size="large"
        userCanAddTransaction={userCanAddTransaction}
      />
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          amount={investmentsTotal}
          icon={<PiggyBankIcon size={16} />}
          title="Investido"
        />
        <SummaryCard
          amount={depositsTotal}
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          title="Receita"
        />
        <SummaryCard
          amount={expensesTotal}
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          title="Despesa"
        />
      </div>
    </div>
  );
}
