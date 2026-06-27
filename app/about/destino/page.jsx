
import Link from "next/link";

 export default function Destino() {
  return (
    <header className="bg-white py-6">


      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8">

        <img src="/img/logofly.png" alt="Fly Form" className="h-32" />

        <ul className="hidden md:flex gap-10 text-2xl font-medium">
             <li>
            <Link href="/">Home</Link>
          </li>

          <li>
           
            <Link href="/about/destino">Destinos</Link>
          </li>

          <li>
            <Link href="/about/sobrenos">Sobre Nós</Link>
          </li>

          <li>
            <Link href="/about/blog">Blog</Link>
          </li>
        </ul>

        <button className="bg-fuchsia-500 text-white px-8 py-3 rounded-xl text-xl shadow-md hover:scale-105 duration-300">
          Cadastre-se
        </button>

      </nav>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">


          <div>


            <div className="inline-block px-10 py-3 rounded-full bg-gradient-to-r from-purple-700 to-pink-500 text-white font-bold text-xl -mt-[500px]">
              A #01 DE FLORIPA
            </div>


            <h1 className="text-3xl lg:text-4xl font-black leading-tight text-black">
              A melhor viagem de
              <br />
              formatura do Brasil para os
              <br />

              <span className="bg-purple-600 text-white px-3">
                formandos do 3º ano
              </span>

              <br />
              do Ensino Médio
            </h1>

           
            <p className="mt-8 text-gray-600 text-xl max-w-2xl leading-relaxed">
              Desfrute de 8 dias e 7 noites inesquecíveis em Florianópolis,
              a cidade mais segura do país, com paisagens deslumbrantes.
            </p>

            <button className="mt-10 bg-lime-400 hover:bg-lime-300 transition-all text-black font-bold text-2xl px-10 py-5 rounded-full shadow-[0_0_0_12px_rgba(217,255,0,0.25)]">
              VEM COM A FLYFORM →
            </button>

          </div>

          <div className="relative h-[600px] hidden lg:block -mt-32">

           

            <div className="absolute top-32 right-0">
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-pink-500 rounded-3xl "></div>

              <img src="/img/tinta.jpg" alt="" className="relative w-[300px]  rounded-3xl object-cover" />
            </div>

  
             <img src="/img/piscina.jpg" alt="" className="absolute bottom-0 left-10 w-[220px] rounded-3xl shadow-lg ml-32"/>

            
            <div className="absolute bottom-28 left-60 text-lime-400 text-[120px] font-black rotate-12">
              *
            </div>

          </div>

        </div>
      </div>


      <section className="min-h-screen bg-gradient-to-b from-purple-800 to-purple-900 flex items-center justify-center px-6">
  <div className="max-w-6xl mx-auto text-center">

   

   
    <h1 className="text-white font-bold text-3xl md:text-5xl leading-tight">
      Vem pro primeiro e maior
      <span className="bg-yellow-300 text-purple-800 px-2">
        festival estudantil de Floripa!
      </span>
    </h1>

  
    <p className="mt-10 text-white text-lg md:text-3xl leading-relaxed max-w-4xl mx-auto">
      8 dias com as melhores festas temáticas, shows com atrações
      escolhidas por você e a programação mais completa de Floripa.
    </p>


    <h2 className="mt-12 text-yellow-300 text-3xl md:text-5xl font-extrabold">
      Flyform
    </h2>


    <p className="mt-8 text-white text-xl md:text-3xl leading-relaxed">
      A maior collab do Brasil em viagem de formatura.
      <br />
      Se liga no que te espera!
    </p>

  </div>
</section>

<section className="bg-[#f3f3f3] py-20 px-6">
  
  <div className="text-center mb-16">
    <h2 className="text-5xl font-bold text-black">
      O Floripa Festival
    </h2>

    <div className="inline-block bg-fuchsia-600 px-6 py-2 mt-2">
      <span className="text-white font-bold text-5xl">
        não é só festa
      </span>
    </div>
  </div>

 
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

    <article className="bg-white rounded-[40px] overflow-hidden shadow-lg">
      <div className="relative">
        <img src="/img/volei.jpg"alt=""  className="w-full h-[320px] object-cover"/>
          

        <span
          className="absolute top-8 right-8 bg-purple-600 text-white px-8 py-3 rounded-full text-xl font-medium"
        >
          Atividades
        </span>
      </div>

      <div className="p-8">
        <h3 className="text-4xl font-bold text-zinc-900 mb-4">
          Arena Festival
        </h3>

        <p className="text-zinc-500 text-xl leading-relaxed">
          Esportes na praia com futemesa, futevôlei,
          beach tennis, aulas de dança, música ao vivo,
          área de descanso, área de alimentação, acesso ao mar!
          A primeira arena de praia de Floripa fechada só para
          formandos. Diversão e segurança em um só lugar!
        </p>
      </div>
    </article>

    <article className="bg-white rounded-[40px] overflow-hidden shadow-lg">
      <div className="relative">
        <img src="/img/tamar.jpg" alt="" className="w-full h-[320px] object-cover"  />
          
        <span
          className="absolute top-8 right-8 bg-lime-400 text-black px-8 py-3 rounded-full text-xl font-medium"
        >
          Fly Extreme
        </span>
      </div>

      <div className="p-8">
        <h3 className="text-4xl font-bold text-zinc-900 mb-4">
          Trekking + Projeto Tamar
        </h3>

        <p className="text-zinc-500 text-xl leading-relaxed">
          Além das festas, o Trekking é uma experiência
          incrível para quem quer conhecer as piscinas
          naturais de Floripa. E no Projeto Tamar você
          conhece o trabalho de preservação das tartarugas
          marinhas de Floripa!
        </p>
      </div>
    </article>

    <article className="bg-white rounded-[40px] overflow-hidden shadow-lg">
      <div className="relative">
        <img  src="/img/betocarrero.jpg" alt="Beto Carrero" className="w-full h-[320px] object-cover" />
         
        <span
          className="absolute top-8 right-8 bg-fuchsia-500 text-white px-8 py-3 rounded-full text-xl font-medium"
        >
          Aventura
        </span>
      </div>

      <div className="p-8">
        <h3 className="text-4xl font-bold text-zinc-900 mb-4">
          Visita ao Beto Carrero World
        </h3>

        <p className="text-zinc-500 text-xl leading-relaxed">
          Conheça o Beto Carrero World, o maior parque
          temático da América Latina com mais de 60 atrações,
          áreas temáticas e aventuras!
        </p>
      </div>
    </article>

  </div>
</section>

<footer className="bg-[#FF00AE] text-white text-sm">
  <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
    

    <div className="space-y-4">
    
      <p className="font-semibold">A melhor viagem de formatura do Brasil</p>
      <p> Av. Brasil, 1163 - Balneário Camburiú, SC - CEP 8845-167</p>
      <p> Contato: (49) 3377-3575</p>
      <div className="pt-2">
        <p>Horário de atendimento:</p>
        <p>Segunda à sexta das 09h às 18h</p>
      </div>
    </div>

    <div>
      <h3 className="font-bold mb-2">Viagens</h3>
      <ul className="space-y-1">
        <li><Link href="#" className="hover:underline">Fly Floripa</Link></li>
        <li><Link href="#" className="hover:underline">9º Fly</Link></li>
        <li><Link href="#" className="hover:underline">FlySchool Break</Link></li>
        <li><Link href="#" className="hover:underline">Roteiros Pedagógicos</Link></li>
        <li><Link href="#" className="hover:underline">Viagens Internacionais</Link></li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-2">Mais</h3>
      <ul className="space-y-1">
        <li><Link href="#" className="hover:underline">Área do Cliente</Link></li>
        <li><Link href="#" className="hover:underline">Blog da Fly</Link></li>
        <li><Link href="#" className="hover:underline">Curso de Monitores</Link></li>
        <li><Link href="#" className="hover:underline">Entre em Contato</Link></li>
        <li><Link href="#" className="hover:underline">Política de Privacidade</Link></li>
        <li><Link href="#" className="hover:underline">Trabalhe Conosco</Link></li>
      </ul>
    </div>
  </div>

  <div className="bg-[#9FE437] text-center py-2 text-xs text-white font-medium">
    2026 © Copyright | Fly Formaturas – CNPJ: 57.066.653/0001-80 – Todos os direitos reservados.
  </div>
</footer>


    </header>
  );
}

