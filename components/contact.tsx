"use client"

import { useState } from "react"
import { Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BudgetModal } from "@/components/budget-modal"

export function Contact() {
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false)

  return (
    <section id="contato" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vamos <span className="text-primary">Conversar</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar sua ideia em realidade? Solicite um orçamento e vamos discutir seu projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Budget CTA */}
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Orçamento Rápido</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Responda algumas perguntas simples e receba uma proposta personalizada diretamente no seu WhatsApp.
            </p>
            <Button 
              onClick={() => setIsBudgetModalOpen(true)} 
              className="w-full"
              size="lg"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </Button>
          </div>

          {/* Availability */}
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Resposta Rápida</h3>
              <p className="text-muted-foreground mb-6">
                Respondo todas as mensagens em até 24 horas. Vamos criar algo incrível juntos!
              </p>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
              </span>
              <span className="text-sm font-medium text-foreground">Disponível para novos projetos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Modal */}
      <BudgetModal 
        isOpen={isBudgetModalOpen} 
        onClose={() => setIsBudgetModalOpen(false)} 
      />
    </section>
  )
}
