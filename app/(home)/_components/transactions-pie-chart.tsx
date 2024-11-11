"use client";

import { Pie, PieChart } from "recharts";
import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { PercentageItem } from "./percentage-item";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#FFFFFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#22c55e",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#dc2626",
  },
} satisfies ChartConfig;

interface TransactionsPieChartProps {
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  typesPercentage: TransactionPercentagePerType;
}

export function TransactionsPieChart({
  depositsTotal,
  expensesTotal,
  investmentsTotal,
  typesPercentage,
}: TransactionsPieChartProps) {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: "#22c55e",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#dc2626",
    },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#FFFFFF",
    },
  ];
  return (
    <Card className="flex flex-col bg-transparent p-12">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <div className="space-y-3">
          <PercentageItem
            icon={<TrendingUpIcon size={16} className="text-primary" />}
            percentage={typesPercentage[TransactionType.DEPOSIT]}
            title="Receita"
          />
          <PercentageItem
            icon={<TrendingDownIcon size={16} className="text-red-600" />}
            percentage={typesPercentage[TransactionType.EXPENSE]}
            title="Despesa"
          />
          <PercentageItem
            icon={<PiggyBankIcon size={16} />}
            percentage={typesPercentage[TransactionType.INVESTMENT]}
            title="Investimento"
          />
        </div>
      </CardContent>
    </Card>
  );
}
