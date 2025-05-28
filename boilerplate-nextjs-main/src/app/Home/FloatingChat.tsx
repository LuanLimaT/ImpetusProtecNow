"use client"
import { useState, useEffect, useRef } from "react"
import { io, type Socket } from "socket.io-client"

interface Message {
  id: string | number
  text: string
  isUser: boolean
  timestamp: string
  sender?: string
}

export default function FloatingChat() {
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Olá! Bem-vindo à ProtecNow. Sou a Luna, sua assistente virtual. Como posso ajudar você hoje?",
      isUser: false,
      timestamp: getCurrentTime(),
      sender: "system",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [atendimentoId, setAtendimentoId] = useState<string | null>(null)
  const [connected, setConnected] = useState(false)
  const [waitingForAgent, setWaitingForAgent] = useState(false)

  const socketRef = useRef<Socket | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  function getCurrentTime() {
    return new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  useEffect(() => {
    if (!chatOpen) return

    const SOCKET_SERVER_URL = "http://localhost:3001"

    if (!socketRef.current) {
      console.log("Conectando ao servidor Socket.IO:", SOCKET_SERVER_URL)

      socketRef.current = io(SOCKET_SERVER_URL, {
        transports: ["websocket", "polling"],
      })

      socketRef.current.on("connect", () => {
        console.log("Conectado ao servidor Socket.IO")
        setConnected(true)
      })

      socketRef.current.on("disconnect", () => {
        console.log("Desconectado do servidor Socket.IO")
        setConnected(false)
      })

      socketRef.current.on("message:new", (message: any) => {
        console.log("Nova mensagem recebida:", message)
        if (message.sender === "agent") {
          setWaitingForAgent(false)
          addMessage(message.content, false, message.id)
        }
      })

      socketRef.current.on("atendimento:accepted", (data: any) => {
        console.log("Atendimento aceito:", data)
        setWaitingForAgent(false)
        addMessage(
          `Um atendente está disponível para te ajudar. ${data.agentName} entrou no chat.`,
          false,
          "system-" + Date.now()
        )
      })
    }

    return () => {
      // Conexão será mantida enquanto o componente estiver montado
    }
  }, [chatOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function addMessage(text: string, isUser: boolean, id?: string | number) {
    const newMessage: Message = {
      id: id || Date.now() + Math.random(),
      text,
      isUser,
      timestamp: getCurrentTime(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  function handleSend() {
    if (inputValue.trim() === "") return

    const messageText = inputValue.trim()
    addMessage(messageText, true)
    setInputValue("")

    if (!atendimentoId && socketRef.current && connected) {
      socketRef.current.emit("atendimento:create", {
        clientName: "Visitante",
        email: "visitante@site.com",
        source: "landing-page",
      })

      socketRef.current.once("atendimento:created", (data: any) => {
        setAtendimentoId(data.id)
        setWaitingForAgent(true)

        addMessage(
          "Atendimento iniciado! Um de nossos atendentes irá te responder em breve.",
          false,
          "system-" + Date.now()
        )

        socketRef.current?.emit("message:send", {
          atendimentoId: data.id,
          content: messageText,
          sender: "client",
          clientName: "Visitante",
          clientEmail: "visitante@site.com",
        })
      })

      return
    }

    if (atendimentoId && socketRef.current) {
      socketRef.current.emit("message:send", {
        atendimentoId,
        content: messageText,
        sender: "client",
        clientName: "Visitante",
        clientEmail: "visitante@site.com",
      })
    }
  }

  return (
    <>
      <button
        onClick={() => setChatOpen((open) => !open)}
        aria-label={chatOpen ? "Fechar chat" : "Abrir chat"}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full w-16 h-16 shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 pulse"
      >
        {chatOpen ? "✕" : "💬"}
      </button>

      {chatOpen && (
        <div className="fixed bottom-28 right-6 z-50 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl w-80 h-96 flex flex-col border border-white/50">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-3xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">🤖</div>
              <div>
                <h4 className="font-semibold">Luna - Assistente ProtecNow</h4>
                <p className="text-xs text-blue-100 flex items-center gap-1">
                  <span className={`w-2 h-2 ${connected ? "bg-green-400" : "bg-red-400"} rounded-full animate-pulse`} />
                  {connected ? "Online agora" : "Conectando..."}
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-br from-slate-50 to-blue-50">
            {messages.map((message) => (
              <div key={message.id} className={`mb-4 ${message.isUser ? "text-right" : "text-left"}`}>
                <div
                  className={`inline-block p-3 rounded-2xl max-w-xs shadow-lg ${
                    message.isUser
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-white text-slate-800 border border-slate-200"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-2 ${message.isUser ? "text-blue-100" : "text-slate-500"}`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="text-left mb-4">
                <div className="inline-block p-3 rounded-2xl max-w-xs bg-white border border-slate-200 shadow-lg">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-200"></div>
                    <span className="text-slate-500 text-sm ml-2">Luna está digitando...</span>
                  </div>
                </div>
              </div>
            )}

            {waitingForAgent && (
              <div className="text-left mb-4">
                <div className="inline-block p-3 rounded-2xl max-w-xs bg-white border border-slate-200 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-slate-500 text-sm">Aguardando atendente...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-slate-200 bg-white/80 backdrop-blur-md rounded-b-3xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white/80"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl transition-all transform hover:scale-105"
              >
                ✈️
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
