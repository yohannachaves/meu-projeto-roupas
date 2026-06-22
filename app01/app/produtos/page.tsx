import Link from 'next/link';

export default function Produtos() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '20px', fontSize: '18px' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#0070f3' }}>Início</Link>
        <Link href="/produtos" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#333' }}>Produtos</Link>
        <Link href="/sobre" style={{ textDecoration: 'none', color: '#0070f3' }}>Sobre Nós</Link>
        <Link href="/contato" style={{ textDecoration: 'none', color: '#0070f3' }}>Contato</Link>
      </nav>
      <hr style={{ border: '1px solid #eee', marginBottom: '20px' }} />
      <h1>Nosso Catálogo</h1>
      <p>Confira os nossos lançamentos da coleção de roupas.</p>
      <div style={{ marginTop: '20px' }}>
        <img src="/camiseta.jpg" alt="Camiseta" style={{ width: '100%', maxWidth: '500px', borderRadius: '8px' }} />
      </div>
    </div>
  );
}