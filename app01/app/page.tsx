import Link from 'next/link';

export default function Home() {
  return (
    <div class="max-w-4xl mx-auto px-6 py-8 text-center">
      
      {/* Menu de Navegação Delicado */}
      <nav class="flex justify-center space-x-6">
        <Link href="/">início</Link>
        <Link href="/produtos">produtos</Link>
        <Link href="/sobre">sobre nós</Link>
        <Link href="/contato">contato</Link>
      </nav>

      <hr class="border-t border-accent/40 mb-12" />

      {/* Conteúdo Principal Editorial */}
      <main class="space-y-6">
        <header class="max-w-2xl mx-auto">
          <h1>ModaEstilo 2026</h1>
          <p class="mt-4 leading-relaxed">
            Bem-vindo ao nosso pequeno universo de linhas suaves, detalhes apaixonantes e silhuetas que contam histórias. Criamos coleções pensadas para trazer poesia e delicadeza ao seu guarda-roupa urbano.
          </p>
        </header>

        {/* Espaço para o Banner com mesclagem fofa de cor */}
        <div class="mt-12 flex justify-center">
          <img 
            src="/banner.jpg" 
            alt="Banner Coleção de Moda Romântica" 
            class="w-full max-w-3xl rounded-3xl mix-blend-multiply transition-transform duration-500 hover:scale-[1.01]" 
          />
        </div>

        {/* Pequeno manifesto de rodapé fofo */}
        <section class="pt-12 max-w-lg mx-auto">
          <h2 class="font-serif text-2xl font-black italic mb-2 text-muted">feito com amor</h2>
          <p class="text-sm opacity-80">
            cada peça é selecionada com carinho para fazer você se sentir única, elegante e perfeitamente confortável.
          </p>
        </section>
      </main>

    </div>
  );
}
