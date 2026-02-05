import { GetStaticProps } from 'next';
import Head from 'next/head';
import contentData from '@/data/content.json';
import { ContactItem } from '@/types/index';
import { useState } from 'react';

interface ContactPageProps {
  contactInfo: ContactItem[];
}

export default function ContactPage({ contactInfo }: ContactPageProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Form verilerini tutmak için state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // API Route'a İstek Atıyoruz
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' }); // Formu temizle
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Hata:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>İletişim | OG Laser Teknik</title>
      </Head>

      <section className="min-h-[85vh] flex items-center justify-center px-4 pb-20">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8"> 
          
          {/* Sol Taraf: İletişim Bilgileri (AYNI KALDI) */}
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Bize Ulaşın.
              </h1>
              <p className="text-gray-400 text-lg">
                Makineleriniz durmasın. 7/24 teknik destek hattımızla yanınızdayız.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.value}
                  target={item.type === 'address' ? '_blank' : '_self'}
                  className="block p-6 bg-[#1a1a1a] border border-white/10 rounded-xl hover:border-[#FF4D00] transition-all group"
                >
                  <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-white font-medium group-hover:text-[#FF4D00] transition-colors">
                    {item.displayValue}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Sağ Taraf: İletişim Formu (GÜNCELLENDİ) */}
          <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
            <h2 className="text-2xl font-bold text-white mb-6">Hızlı Mesaj Gönder</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Adınız Soyadınız</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#121212] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#FF4D00] transition-colors"
                  placeholder="Örn: Ahmet Yılmaz"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Telefon Numaranız</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#121212] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#FF4D00] transition-colors"
                  placeholder="0555..."
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Mesajınız</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#121212] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#FF4D00] transition-colors"
                  placeholder="Makinenizin marka/modeli ve sorunu..."
                ></textarea>
              </div>

              <button 
                disabled={loading}
                className={`w-full font-bold py-4 rounded-lg transition-all shadow-lg 
                  ${loading ? 'bg-gray-600 cursor-wait' : 'bg-[#FF4D00] hover:bg-[#ff3300] text-white shadow-orange-900/20'}
                `}
              >
                {loading ? 'GÖNDERİLİYOR...' : 'GÖNDER'}
              </button>

              {/* Durum Mesajları */}
              {status === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500 text-green-400 rounded-lg text-center mt-4 animate-pulse">
                  ✅ Mesajınız iletildi! En kısa sürede dönüş yapacağız.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500 text-red-400 rounded-lg text-center mt-4">
                  ❌ Bir hata oluştu. Lütfen telefon ile arayınız.
                </div>
              )}

            </form>
          </div>

        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      contactInfo: contentData.contact,
    },
  };
};