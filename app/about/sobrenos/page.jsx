
import Link from "next/link";



 export default function Sobre() {
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


      <section className="w-full bg-[#FFFFF]">
  
  <div className="flex flex-col items-center justify-center h-[500px] px-4">
    
    <div className="bg-gradient-to-r from-purple-700 to-fuchsia-500 px-12 py-3 rounded-full -mt-32">
      <span className="text-white font-bold uppercase tracking-wider text-lg -mt-32">
        Sobre Nós
      </span>
    </div>

    <h2 className="mt-8 text-[80px] md:text-[50px] font-extrabold text-[#23005A] leading-none">
      A Flyform
    </h2>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 -mt-32">
    
    <div className="h-[230px] overflow-hidden">
      <img
        src="/img/viagem.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    <div className="h-[230px] overflow-hidden">
      <img
        src="/img/pulseira.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    <div className="h-[230px] overflow-hidden">
      <img
        src="/img/turma.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    <div className="h-[230px] overflow-hidden">
      <img
        src="/img/forma.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    <div className="h-[230px] overflow-hidden">
      <img
        src="/img/resort.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    <div className="h-[230px] overflow-hidden">
      <img
        src="/img/colorfest.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>



<section className="bg-[#F5F5F5] py-20">
  

    <div className="grid lg:grid-cols-2 gap-14 items-center ml-[500px]">

      <div>

        <h2 className="text-5xl font-bold text-[#5A168F] mb-10">
          A História da FlyForm
        </h2>

        <div className="space-y-8 text-[#1D124B] text-xl leading-relaxed">
          <p>
            Há mais de 17 anos, a 
            <span className="font-bold">Fly Form</span>
            é referência no setor de turismo estudantil e especialista em
            fazer as melhores viagens de formatura do Brasil.
          </p>

          <p>
            Transformando o turismo no Brasil, realizamos sonhos com
            segurança e excelência em cada destino, oferecendo as melhores
            experiências.
          </p>
        </div>

       
      
   

    </div>

  </div>
</section>


<section className="bg-[#32003F] py-20">
  <div className="max-w-5xl mx-auto bg-[#F5F5F5] px-8 py-16">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#3F148C] mb-6">
        Só na Fly tem
      </h2>

      <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
        Com uma programação personalizada para cada destino Fly, com eventos,
        passeios e atividades destinadas ao grupo, temos hospedagem e transporte
        exclusivos, para que ninguém tenha que se preocupar com nada além de se
        divertir na melhor viagem de formatura!
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="bg-white rounded-3xl overflow-hidden">
        <img
          src="/img/indetificacao.jpg"
          alt=""
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">
            Smart Pass Fly
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Pulseira de identificação, com controle de acesso e informações do
            passageiro.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden">
        <img
          src="/img/posto.webp"
          alt=""
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">
            Suporte Total
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Visita médica diária no hotel e monitores enfermeiros de plantão
            24h por dia.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden">
        <img
          src="/img/pais.webp"
          alt=""
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">
            Seguro Viagem
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Assistência médica completa e cobertura odontológica inclusas no
            pacote.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden">
        <img
          src="/img/monitores.webp"
          alt=""
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">
            Monitores 24h
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Equipe de coordenadores presentes do embarque ao desembarque da
            viagem.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden">
        <img
          src="/img/hoteis.webp"
          alt=""
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">
            Melhores Hotéis
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Bem localizados e exclusivos para os formandos aproveitarem com
            conforto e segurança.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden">
        <img
          src="/img/transporte.webp"
          alt=""
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">
            Transporte Exclusivo
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Veículos de transporte e apoio 24 horas com acompanhamento da
            monitoria.
          </p>
        </div>
      </div>

    </div>
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

