import Link from "next/link";

export default function Blog() {
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



            <div className="flex flex-col items-center justify-center h-[500px] px-4 -mt-32">



                <div className="bg-gradient-to-r from-purple-700 to-fuchsia-500 px-12 py-3 rounded-full -mt-32">
                    <span className="text-white font-bold uppercase tracking-wider text-lg -mt-32">
                        Blog da Flyform
                    </span>
                </div>
                <h2 className="-mt-32 text-[80px] md:text-[50px]  text-[#23005A] leading-none">
                    #Flyform
                </h2>


            </div>


 
  <div className="max-w-7xl h-[500px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-32">

    <article className="bg-white rounded-[20px] overflow-hidden shadow-lg">
      <div className="relative">
        <img src="/img/festa5.webp"alt=""  className="w-full h-[320px] object-cover"/>
          

        <span
          className="absolute top-8 right-8 bg-purple-600 text-white px-3 py-2 rounded-full text-xl font-medium"
        >
          Dicas de Viagem
        </span>
      </div>

      <div className="p-4">
       

        <p className="text-zinc-500 text-xl leading-relaxed">
         Porto Seguro ou Florianópolis? Conheça as diferenças e escolha sua viagem de formatura
        </p>
      </div>
    </article>


     <article className="bg-white rounded-[20px] overflow-hidden shadow-lg">
      <div className="relative">
        <img src="/img/festa6.webp"alt=""  className="w-full h-[320px] object-cover"/>
          

        <span
          className="absolute top-8 right-8 bg-purple-600 text-white px-3 py-2 rounded-full text-xl font-medium"
        >
          Floripa
        </span>
      </div>

      <div className="p-4">
       

        <p className="text-zinc-500 text-xl leading-relaxed">
De Fly Floripa a Floripa Festival: como nasceu a maior viagem de formatura de Florianópolis        </p>
      </div>
    </article>



        <article className="bg-white rounded-[20px] overflow-hidden shadow-lg">
      <div className="relative">
        <img src="/img/festa7.webp"alt=""  className="w-full h-[320px] object-cover"/>
          

        <span
          className="absolute top-8 right-8 bg-purple-600 text-white px-3 py-2 rounded-full text-xl font-medium"
        >
          Floripa
        </span>
      </div>

      <div className="p-4">
       

        <p className="text-zinc-500 text-xl leading-relaxed">
Arena Floripa: a estrutura de praia exclusiva em viagem de formatura que só o Floripa Festival oferece        </p>
      </div>
    </article>


  <article className="bg-white rounded-[20px] overflow-hidden shadow-lg">
      <div className="relative">
        <img src="/img/festa8.webp"alt=""  className="w-full h-[320px] object-cover"/>
          

        <span
          className="absolute top-8 right-8 bg-purple-600 text-white px-3 py-2 rounded-full text-xl font-medium"
        >
          Floripa
        </span>
      </div>

      <div className="p-4">
       

        <p className="text-zinc-500 text-xl leading-relaxed">
FlyForm Floripa: As melhores Atrações Para a Sua Viagem de Formatura em Florianópolis </p>
      </div>
    </article>



  </div>

    <div className="flex flex-col items-center justify-center h-[500px] px-4">
    
    <div className="bg-gradient-to-r from-purple-700 to-fuchsia-500 px-12 py-3 rounded-full -mt-32">
      <span className="text-white font-bold uppercase tracking-wider text-lg -mt-32">
        +Atrações
      </span>
    </div>

    <h2 className="mt-8 text-[80px] md:text-[50px] font-bold text-[#23005A] leading-none">
    Artistas que já passaram
pelos palcos do Floripa Festival
    </h2>

  </div>


 <div className="max-w-7xl mx-auto p-4">
    <div className="grid grid-cols-6 gap-3 -mt-56">

        <img src="/img/foto9.jpg" className="w-full h-52 object-cover rounded-3xl" alt=""></img>
        <img src="/img/foto10.jpg" className="w-full h-52 object-cover rounded-3xl" alt=""></img>
        <img src="/img/foto11.jpg" className="w-full h-52 object-cover rounded-3xl" alt=""></img>
        <img src="/img/foto12.jpg" className="w-full h-52 object-cover rounded-3xl" alt=""></img>
        <img src="/img/foto13.jpg" className="w-full h-52 object-cover rounded-3xl" alt=""></img>
        <img src="/img/foto14.jpg" className="w-full h-52 object-cover rounded-3xl" alt=""></img>

        

    </div>
</div>


 <footer className="bg-[#FF00AE] text-white text-sm mt-10">
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

