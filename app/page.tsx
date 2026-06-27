import Link from "next/link";

   export default function Home() {
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
 <main>
    <div className="flex flex-col items-center justify-center mt-16 px-4 space-y-12">
  
      <div className="flex flex-wrap items-center justify-center gap-6 text-5xl font-extrabold leading-tight text-gray-900">
        <span>A</span>
        <span className="relative px-6 oval-anim">Melhor</span>
        <span>Viagem de Formatura</span>
      </div>
  
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        <div className="bg-cyan-400 text-black text-3xl font-bold px-10 py-5 rounded-xl pulse-box shadow-xl">
          do Brasil
        </div>
        <div className="w-[240px] h-[150px] rounded-[50%/40%] overflow-hidden float-img shadow-xl">
          <img src="./img/oculos.jpg" alt="Foto de formatura" className="w-full h-full object-cover" />
        </div>
      </div>
      
    </div>
  </main>


  <div className="relative w-full max-w-md mx-auto mt-10">

   <Link href="https://youtu.be/wOSvG-G-bNw?si=Wx60MawieyK0J72h">
  <button id="btnPlay"
    className=" overflow-hidden float-img shadow-xl absolute inset-0 m-auto w-16 h-16 bg-[#FF00AE] bg-opacity-80 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 mt-72">
    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  </button>
  </Link>
</div>

  <img src="./img/festa (1).png" alt="imagem de festa em Floripa" className="w-full h-full object-cover"/>


   <div className="bg-gray-100 mt-10 mb-10 ">
    <h1 className="text-6xl font-bold text-center text-purple-600 ">
    Viagem com Fly Form
  </h1>

  <div className=" mb-10">
    <img src="./img/festa1.jpg" alt="Festa 1"
      className="w-72 h-96 object-cover rounded-2xl shadow-md ml-32 mt-10  overflow-hidden float-img shadow-xl"/>

    <img src="./img/festa2.jpg" alt="Festa 2"
      className="w-72 h-96 object-cover rounded-2xl shadow-md -mt-82 ml-82 overflow-hidden float-img shadow-xl" />

    <img src="./img/festa3.jpg" alt="Festa 3"
      className="w-72 h-96 object-cover rounded-2xl shadow-md -mt-72 ml-[500px] overflow-hidden float-img shadow-xl"/>
  </div>
  </div>
  

    <div className="flex justify-center">
    <div className="relative">
      <div className="bg-pink-500 rounded-2xl p-6 w-86 h-96 text-white relative -mt-[480px] ml-[800px]">
        <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between p-2 text-white">
          <span> ✰ ✰ ✰ ✰ ✰ ✰ ✰ ✰ ✰ ✰ ✰ ✰ ✰ ✰ ✰ ✰ ✰ ✰ </span>
        </div>
        <div className="bg-purple-600 rounded-2xl p-6 w-72 h-82 shadow-lg -ml-20 mt-20">
          <p className="text-4xl font-bold text-center leading-snug mt-12">
            A melhor <br />agência de <br />formatura
          </p>
        </div>
      </div>
    </div>
  </div>


<div className="bg-[#6935DE] text-white min-h-screen flex items-center justify-center">
 <div className="max-w-7xl mx-auto px-6 py-12 w-full">
      <h1 className="text-4xl font-bold mb-4">
        NOSSOS <span className="bg-lime-400 text-black px-3 py-1 rounded-md">DESTINOS</span>
      </h1>
      <p className="text-lg max-w-2xl leading-relaxed mb-10">
        Das melhores viagens de formatura, até passeios para grupos escolares, familiares e de amigos,
        com a Fly você descobre destinos incríveis com uma programação completa de atividades. Tudo isso
        com a melhor monitoria do Brasil!
      </p>
      <div className="relative w-full h-[600px] overflow-hidden float-img shadow-xl">
        <div className="absolute top-0 left-0 w-full md:w-1/2 p-2">
          <div className="bg-white rounded-xl overflow-hidden text-black shadow-lg">
            <div className="relative">
              <img src="img/disney.png" alt="Disney" className="w-full h-64 object-cover " />
              <span className="absolute top-2 left-2 bg-pink-600 text-white text-sm px-3 py-1 rounded-full font-semibold">Estudantes e Grupos</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Destinos Internacionais</h3>
              <p className="mt-2 text-sm">
                Roteiros incríveis para formandos ou grupos familiares.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full md:w-1/2 p-2 overflow-hidden float-img shadow-xl">
          <div className="bg-white rounded-xl overflow-hidden text-black shadow-lg">
            <div className="relative">
              <img src="img/festa.png" alt="Grupo Ensino Médio" className="w-full h-64 object-cover " />
              <span className="absolute top-2 left-2 bg-pink-600 text-white text-sm px-3 py-1 rounded-full font-semibold">Ensino Médio</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Fly Floripa</h3>
              <p className="mt-2 text-sm">
                8 dias e 7 noites de muito calor, emoção e diversão na Ilha da Magia que ficarão para sempre na sua memória.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  


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