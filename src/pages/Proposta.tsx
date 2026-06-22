import { Nav } from "@/components/proposta/Nav";
import { Hero } from "@/components/proposta/Hero";
import { Quote } from "@/components/proposta/Quote";
import { SobreNos } from "@/components/proposta/SobreNos";
import { NossaSolucao } from "@/components/proposta/NossaSolucao";
import { Casos } from "@/components/proposta/Casos";
import { Escopo } from "@/components/proposta/Escopo";
import { Servicos } from "@/components/proposta/Servicos";
import { Implementacao } from "@/components/proposta/Implementacao";
import { Metas } from "@/components/proposta/Metas";
import { Garantia } from "@/components/proposta/Garantia";
import { Investimento } from "@/components/proposta/Investimento";
import { Passos } from "@/components/proposta/Passos";
import { CtaFinal } from "@/components/proposta/CtaFinal";

const Proposta = () => {
  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }} className="bg-black proposta-page">
      <Nav />
      <Hero />
      <Quote />
      <SobreNos />
      <NossaSolucao />
      <Casos />
      <Escopo />
      <Servicos />
      <Implementacao />
      <Metas />
      <Garantia />
      <Investimento />
      <Passos />
      <CtaFinal />
    </div>
  );
};

export default Proposta;
