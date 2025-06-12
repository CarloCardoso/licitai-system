"use client"

import { useState } from "react"

interface Collaborator {
  id: string
  name: string
  role: string
  suggestedValue: number
  currentValue: number
  isRequired: boolean
}

export function AnalysisResult() {
  const [collaborators, setCollaborators] = useState<Collaborator[]>([
    {
      id: "1",
      name: "Gerente de Projeto",
      role: "Coordenação",
      suggestedValue: 15000,
      currentValue: 15000,
      isRequired: true,
    },
    {
      id: "2",
      name: "Arquiteto de Software",
      role: "Arquitetura",
      suggestedValue: 18000,
      currentValue: 18000,
      isRequired: true,
    },
    {
      id: "3",
      name: "Desenvolvedor Senior",
      role: "Desenvolvimento",
      suggestedValue: 12000,
      currentValue: 12000,
      isRequired: true,
    },
    {
      id: "4",
      name: "Desenvolvedor Pleno",
      role: "Desenvolvimento",
      suggestedValue: 8000,
      currentValue: 8000,
      isRequired: true,
    },
    { id: "5", name: "Designer UX/UI", role: "Design", suggestedValue: 10000, currentValue: 10000, isRequired: false },
    { id: "6", name: "Analista de QA", role: "Qualidade", suggestedValue: 7000, currentValue: 7000, isRequired: true },
    { id: "7", name: "DevOps", role: "Infraestrutura", suggestedValue: 9000, currentValue: 9000, isRequired: false },
    {
      id: "8",
      name: "Analista de Negócios",
      role: "Análise",
      suggestedValue: 8500,
      currentValue: 8500,
      isRequired: false,
    },
  ])

  const [profitMargin, setProfitMargin] = useState(25)

  const updateCollaboratorValue = (id: string, newValue: number) => {
    setCollaborators((prev) =>
      prev.map((collab) => (collab.id === id ? { ...collab, currentValue: newValue } : collab)),
    )
  }

  const totalCollaboratorsCost = collaborators.reduce((sum, collab) => sum + collab.currentValue, 0)
  const projectTotal = totalCollaboratorsCost * 12
  const profit = projectTotal * (profitMargin / 100)
  const finalTotal = projectTotal + profit
  const aggressiveValue = Math.round(finalTotal * 0.85)

  const functions = [
    { name: "Sistema de Autenticação", isRequired: true },
    { name: "Dashboard Administrativo", isRequired: true },
    { name: "Gestão de Usuários", isRequired: true },
    { name: "Relatórios Gerenciais", isRequired: true },
    { name: "API REST", isRequired: true },
    { name: "Backup Automático", isRequired: true },
    { name: "App Mobile", isRequired: false },
    { name: "Integração com BI", isRequired: false },
    { name: "Chat em Tempo Real", isRequired: false },
    { name: "Notificações Push", isRequired: false },
    { name: "Análise Preditiva", isRequired: false },
    { name: "Sistema de Relatórios Avançados", isRequired: false },
  ]

  const requiredFunctions = functions.filter((func) => func.isRequired)
  const optionalFunctions = functions.filter((func) => !func.isRequired)

  const technicalRequirements = [
    "Linguagem: Java ou .NET",
    "Banco de Dados: PostgreSQL ou SQL Server",
    "Servidor: Linux ou Windows Server",
    "Segurança: SSL/TLS, Criptografia AES-256",
    "Disponibilidade: 99.5% uptime",
    "Backup: Diário com retenção de 30 dias",
    "Documentação: Técnica e do usuário",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 p-4">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-blue-300 tracking-wider">LICITAI</h1>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Informações Gerais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-white/90 text-lg font-semibold mb-2">Valor Total</h3>
            <p className="text-3xl font-bold text-green-300">R$ {finalTotal.toLocaleString("pt-BR")}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-white/90 text-lg font-semibold mb-2">Valor Mensal</h3>
            <p className="text-3xl font-bold text-blue-300">R$ {(finalTotal / 12).toLocaleString("pt-BR")}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-white/90 text-lg font-semibold mb-2">Viabilidade</h3>
            <span className="inline-block bg-green-500/80 text-white px-4 py-2 rounded-full text-lg font-semibold">
              ALTA
            </span>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-white/90 text-lg font-semibold mb-2">Valor Agressivo</h3>
            <p className="text-3xl font-bold text-orange-300">R$ {aggressiveValue.toLocaleString("pt-BR")}</p>
            <p className="text-xs text-white/60 mt-1">15% abaixo do custo</p>
          </div>
        </div>

        {/* Funções */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h3 className="text-white/90 text-xl font-semibold mb-6">Funcionalidades do Sistema</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white/90 font-semibold mb-4 text-lg">Funcionalidades Principais</h4>
              <div className="space-y-3">
                {requiredFunctions.map((func, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                  >
                    <span className="text-white/90">{func.name}</span>
                    <span className="bg-red-500/80 text-white px-3 py-1 rounded-full text-sm">Obrigatório</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white/90 font-semibold mb-4 text-lg">Funcionalidades Extras</h4>
              <div className="space-y-3">
                {optionalFunctions.map((func, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                  >
                    <span className="text-white/90">{func.name}</span>
                    <span className="bg-blue-500/80 text-white px-3 py-1 rounded-full text-sm">Opcional</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Colaboradores */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h3 className="text-white/90 text-xl font-semibold mb-6">Colaboradores e Custos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborators.map((collab) => (
              <div key={collab.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-white/90 font-semibold">{collab.name}</h4>
                    <p className="text-white/60 text-sm">{collab.role}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${collab.isRequired ? "bg-red-500/80" : "bg-blue-500/80"} text-white`}
                  >
                    {collab.isRequired ? "Obrigatório" : "Opcional"}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-white/80 text-sm">Valor Sugerido:</label>
                    <span className="text-green-300 font-semibold">
                      R$ {collab.suggestedValue.toLocaleString("pt-BR")}
                    </span>
                  </div>

                  <div>
                    <label className="text-white/80 text-sm block mb-1">Seu Valor:</label>
                    <input
                      type="number"
                      value={collab.currentValue}
                      onChange={(e) => updateCollaboratorValue(collab.id, Number(e.target.value))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white/90 focus:border-blue-300/50"
                      placeholder="Digite o valor desejado"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-white/70 text-sm">Total Mensal</p>
                <p className="text-2xl font-bold text-green-300">R$ {totalCollaboratorsCost.toLocaleString("pt-BR")}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-white/70 text-sm">Total do Projeto (12 meses)</p>
                <p className="text-2xl font-bold text-blue-300">R$ {projectTotal.toLocaleString("pt-BR")}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-white/70 text-sm">Total com Lucro</p>
                <p className="text-2xl font-bold text-green-300">R$ {finalTotal.toLocaleString("pt-BR")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Exigências Técnicas */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h3 className="text-white/90 text-xl font-semibold mb-6">Exigências Técnicas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technicalRequirements.map((req, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0"></div>
                <span className="text-white/80 text-sm">{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Margem de Lucro e Estratégia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-white/90 text-xl font-semibold mb-6">Margem de Lucro</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-white/90">Percentual:</label>
                <input
                  type="number"
                  value={profitMargin}
                  onChange={(e) => setProfitMargin(Number(e.target.value))}
                  className="w-20 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white/90 focus:border-blue-300/50"
                />
                <span className="text-white/90">%</span>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-white/70 text-sm">Valor do Lucro</p>
                <p className="text-xl font-bold text-green-300">R$ {profit.toLocaleString("pt-BR")}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-white/90 text-xl font-semibold mb-6">Estratégia de Licitação</h3>
            <div className="space-y-4">
              <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                <h4 className="text-orange-300 font-semibold mb-2">Valor Agressivo Sugerido</h4>
                <p className="text-3xl font-bold text-orange-300">R$ {aggressiveValue.toLocaleString("pt-BR")}</p>
                <p className="text-white/70 text-sm mt-2">
                  Este valor representa 15% abaixo do seu custo total, sendo uma estratégia agressiva para ganhar a
                  licitação.
                </p>
              </div>
              <div className="text-xs text-white/60">
                <p>• Margem reduzida para competitividade</p>
                <p>• Recomendado para licitações estratégicas</p>
                <p>• Considere os riscos antes de aplicar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
