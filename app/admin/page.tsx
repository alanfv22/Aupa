"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

// Simple admin panel for viewing form submissions
// In production, this would connect to a database

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")

  // Mock submissions data - in production this would come from a database
  const mockSubmissions = [
    {
      id: 1,
      childName: "Lucas García",
      childAge: 8,
      parentName: "María García",
      email: "maria@example.com",
      phone: "+54 11 1234-5678",
      message: "Interesados en actividades acuáticas",
      submittedAt: "2024-01-15T10:30:00",
    },
    {
      id: 2,
      childName: "Sofia Fernández",
      childAge: 10,
      parentName: "Pablo Fernández",
      email: "pablo@example.com",
      phone: "+54 11 8765-4321",
      message: "Consulta sobre equinoterapia",
      submittedAt: "2024-01-14T14:15:00",
    },
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check - in production use proper authentication
    if (password === "aupa2024") {
      setIsAuthenticated(true)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F8F6FF] flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/356230858_626495576093895_7311191561093851770_n.-63GT8MfUOziafmRJSLe1zozYVL2iQ1.jpg"
              alt="AUPA Logo"
              width={80}
              height={80}
              className="mx-auto mb-4 rounded-full"
            />
            <CardTitle className="text-2xl font-heading">Panel de Administración</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingrese la contraseña"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Ingresar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F6FF]">
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/356230858_626495576093895_7311191561093851770_n.-63GT8MfUOziafmRJSLe1zozYVL2iQ1.jpg"
              alt="AUPA Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1 className="text-xl font-heading font-bold">AUPA Admin</h1>
          </div>
          <Link href="/">
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Volver al sitio
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
            Consultas Recibidas
          </h2>
          <p className="text-muted-foreground">
            Total de consultas: {mockSubmissions.length}
          </p>
        </div>

        <div className="grid gap-4">
          {mockSubmissions.map((submission) => (
            <Card key={submission.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      {submission.childName} ({submission.childAge} años)
                    </h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      <strong>Padre/Madre:</strong> {submission.parentName}
                    </p>
                    <p className="text-muted-foreground text-sm mb-1">
                      <strong>Email:</strong> {submission.email}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>Teléfono:</strong> {submission.phone}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-2">
                      <strong>Mensaje:</strong>
                    </p>
                    <p className="text-foreground bg-muted/50 p-3 rounded-lg text-sm">
                      {submission.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Recibido: {new Date(submission.submittedAt).toLocaleDateString("es-AR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4 pt-4 border-t">
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => window.open(`https://wa.me/${submission.phone.replace(/\D/g, "")}`, "_blank")}
                  >
                    Contactar por WhatsApp
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(`mailto:${submission.email}`, "_blank")}
                  >
                    Enviar Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
