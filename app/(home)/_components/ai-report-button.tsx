"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { BotIcon, Loader2Icon } from "lucide-react";
import { generateAiReport } from "../_actions/gererate-ai-report";
import { useState } from "react";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import Markdown from "react-markdown";
import Link from "next/link";

interface AiReportButtonProps {
  month: string;
  hasPremiumPlan: boolean;
}

export function AiReportButton({ month, hasPremiumPlan }: AiReportButtonProps) {
  const [report, setReport] = useState<string | null>(null);
  const [reportIsLoading, setReportIsLoading] = useState(false);

  const DUMMY_REPORT =
    '### Relatório de Finanças Pessoais\n\n#### Resumo Geral das Finanças\nAs transações listadas foram analisadas e as seguintes informações foram extraídas para oferecer insights sobre suas finanças:\n\n- **Total de despesas:** R$ 19.497,56\n- **Total de investimentos:** R$ 14.141,47\n- **Total de depósitos/correntes:** R$ 10.100,00 (considerando depósitos de salário e outros)\n- **Categoria de maior despesa:** Alimentação\n\n#### Análise por Categoria\n\n1. **Alimentação:** R$ 853,76\n2. **Transporte:** R$ 144,05\n3. **Entretenimento:** R$ 143,94\n4. **Outras despesas:** R$ 17.828,28 (inclui categorias como saúde, educação, habitação)\n\n#### Tendências e Insights\n- **Despesas Elevadas em Alimentação:** A categoria de alimentação representa uma parte significativa de suas despesas, com um total de R$ 853,76 nos últimos meses. É importante monitorar essa categoria para buscar economia.\n  \n- **Despesas Variáveis:** Outros tipos de despesas, como entretenimento e transporte, também se acumulam ao longo do mês. Identificar dias em que se gasta mais pode ajudar a diminuir esses custos.\n  \n- **Investimentos:** Você fez investimentos significativos na ordem de R$ 14.141,47. Isso é um bom sinal para a construção de patrimônio e aumento de sua segurança financeira no futuro.\n  \n- **Categorização das Despesas:** Há uma série de despesas listadas como "OUTRA", que podem ser reavaliadas. Classificar essas despesas pode ajudar a ter um controle melhor das finanças.\n\n#### Dicas para Melhorar Sua Vida Financeira\n\n1. **Crie um Orçamento Mensal:** Defina um limite de gastos para cada categoria. Isso ajuda a evitar gastos excessivos em áreas como alimentação e entretenimento.\n\n2. **Reduza Gastos com Alimentação:** Considere cozinhar em casa com mais frequência, planejar refeições e usar listas de compras para evitar compras impulsivas.\n\n3. **Revise Despesas Recorrentes:** Dê uma olhada nas suas despesas fixas (como saúde e educação) para verificar se estão adequadas às suas necessidades e se há espaço para redução.\n\n4. **Estabeleça Metas de Poupança:** Com base em seus depósitos e investimentos, estabeleça metas específicas para economizar uma porcentagem do seu rendimento mensal. Estimar quanto você pode economizar pode ajudar a garantir uma reserva de emergência.\n\n5. **Diminua os Gastos com Entretenimento:** Planeje lazer de forma que não exceda seu orçamento, busque opções gratuitas ou de baixo custo. Lembre-se de que entretenimento também pode ser feito em casa.\n\n6. **Reavalie Seus Investimentos:** Certifique-se de que seus investimentos estejam alinhados com seus objetivos financeiros a curto e longo prazo. Pesquise alternativas que podem oferecer melhor retorno.\n\n7. **Acompanhe Suas Finanças Regularmente:** Use aplicativos de gerenciamento financeiro para controlar suas despesas e receitas, ajudando você a manter-se informado sobre sua saúde financeira.\n\n#### Conclusão\nMelhorar sua vida financeira é um processo contínuo que envolve planejamento, monitoramento e ajustes regulares. Com as análises e as sugestões acima, você pode começar a tomar decisões financeiras mais estratégicas para alcançar seus objetivos. Lembre-se que cada real economizado é um passo a mais em direção à segurança financeira!';

  async function handleGenerateReportClick() {
    try {
      setReportIsLoading(true);
      const aiReport = await generateAiReport({ month });
      setReport(aiReport);
    } catch (error) {
      console.error(error);
    } finally {
      setReportIsLoading(false);
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-bold" variant="ghost">
          Relatório IA
          <BotIcon />
        </Button>
      </DialogTrigger>
      {hasPremiumPlan ? (
        <DialogContent className="max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Relatório IA</DialogTitle>
            <DialogDescription>
              Use inteligência artificial para gerar um relatório com insights
              sobre suas finanças.
            </DialogDescription>
          </DialogHeader>
          <DialogDescription className="overflow-hidden">
            <ScrollArea className="prose prose-h3:text-white prose-h4:text-white prose-strong:text-white h-auto max-h-[450px] text-white">
              <Markdown>{DUMMY_REPORT}</Markdown>
            </ScrollArea>
          </DialogDescription>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancelar</Button>
            </DialogClose>
            <Button
              disabled={reportIsLoading}
              onClick={handleGenerateReportClick}
            >
              {reportIsLoading && <Loader2Icon className="animate-spin" />}
              Gerar
            </Button>
          </DialogFooter>
        </DialogContent>
      ) : (
        <DialogContent className="max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Relatório IA</DialogTitle>
            <DialogDescription>
              Você precisa de um plano premium para gerar relatórios com IA.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancelar</Button>
            </DialogClose>
            <Button asChild>
              <Link href="/subscription">Assinar plano premium</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
}
