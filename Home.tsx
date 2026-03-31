import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BarChart3,
  Zap,
  TrendingUp,
  Users,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  Check,
} from "lucide-react";
import { useState } from "react";

/**
 * Design System: Professional Craft with Purple & Cyan
 * Color Palette: Roxo sofisticado (#3B2667) + Ciano elegante (#06B6D4)
 * Typography: Merriweather (display) + Lato (body)
 * Aesthetic: Sophisticated, professional, modern
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar envio de email
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="font-display text-xl font-bold text-gray-900">
              Parisotto Tech
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-600 hover:text-purple-600 transition">
              Home
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-purple-600 transition">
              Portfólio
            </a>
            <a href="#planos" className="text-gray-600 hover:text-purple-600 transition">
              Planos
            </a>
            <a href="#reviews" className="text-gray-600 hover:text-purple-600 transition">
              Reviews
            </a>
            <a href="#contato" className="text-gray-600 hover:text-purple-600 transition">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663499358601/2GJs8xVgdX3HtSYcNRX6TL/hero-dashboard-jBUVBEYKr5DoFFtfCLqWke.webp"
            alt="Dashboard background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-cyan-100 rounded-full">
                <span className="text-cyan-700 text-sm font-semibold">
                  Transforme dados em decisões
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Análise de Dados que Impulsiona Resultados
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Especialista em dashboards, BI e Excel avançado. Transformo dados
                complexos em insights acionáveis que impulsionam o crescimento do
                seu negócio.
              </p>
              <div className="flex gap-4">
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
                  onClick={() => {
                    document
                      .getElementById("contato")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Começar Agora <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg"
                >
                  Ver Portfólio
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663499358601/2GJs8xVgdX3HtSYcNRX6TL/analytics-illustration-Rf8ykJm4wEwDHFEkk5XP8D.webp"
                alt="Analytics illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Serviços Especializados
            </h2>
            <p className="text-xl text-gray-600">
              Soluções completas em análise de dados e inteligência de negócios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Dashboards Interativos",
                description:
                  "Visualizações dinâmicas que transformam dados em insights claros e acionáveis.",
              },
              {
                icon: TrendingUp,
                title: "Análise de Dados",
                description:
                  "Análises profundas para identificar padrões, tendências e oportunidades.",
              },
              {
                icon: Zap,
                title: "Excel Avançado",
                description:
                  "Automação, macros e modelos sofisticados para otimizar seus processos.",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="p-8 border-0 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Portfólio de Projetos
            </h2>
            <p className="text-xl text-gray-600">
              Trabalhos realizados que demonstram expertise em BI e análise de dados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Dashboard de Vendas",
                description:
                  "Sistema completo de monitoramento de vendas em tempo real com análise de performance.",
                tags: ["Power BI", "SQL", "Excel"],
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/310519663499358601/2GJs8xVgdX3HtSYcNRX6TL/portfolio-bg-8yFxSspNpoVaMeGakg5DKP.webp",
              },
              {
                title: "Análise de Churn",
                description:
                  "Modelo preditivo para identificar clientes em risco e estratégias de retenção.",
                tags: ["Python", "Análise Estatística", "Visualização"],
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/310519663499358601/2GJs8xVgdX3HtSYcNRX6TL/portfolio-bg-8yFxSspNpoVaMeGakg5DKP.webp",
              },
              {
                title: "Automação de Relatórios",
                description:
                  "Sistema automatizado de geração de relatórios mensais com atualização em tempo real.",
                tags: ["VBA", "Excel", "Automação"],
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/310519663499358601/2GJs8xVgdX3HtSYcNRX6TL/portfolio-bg-8yFxSspNpoVaMeGakg5DKP.webp",
              },
              {
                title: "BI de Recursos Humanos",
                description:
                  "Dashboard integrado para análise de dados de RH, turnover e produtividade.",
                tags: ["Tableau", "SQL", "RH Analytics"],
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/310519663499358601/2GJs8xVgdX3HtSYcNRX6TL/portfolio-bg-8yFxSspNpoVaMeGakg5DKP.webp",
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg"
            >
              Ver Todos os Projetos
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Planos e Preços
            </h2>
            <p className="text-xl text-gray-600">
              Soluções flexíveis adaptadas ao tamanho do seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "R$ 1.500",
                period: "/projeto",
                description: "Para projetos pequenos e pontuais",
                features: [
                  "Análise de dados básica",
                  "Dashboard simples",
                  "Até 2 revisões",
                  "Suporte por email",
                ],
                highlighted: false,
              },
              {
                name: "Professional",
                price: "R$ 3.500",
                period: "/projeto",
                description: "Para projetos complexos e contínuos",
                features: [
                  "Análise avançada de dados",
                  "Múltiplos dashboards",
                  "Até 5 revisões",
                  "Suporte prioritário",
                  "Documentação completa",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Sob consulta",
                period: "/mês",
                description: "Para soluções customizadas e contínuas",
                features: [
                  "Suporte dedicado",
                  "Análises customizadas",
                  "Integração de sistemas",
                  "Treinamento da equipe",
                  "Revisões ilimitadas",
                ],
                highlighted: false,
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-8 border-0 transition-all ${
                  plan.highlighted
                    ? "shadow-xl ring-2 ring-purple-600 scale-105"
                    : "shadow-sm hover:shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <div className="mb-4 inline-block px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                    Mais Popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <Button
                  className={`w-full mb-8 py-6 text-lg ${
                    plan.highlighted
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "border-purple-600 text-purple-600 hover:bg-purple-50"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  Contratar Agora
                </Button>
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              O que Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600">
              Feedback de empresas que transformaram seus dados em resultados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Silva",
                company: "Tech Startup XYZ",
                text: "O dashboard que a Parisotto criou transformou completamente como acompanhamos nossas métricas. Muito profissional!",
                rating: 5,
              },
              {
                name: "Marina Costa",
                company: "E-commerce Brasil",
                text: "Excelente trabalho na análise de churn. Os insights foram precisos e nos ajudaram a reter 30% mais clientes.",
                rating: 5,
              },
              {
                name: "Roberto Mendes",
                company: "Consultoria Empresarial",
                text: "Profissional altamente qualificado. Entrega dentro do prazo e com qualidade excepcional. Recomendo!",
                rating: 5,
              },
            ].map((review, idx) => (
              <Card
                key={idx}
                className="p-8 border-0 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663499358601/2GJs8xVgdX3HtSYcNRX6TL/analytics-illustration-Rf8ykJm4wEwDHFEkk5XP8D.webp"
                alt="About"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
                Sobre Parisotto Tech
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Sou um analista de dados apaixonado por transformar informações
                complexas em insights claros e acionáveis. Com experiência em
                dashboards, BI e Excel avançado, ajudo empresas a tomar decisões
                baseadas em dados.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Meu objetivo é não apenas criar relatórios, mas construir soluções
                que impulsionem o crescimento e a eficiência do seu negócio.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "50+", label: "Projetos Completos" },
                  { number: "30+", label: "Clientes Satisfeitos" },
                  { number: "5+", label: "Anos de Experiência" },
                  { number: "100%", label: "Taxa de Satisfação" },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <p className="font-display text-3xl font-bold text-purple-600">
                      {stat.number}
                    </p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600">
              Vamos conversar sobre seu próximo projeto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "contato@parisottotech.com",
              },
              {
                icon: Phone,
                label: "Telefone",
                value: "(11) 98765-4321",
              },
              {
                icon: MapPin,
                label: "Localização",
                value: "São Paulo, SP",
              },
            ].map((contact, idx) => (
              <Card
                key={idx}
                className="p-8 border-0 shadow-sm text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {contact.label}
                </h3>
                <p className="text-gray-600">{contact.value}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 md:p-12 border-0 shadow-lg max-w-2xl mx-auto">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nome
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Seu nome"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="seu@email.com"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensagem
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Conte-me sobre seu projeto..."
                  className="w-full h-32"
                  required
                />
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg">
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <span className="font-display text-lg font-bold">
                  Parisotto Tech
                </span>
              </div>
              <p className="text-gray-400">
                Transformando dados em decisões estratégicas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-cyan-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-cyan-400 transition">
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="#planos" className="hover:text-cyan-400 transition">
                    Planos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:contato@parisottotech.com" className="hover:text-cyan-400 transition">
                    Email
                  </a>
                </li>
                <li>
                  <a href="tel:+5511987654321" className="hover:text-cyan-400 transition">
                    Telefone
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Parisotto Tech. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
