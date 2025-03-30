import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ActivityIcon } from "lucide-react"


export default function WhatIDo() {
    return (
      <section className="w-full flex items-center py-14 md:py-16 lg:py-18 bg-background">
        <div className="flex justify-center px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
                <Card>
                <CardHeader className="flex flex-col items-center">
                    <ActivityIcon className="w-12 h-12 mb-4 text-blue-500" />
                    <CardTitle>Desenvolvimento Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center">
                    Crio interfaces de usuário responsivas e interativas usando React e outras tecnologias modernas de frontend.
                    </p>
                </CardContent>
                </Card>
                
                <Card>
                <CardHeader className="flex flex-col items-center">
                    <ActivityIcon className="w-12 h-12 mb-4 text-green-500" />
                    <CardTitle>Otimização de Performance</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center">
                    Melhoro o desempenho de aplicações React, garantindo carregamento rápido e experiência fluida para os usuários.
                    </p>
                </CardContent>
                </Card>
                
                <Card>
                <CardHeader className="flex flex-col items-center">
                    <ActivityIcon className="w-12 h-12 mb-4 text-purple-500" />
                    <CardTitle>Integração de APIs</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center">
                    Conecto aplicações React a backends e serviços externos, criando soluções completas e funcionais.
                    </p>
                </CardContent>
                </Card>

            </div>
        </div>
        
      </section>
    )
  }