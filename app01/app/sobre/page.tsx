import Link from 'next/link';

export default function Sobre() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '20px', fontSize: '18px' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#0070f3' }}>Início</Link>
        <Link href="/produtos" style={{ textDecoration: 'none', color: '#0070f3' }}>Produtos</Link>
        <Link href="/sobre" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#333' }}>Sobre Nós</Link>
        <Link href="/contato" style={{ textDecoration: 'none', color: '#0070f3' }}>Contato</Link>
      </nav>
      <hr style={{ border: '1px solid #eee', marginBottom: '20px' }} />
      <h1>Nossa História</h1>
      <p>Nossa marca busca trazer estilo e durabilidade para todos.</p>
      <div style={{ marginTop: '20px' }}>
        <img src="/loja.jpg" alt="Loja" style={{ width: '100%', maxWidth: '500px', borderRadius: '8px' }} />
      </div>
    </div>
  );
}