"use client"

import { useState } from "react"
import { X, ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

interface BudgetModalProps {
  isOpen: boolean
  onClose: () => void
}

const siteTypes = [
  { id: "landing-page", label: "Landing Page", description: "Página única de conversão" },
  { id: "site-institucional", label: "Site Institucional", description: "Múltiplas páginas para sua empresa" },
  { id: "e-commerce", label: "E-commerce", description: "Loja virtual completa" },
  { id: "portfolio", label: "Portfolio", description: "Mostre seus trabalhos" },
  { id: "blog", label: "Blog", description: "Plataforma de conteúdo" },
  { id: "sistema-web", label: "Sistema Web", description: "Aplicação personalizada" },
]

const pageOptions = [
  { id: "1", label: "1 página" },
  { id: "2-5", label: "2 a 5 páginas" },
  { id: "6-10", label: "6 a 10 páginas" },
  { id: "10+", label: "Mais de 10 páginas" },
]

const finishLevels = [
  { id: "basico", label: "Básico", description: "Design simples e funcional" },
  { id: "intermediario", label: "Intermediário", description: "Design personalizado com animações" },
  { id: "premium", label: "Premium", description: "Design exclusivo com máxima qualidade" },
]

const budgetOptions = [
  { id: "500-1000", label: "R$ 500 a R$ 1.000" },
  { id: "1000-2000", label: "R$ 1.000 a R$ 2.000" },
  { id: "2000-5000", label: "R$ 2.000 a R$ 5.000" },
  { id: "nao-sei", label: "Ainda não sei" },
]

export function BudgetModal({ isOpen, onClose }: BudgetModalProps) {
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState("")
  const [selectedPages, setSelectedPages] = useState("")
  const [selectedFinish, setSelectedFinish] = useState("")
  const [copywriting, setCopywriting] = useState(false)
  const [selectedBudget, setSelectedBudget] = useState("")

  const totalSteps = 4

  const resetAndClose = () => {
    setStep(1)
    setSelectedType("")
    setSelectedPages("")
    setSelectedFinish("")
    setCopywriting(false)
    setSelectedBudget("")
    onClose()
  }

  const canAdvanceStep2 = selectedPages && selectedFinish
  const canAdvanceStep3 = selectedBudget

  const generateWhatsAppMessage = () => {
    const typeLabel = siteTypes.find(t => t.id === selectedType)?.label || selectedType
    const pagesLabel = pageOptions.find(p => p.id === selectedPages)?.label || selectedPages
    const finishLabel = finishLevels.find(f => f.id === selectedFinish)?.label || selectedFinish
    const budgetLabel = budgetOptions.find(b => b.id === selectedBudget)?.label || selectedBudget
    
    const message = `Olá! Gostaria de fazer um orçamento para um projeto:

*Tipo de Site:* ${typeLabel}
*Quantidade de Páginas:* ${pagesLabel}
*Nível de Acabamento:* ${finishLabel}
*Copywriting Estratégico:* ${copywriting ? "Sim" : "Não"}
*Orçamento Disponível:* ${budgetLabel}

Aguardo retorno!`

    return encodeURIComponent(message)
  }

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "5564999051521"
    const message = generateWhatsAppMessage()
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
    resetAndClose()
  }

  if (!isOpen) return null

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={resetAndClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card shadow-2xl border border-border rounded-2xl w-full max-w-lg max-h-[90vh] overflow-hidden animate-in duration-300 fade-in zoom-in-95">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-border border-b">
          <div>
            <h3 className="font-bold text-foreground text-xl">Solicitar Orçamento</h3>
            <p className="mt-1 text-muted-foreground text-sm">Etapa {step} de {totalSteps}</p>
          </div>
          <button
            onClick={resetAndClose}
            className="hover:bg-secondary p-2 rounded-lg transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="bg-secondary h-1">
          <div 
            className="bg-primary h-full transition-all duration-500"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
          {/* Step 1: Site Type */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="mb-4 font-semibold text-foreground">Qual tipo de site você precisa?</h4>
              <div className="gap-3 grid">
                {siteTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setSelectedType(type.id)
                      setStep(2)
                    }}
                    className={cn(
                      "hover:bg-primary/5 p-4 border hover:border-primary/50 rounded-xl w-full text-left transition-all",
                      selectedType === type.id
                        ? "border-primary bg-primary/10"
                        : "border-border bg-secondary/50"
                    )}
                  >
                    <span className="font-medium text-foreground">{type.label}</span>
                    <p className="mt-1 text-muted-foreground text-sm">{type.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Pages & Finish Level */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h4 className="mb-4 font-semibold text-foreground">Quantas páginas seu site terá?</h4>
                <div className="gap-3 grid grid-cols-2">
                  {pageOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedPages(option.id)}
                      className={cn(
                        "p-4 border hover:border-primary/50 rounded-xl text-center transition-all",
                        selectedPages === option.id
                          ? "border-primary bg-primary/10"
                          : "border-border bg-secondary/50"
                      )}
                    >
                      <span className="font-medium text-foreground">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-foreground">Nível de acabamento</h4>
                <div className="gap-3 grid">
                  {finishLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSelectedFinish(level.id)}
                      className={cn(
                        "p-4 border hover:border-primary/50 rounded-xl w-full text-left transition-all",
                        selectedFinish === level.id
                          ? "border-primary bg-primary/10"
                          : "border-border bg-secondary/50"
                      )}
                    >
                      <span className="font-medium text-foreground">{level.label}</span>
                      <p className="mt-1 text-muted-foreground text-sm">{level.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 bg-secondary/50 p-4 border border-border rounded-xl">
                <Checkbox
                  id="copywriting"
                  checked={copywriting}
                  onCheckedChange={(checked) => setCopywriting(checked as boolean)}
                />
                <label htmlFor="copywriting" className="flex-1 cursor-pointer">
                  <span className="font-medium text-foreground">Copywriting Estratégico</span>
                  <p className="text-muted-foreground text-sm">Textos persuasivos para aumentar conversões</p>
                </label>
              </div>
            </div>
          )}

          {/* Step 3: Budget */}
          {step === 3 && (
            <div className="space-y-4">
              <h4 className="mb-4 font-semibold text-foreground">Qual seu orçamento disponível?</h4>
              <div className="gap-3 grid">
                {budgetOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedBudget(option.id)}
                    className={cn(
                      "p-4 border hover:border-primary/50 rounded-xl w-full text-center transition-all",
                      selectedBudget === option.id
                        ? "border-primary bg-primary/10"
                        : "border-border bg-secondary/50"
                    )}
                  >
                    <span className="font-medium text-foreground">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Summary & WhatsApp */}
          {step === 4 && (
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground">Resumo do seu projeto</h4>
              
              <div className="space-y-3 bg-secondary/50 p-4 border border-border rounded-xl">
                <div className="flex justify-between items-center py-2 border-border border-b">
                  <span className="text-muted-foreground">Tipo de Site</span>
                  <span className="font-medium text-foreground">
                    {siteTypes.find(t => t.id === selectedType)?.label}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-border border-b">
                  <span className="text-muted-foreground">Páginas</span>
                  <span className="font-medium text-foreground">
                    {pageOptions.find(p => p.id === selectedPages)?.label}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-border border-b">
                  <span className="text-muted-foreground">Acabamento</span>
                  <span className="font-medium text-foreground">
                    {finishLevels.find(f => f.id === selectedFinish)?.label}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-border border-b">
                  <span className="text-muted-foreground">Copywriting</span>
                  <span className="font-medium text-foreground">
                    {copywriting ? "Sim" : "Não"}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Orçamento</span>
                  <span className="font-medium text-primary">
                    {budgetOptions.find(b => b.id === selectedBudget)?.label}
                  </span>
                </div>
              </div>

              <Button 
                onClick={handleWhatsAppRedirect}
                size="lg" 
                className="bg-[#25D366] hover:bg-[#20BD5A] w-full text-white"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Enviar pelo WhatsApp
              </Button>

              <p className="text-muted-foreground text-sm text-center">
                Você será redirecionado para o WhatsApp com todas as informações do seu projeto.
              </p>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center bg-secondary/30 p-6 border-border border-t">
          <Button
            variant="ghost"
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className={step === 1 ? "invisible" : ""}
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Voltar
          </Button>

          {step < 4 && (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={
                (step === 1 && !selectedType) ||
                (step === 2 && !canAdvanceStep2) ||
                (step === 3 && !canAdvanceStep3)
              }
            >
              Avançar
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
