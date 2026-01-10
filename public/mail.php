<?php
// Türkçe karakter sorunu olmasın
header("Content-Type: application/json; charset=UTF-8");

// Sadece POST isteği kabul et
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["message" => "Method Not Allowed"]);
    exit;
}

// React'ten gelen JSON verisini al
$json = file_get_contents("php://input");
$data = json_decode($json);

// Verileri kontrol et
if (empty($data->name) || empty($data->phone) || empty($data->message)) {
    http_response_code(400);
    echo json_encode(["message" => "Eksik bilgi."]);
    exit;
}

// --- AYARLAR ---
$to = "volkanozkan@outlook.com"; // MAİLİN GİDECEĞİ ADRESİ BURAYA YAZ
$subject = "Web Sitesinden Yeni Mesaj: " . $data->name;

// Mail İçeriği
$body = "Web sitesinden yeni bir iletişim formu dolduruldu.\n\n";
$body .= "Ad Soyad: " . $data->name . "\n";
$body .= "Telefon: " . $data->phone . "\n";
$body .= "Mesaj:\n" . $data->message . "\n";

// Mail Başlıkları
$headers = "From: webform@oglaser.com\r\n"; // Hostinginde geçerli bir mail olmalı
$headers .= "Reply-To: no-reply@oglaser.com\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Maili Gönder
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(["message" => "Başarılı"]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Mail gönderilemedi."]);
}
?>