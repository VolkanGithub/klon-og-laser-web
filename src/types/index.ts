// Bu dosya projemizin "Anayasasıdır". Veri tipleri burada tanımlanır.

export interface Service {
  id: string;          // Benzersiz kimlik (slug için kullanacağız)
  title: string;       // Hizmetin adı
  description: string; // Kısa açıklama
  icon: string;        // İkon adı (şimdilik emoji kullanacağız, sonra SVG'ye geçeriz)
  details: string[];   // Hizmetin alt maddeleri (nokta atışı detaylar)
}

// YENİ: İletişim Bilgileri Tipi
export interface ContactItem {
  type: "phone" | "email" | "address"; // Sadece bu 3'ü olabilir, başka şey yazarsan hata verir!
  title: string;
  value: string;
  displayValue: string; // Ekranda görünecek hali (Örn: +90 555...)
}

// YENİ: Yedek Parça Tipi (Sade ve Net)
export interface SparePart {
  id: string;
  name: string;
  category: string;
}