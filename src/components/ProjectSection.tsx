"use client"
import { useGSAP } from "@gsap/react"
import Project from "./ui/Project"
import { ProjectProps } from "./ui/Project"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
const testProject: ProjectProps[] = [
  {
    project: {
      title: "Meu Projeto Incrível",
      content: [
        "Criei uma dashboard intuitiva e responsiva para análise de dados de vendas em tempo real.",
        "Utilizando gráficos dinâmicos e filtros personalizados, o projeto permite uma visualização clara de métricas como faturamento, produtos mais vendidos e desempenho por região.",
        "A interface foi desenvolvida com foco em usabilidade e performance.Melhorar a experiência do usuário, oferecendo uma interface clara, intuitiva e acessível em diferentes dispositivos.",
        "Aumentar a eficiência na tomada de decisões, fornecendo dados organizados, visualmente compreensíveis e em tempo real.",
        "Desenvolver uma solução funcional e escalável, aplicando boas práticas de desenvolvimento e design para garantir manutenção e evolução futuras.",
      ],
      image: "/project-plan.jpg",
      url: "https://meuprojetoexemplo.com",
      demo: "https://vercel.com",
      tags: [
        "React",
        "TypeScript",
        "UI/UX",
        "Node",
        "MongoDB",
        "Tailwind",
        "Prisma",
        "TRPC",
      ],
    },
    isInverted: false,
  },
  {
    project: {
      title: "E-commerce Inteligente",
      content: [
        "Desenvolvi uma plataforma de e-commerce completa com carrinho de compras, controle de estoque e sistema de pagamentos integrado.",
        "Implementei recomendação de produtos baseada no comportamento do usuário, otimizando a taxa de conversão.",
        "A interface foi projetada com foco na responsividade e acessibilidade, proporcionando uma experiência fluida em dispositivos móveis e desktops.",
        "Garantir escalabilidade e segurança na aplicação, utilizando autenticação JWT, proteção contra ataques CSRF e boas práticas de arquitetura de software.",
      ],
      image: "/smart-ecommerce.jpg",
      url: "https://ecommerceinteligente.com",
      demo: "https://ecommerce-demo.vercel.app",
      tags: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "Tailwind",
        "PostgreSQL",
        "Zustand",
        "NextAuth",
      ],
    },
    isInverted: false,
  },
  {
    project: {
      title: "Plataforma de Gestão Financeira",
      content: [
        "Criei uma aplicação para controle financeiro pessoal e empresarial, com dashboards interativos e categorização automática de despesas.",
        "Integração com APIs bancárias para importação automática de transações, melhorando a praticidade e confiabilidade dos dados.",
        "Utilizei gráficos e alertas para ajudar usuários a manter o orçamento em dia e tomar decisões financeiras mais conscientes.",
        "Implementei arquitetura modular e testes automatizados para garantir qualidade, manutenibilidade e evolução contínua da plataforma.",
      ],
      image: "/finance-dashboard.jpg",
      url: "https://gestaofinanceira.com",
      demo: "https://finance-demo.vercel.app",
      tags: [
        "React",
        "TypeScript",
        "Chart.js",
        "Express",
        "PostgreSQL",
        "Tailwind",
        "Jest",
        "Docker",
      ],
    },
    isInverted: false,
  },
]
gsap.registerPlugin(ScrollTrigger)

export default function ProjectSection() {
  return (
    <section className="flex flex-col w-full" id="Projetos">
      <div className="flex justify-end items-center mb-10">
        <h1 className="text-6xl font-mono font-extrabold text-neutral-100 shrink-0">
          Projetos
        </h1>
      </div>
      {testProject.map((proj, index) => (
        <div className="not-last:h-screen py-16" key={index}>
          <Project project={proj.project} isInverted={index % 2 !== 0} />
        </div>
      ))}
    </section>
  )
}
