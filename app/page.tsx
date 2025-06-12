"use client"

import { useState } from "react"
import { LoginForm } from "@/components/login-form"
import { UploadSection } from "@/components/upload-section"
import { AnalysisResult } from "@/components/analysis-result"

type AppState = "login" | "upload" | "analysis"

export default function Home() {
  const [currentState, setCurrentState] = useState<AppState>("login")
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleLogin = () => {
    setCurrentState("upload")
  }

  const handleFileUpload = (file: File) => {
    setUploadedFile(file)
  }

  const handleAnalyze = () => {
    setTimeout(() => {
      setCurrentState("analysis")
    }, 1000)
  }

  if (currentState === "login") {
    return <LoginForm onLogin={handleLogin} />
  }

  if (currentState === "upload") {
    return <UploadSection onFileUpload={handleFileUpload} onAnalyze={handleAnalyze} uploadedFile={uploadedFile} />
  }

  return <AnalysisResult />
}
