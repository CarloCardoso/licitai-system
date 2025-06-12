"use client"

import type React from "react"

import { useState } from "react"

interface LoginFormProps {
  onLogin: () => void
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "licitai" && password === "12345678") {
      onLogin()
    } else {
      setError("Usuário ou senha incorretos")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex items-center justify-between">
        <div className="flex-1 flex justify-center">
          <h1 className="text-8xl font-bold text-blue-300 tracking-wider">LICITAI</h1>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-white mb-2">
                  Usuário
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder:text-white/60"
                  placeholder="Digite seu usuário"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-white mb-2">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder:text-white/60"
                  placeholder="Digite sua senha"
                />
              </div>
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-md p-3">
                  <p className="text-white text-sm">{error}</p>
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
