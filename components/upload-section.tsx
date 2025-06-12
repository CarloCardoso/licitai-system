"use client"

import type React from "react"

import { useRef } from "react"
import { Upload, FileText, ImageIcon, FileCheck, TrendingUp, BarChart3 } from "lucide-react"

interface UploadSectionProps {
  onFileUpload: (file: File) => void
  onAnalyze: () => void
  uploadedFile: File | null
}

export function UploadSection({ onFileUpload, onAnalyze, uploadedFile }: UploadSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onFileUpload(file)
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 p-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-300 tracking-wider">LICITAI</h1>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-4">
        <div className="mb-3">
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 max-w-md">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FileCheck className="w-12 h-12 text-blue-300" />
              <TrendingUp className="w-12 h-12 text-green-300" />
              <BarChart3 className="w-12 h-12 text-yellow-300" />
            </div>
            <h3 className="text-white/90 text-center text-lg font-semibold mb-2">Análise Inteligente de Licitações</h3>
            <p className="text-white/70 text-center text-sm">
              Faça upload do edital e obtenha análise completa com custos, viabilidade e estratégias
            </p>
          </div>
        </div>

        <div className="w-full max-w-md bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center">
          <div className="mb-6">
            <Upload className="w-16 h-16 text-white/80 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white/90 mb-2">Upload da Licitação</h2>
            {uploadedFile ? (
              <div className="flex items-center justify-center space-x-2 text-green-300">
                {uploadedFile.type.includes("pdf") ? (
                  <FileText className="w-5 h-5" />
                ) : (
                  <ImageIcon className="w-5 h-5" />
                )}
                <span className="text-sm">{uploadedFile.name}</span>
              </div>
            ) : (
              <p className="text-white/60">Selecione um arquivo PDF ou imagem</p>
            )}
          </div>

          <input ref={fileInputRef} type="file" accept=".pdf,image/*" onChange={handleFileSelect} className="hidden" />

          <button
            onClick={handleUploadClick}
            className="w-full bg-blue-500/80 hover:bg-blue-600/80 text-white font-medium py-2 px-4 rounded-md mb-4 transition-colors"
          >
            {uploadedFile ? "Alterar Arquivo" : "Selecionar Arquivo"}
          </button>
        </div>

        {uploadedFile && (
          <button
            onClick={onAnalyze}
            className="bg-green-500/80 hover:bg-green-600/80 text-white font-semibold px-12 py-4 text-xl rounded-md transition-colors"
          >
            Analisar Licitação
          </button>
        )}
      </div>
    </div>
  )
}
