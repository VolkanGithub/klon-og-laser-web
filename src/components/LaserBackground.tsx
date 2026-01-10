import { useEffect, useRef } from 'react';

const LaserBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    interface Beam {
      x: number;
      y: number;
      speed: number;
      length: number;
      opacity: number;
      horizontal: boolean;
    }

    const beams: Beam[] = [];
    const maxBeams = 8; 

    // Hız ve diğer ayarlar senin sevdiğin "Rastgele" modunda kaldı.
    const createBeam = (): Beam => {
      const isHorizontal = Math.random() > 0.5;
      return {
        x: isHorizontal ? -300 : Math.random() * width,
        y: isHorizontal ? Math.random() * height : -300,
        speed: (Math.random() * 15) + 10, 
        length: (Math.random() * 300) + 150, 
        opacity: 0.8, // Opaklığı biraz artırdım ki ucu daha iyi parlasın
        horizontal: isHorizontal
      };
    };

    for(let i=0; i<3; i++) beams.push(createBeam());

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (beams.length < maxBeams && Math.random() > 0.98) {
        beams.push(createBeam());
      }

      beams.forEach((beam, index) => {
        if (beam.horizontal) beam.x += beam.speed;
        else beam.y += beam.speed;
        
        beam.opacity -= 0.003; 

        if (beam.x > width + beam.length || beam.y > height + beam.length || beam.opacity <= 0) {
          beams.splice(index, 1);
          return;
        }

        // --- ÇİZİM (DEĞİŞİKLİK BURADA) ---
        ctx.beginPath();

        // 1. Gradyan (Renk Geçişi) Oluştur
        let gradient;
        if (beam.horizontal) {
          // Yatay ise: Başlangıç (Uç) -> Bitiş (Kuyruk)
          gradient = ctx.createLinearGradient(beam.x, beam.y, beam.x - beam.length, beam.y);
        } else {
          // Dikey ise: Başlangıç (Uç) -> Bitiş (Kuyruk)
          gradient = ctx.createLinearGradient(beam.x, beam.y, beam.x, beam.y - beam.length);
        }

        // 2. Renk Duraklarını Belirle
        // DURAK 0 (En Uç): Çok parlak, hafif sarımsı turuncu (Yoğun ısı)
        gradient.addColorStop(0, `rgba(255, 200, 120, ${beam.opacity})`);
        
        // DURAK 0.2 (Uca yakın): Ana neon rengimiz
        gradient.addColorStop(0.2, `rgba(255, 77, 0, ${beam.opacity * 0.8})`);
        
        // DURAK 1 (Kuyruk): Tamamen şeffaf
        gradient.addColorStop(1, `rgba(255, 77, 0, 0)`);

        // 3. Fırçaya bu gradyanı yükle
        ctx.strokeStyle = gradient;

        // Parlama efekti (Shadow)
        ctx.shadowBlur = 25; // Biraz daha artırdım
        ctx.shadowColor = '#FF4D00';
        ctx.lineWidth = 3; // Biraz daha kalınlaştırdım ki gradyan belli olsun
        ctx.lineCap = 'round';

        // Çizgiyi çiz
        if (beam.horizontal) {
          ctx.moveTo(beam.x, beam.y);
          ctx.lineTo(beam.x - beam.length, beam.y);
        } else {
          ctx.moveTo(beam.x, beam.y);
          ctx.lineTo(beam.x, beam.y - beam.length);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />;
};

export default LaserBackground;