const projectTranslations = {
  100: {
    headerOne: "Geliştirme Odağı",
    headerTwo: "Teknik Uygulama",
    description:
      "BlockBlast’ı, modern casual puzzle oyunlarının mekaniklerini üretim kalitesinde uygulamak için geliştirirken data-oriented architecture yaklaşımını da benimsedim. Sistemleri; grid yönetimi, eşleştirme/blast çözümleme, level progression, scene routing ve UI state gibi bağımsız veri odaklı katmanlara ayırarak hem performans hem de bakım kolaylığı sağladım. Bu sayede oyun akışını daha öngörülebilir hale getirip yeni özellik eklemeyi kolaylaştırdım.",
    textOne:
      "BlockBlast’ı, modern casual puzzle oyunlarının mekaniklerini üretim kalitesinde uygulamak için geliştirirken data-oriented architecture yaklaşımını da benimsedim. Sistemleri; grid yönetimi, eşleştirme/blast çözümleme, level progression, scene routing ve UI state gibi bağımsız veri odaklı katmanlara ayırarak hem performans hem de bakım kolaylığı sağladım. Bu sayede oyun akışını daha öngörülebilir hale getirip yeni özellik eklemeyi kolaylaştırdım.",
    textTwo:
      "Main Scene → Level Scene → Win/Lose → geri dönüş döngüsünü net ve ölçeklenebilir bir sahne akışıyla tasarladım._Oyuncu sürekliliğini korumak için yerel kayıt sistemi kurarak son açılan seviyeden devam etmeyi sağladım._Seviye durumu, kazanma/kaybetme geri bildirimleri ve popup etkileşimleriyle güçlü bir UI feedback döngüsü oluşturdum._Oyun durumu, sahne yönlendirme ve UI davranışlarını modüler sistemlere ayırarak bakım ve genişletilebilirliği artırdım.",
    textThree:
      "Persistent level progression: mevcut seviye indeksi, tamamlanma kontrolü, oyun sonu “Finished” durumu ve döngüsel reset davranışını yöneten kalıcı veri yapısı._Dinamik Level Button sistemi: ilerleme sürecinde “Level X”, tüm seviyeler bitince “Finished” gösterimi ve tek tuşla yeniden başlatma akışı._Scene routing altyapısı: Main Scene’de kayıtlı seviyeyi doğru yükleme, win sonrası geri dönüş ve lose ekranında “Close / Try Again” aksiyonları._UI katman güvenliği: fail popup ve geçiş overlay’leri için render-order/sorting kontrolü ile gameplay üstünde tutarlı görünürlük._Performans iyileştirmeleri: gereksiz raycast/mask kullanımının azaltılması, atlas tabanlı batching yaklaşımı ve spawn/pool yönetimiyle runtime object churn kontrolü._Oyun hissi (game feel): Coroutine, Vector3.Lerp ve zamanlama odaklı efektlerle daha snappy hareket, ölçeklenme ve zincir reaksiyon deneyimi.",
  },
  101: {
    headerOne: "Sorumluluklarım",
    headerTwo: "Teslim Edilen Çekirdek Sistemler",
    description:
      "Kiss Cargo, ekip çalışması odaklı kaotik bir co-op macera oyunu. Oyunda oyuncu tarafı sistemlerin güvenilirliği ve multiplayer kararlılığı kritik öneme sahipti.",
    textOne:
      "Blay Games’te Gameplay Programmer olarak oyuncu tarafındaki kritik sistemlerin geliştirilmesini üstlendim. Odak noktam; performans, kararlılık ve uzun vadeli sürdürülebilirlikti.",
    textTwo:
      "Player State Manager ve geçiş mantığını sıfırdan tasarlayıp geliştirdim._Tuzak sistemlerini ve oynanış etkileşimlerini uçtan uca uyguladım._Oyuncu stamina akışı, ghost mode ve ragdoll sistemlerini geliştirdim._Prenses stamina sistemini dengeleme kancalarıyla birlikte kurguladım.",
    textThree:
      "Oynanış tetiklemeli VFX ve ses sistemlerini entegre ederek geri bildirimi güçlendirdim._Geliştirdiğim tüm özellikleri Normcore ile tam uyumlu olacak şekilde teslim ettim._Böylece sistemlerde stabil senkronizasyon, öngörülebilir davranış ve akıcı multiplayer deneyimi sağlandı.",
    companyResponsibilities: [
      "Player State Manager ve geçiş davranışları",
      "Tuzak sistemleri ve oynanış etkileşimleri",
      "Oyuncu ve prenses stamina sistemleri",
      "Ölüm sonrası ghost mode ve ragdoll uygulaması",
      "VFX ve ses entegrasyonları",
      "Normcore uyumlu multiplayer implementasyonu",
    ],
  },
  102: {
    headerOne: "Sorumluluklarım",
    headerTwo: "İlerleme ve Online/Offline Sistemleri",
    description:
      "GOKA Street, hızlı tempolu ve rekabet odaklı bir multiplayer futbol deneyimi sunuyor. Bu projede ilerleme, UI ve backend geçiş süreçlerine odaklandım.",
    textOne:
      "Konseptten final implementasyona kadar birçok ana sistemi teslim ettim. Tasarım süreçlerine katkı verirken çekirdek UI ve backend geçiş akışlarını bağımsız şekilde geliştirdim.",
    textTwo:
      "Kart tabanlı boost sistemi ve Goal Frenzy mekaniklerini geliştirdim._Dynamic Progress Road sistemini oyuncu akışından altyapıya kadar uçtan uca uyguladım._Hedef takibi, ödül fiyatlandırması ve progression state yönetimini tamamladım.",
    textThree:
      "Firebase’den Nakama’ya teknik geçiş sürecinde aktif rol aldım._UI Toolkit ile arayüz akışlarını uyguladım._Offline/online geçişlerinde yeniden giriş ve yeniden senkronizasyon akışlarını kurarak multiplayer kararlılığını korudum.",
    companyResponsibilities: [
      "Kart tabanlı boost ve Goal Frenzy sistemleri",
      "Dynamic road ilerleme ve fiyatlandırma mantığı",
      "UI Toolkit geliştirmeleri",
      "Firebase’den Nakama’ya geçiş desteği",
      "Offline/online geçiş akışları",
      "Normcore uyumlu multiplayer implementasyonu",
    ],
  },
  103: {
    title: "AR Mobil Uygulama (TÜBİTAK Projesi)",
    headerOne: "Sorumluluklarım",
    headerTwo: "Teslimat Kapsamı",
    description:
      "TÜBİTAK iş birliği kapsamında geliştirilen bu AR mobil uygulamayı uçtan uca teknik olarak hayata geçirdim. Odak noktam; gerçek ortam takibi, etkileşimli içerik ve yayın kalitesiydi.",
    textOne:
      "Projenin teknik yürütmesini üstlenerek konsepti üretime hazır bir mobil ürüne dönüştürdüm. AR temel kurulumundan App Store hazırlığına kadar tüm geliştirme yaşam döngüsünü yönettim.",
    textTwo:
      "Stabil görüntü/düzlem takibi ve nesne kalıcılığı için çekirdek AR akışlarını kurdum._Etkileşimli ve oyunlaştırılmış eğitim içeriğini destekleyen uygulama mimarisini uyguladım._Özellik implementasyonu, 3D varlık entegrasyonu ve test döngülerini yönettim.",
    textThree:
      "Proje kilometre taşlarını karşılayan üretime hazır iOS sürümü teslim ettim._Akademik paydaşlarla geri bildirim döngüsü yürüterek teknik doğruluk ve eğitim hedeflerini korudum._Teslim sonrası sürdürülebilirlik için dokümantasyon ve handoff sürecini tamamladım.",
  },
  1: {
    headerOne: "Teknik Genel Bakış",
    headerTwo: "Uygulanan Çekirdek Özellikler",
    description:
      "Zombie Farmer, dalga tabanlı hayatta kalma mekaniklerini ve yoğun tempolu combat akışını test ettiğim bir Top-Down Shooter projesidir.",
    textOne:
      "Bu projede kısa sürede yüksek baskı oluşturan bir oynanış döngüsü kurmaya odaklandım. Oyuncu hareket hızı ile düşman yoğunluğu dengesini sürekli test ederek combat hissini güçlendirdim.",
    textTwo:
      "Oyuncu ilerledikçe zorlaşan dinamik bir spawn sistemi geliştirdim._Farklı saldırı tiplerini destekleyen genişletilebilir silah sistemi uyguladım._Global sayaç ve skor yöneticisi ile tekrar oynanabilirliği artırdım.",
    textThree:
      "Unity input sistemiyle akıcı bir player controller geliştirdim._Combat particle efektleri ve sayaç UI göstergeleriyle görsel geri bildirimi güçlendirdim._Proje, game state ve win/lose koşulları konusundaki teknik temelimi güçlendirdi.",
  },
  2: {
    title: "Unlocker's Tale",
    headerOne: "Proje Kapsamı",
    headerTwo: "Level Tasarımı ve Mantığı",
    description:
      "Unlocker’s Tale, farklı oynanış stillerini tek bir anlatıda birleştirdiğim 3D üçüncü şahıs macera projesidir.",
    textOne:
      "Bu projede üç farklı level tasarlayarak her bölümde farklı mekanik hedefledim. Ortak hedefi sabit tutup çevre ve oynanış dinamiklerini seviye bazında değiştirdim.",
    textTwo:
      "Level 2’de lane tabanlı engelden kaçış ve kalıcı coin toplama akışını kurdum._Level 3’te geri sayım odaklı maze gezinti mekaniklerini uyguladım._Anahtar/kapı etkileşimlerini farklı level bağlamlarında tekrar kullanılabilir olacak şekilde modüler geliştirdim.",
    textThree:
      "Global Game Over ve Restart akışıyla seviye ilerlemesini güvenli şekilde yönettim._Kamera geçişleri ve third-person kontrol hissini tüm level’larda tutarlı tuttum._Proje, level bazlı state yönetimi becerilerimi geliştirdi.",
  },
  3: {
    headerOne: "Teknik Uygulama",
    headerTwo: "Oynanış Sistemleri",
    description:
      "Desert Run, prosedürel çevre üretimi ve mobil odaklı zorluk ölçekleme sistemlerini test ettiğim bir endless runner projesidir.",
    textOne:
      "Projede ana odak noktam, sonsuz akışı performans kaybı olmadan sürdürebilmekti. Oyuncunun önüne çevre ve engel üretirken arkadaki nesneleri temizleyen bir yaşam döngüsü kurdum.",
    textTwo:
      "Swipe tabanlı mobil kontrol sistemiyle yön ve zıplama mekaniklerini uyguladım._Geçici güçlendirmeler için parametrik bir power-up akışı kurdum._Skor tablosu ile rekabet odaklı tekrar oynanabilirlik sağladım.",
    textThree:
      "Rastgele ama adil aralıklarla çalışan engel üretim sistemi geliştirdim._DOTween ve animasyon sistemiyle lane geçişlerinde akıcı hareket hissi verdim._Proje, object lifecycle ve mobil performans optimizasyonu deneyimimi artırdı.",
  },
  4: {
    headerOne: "Mekanikler",
    headerTwo: "Teknik Uygulama",
    description:
      "Starship Sprint, fizik tabanlı hareket ve hassas iniş mekaniklerine odaklandığım 3D arcade platform projesidir.",
    textOne:
      "Uzay gemisinin momentum hissini koruyan, kontrolü zor ama ödüllendirici bir hareket sistemi hedefledim. Level tasarımını bu fizik hissini destekleyecek şekilde kurguladım.",
    textTwo:
      "Thrust ve rotasyon mantığına sahip fizik tabanlı starship controller geliştirdim._İniş başarısını açı ve hız parametrelerine göre ölçen Landing Zone sistemi kurdum._Level geçişleri ve skorlamayı yöneten bir level manager uyguladım.",
    textThree:
      "Particle sistemleriyle arcade hissini güçlendirdim._UI tarafında gemi durumu ve anlık geri bildirim akışlarını netleştirdim._Bu proje, fizik odaklı oynanış dengeleme becerilerimi geliştirdi.",
  },
  5: {
    headerOne: "Geliştirme Hedefleri",
    headerTwo: "Özellikler ve Mantık",
    description:
      "Dino projesinde klasik Chrome Dino deneyimini mobil odaklı bir Unity implementasyonu olarak yeniden geliştirdim.",
    textOne:
      "Temel hedefim, orijinal oyunun hızlı ve net oyun hissini koruyarak mobilde aynı tepkiyi vermekti. Zıplama hissi, yerçekimi ve tempo dengesini bu hedefe göre ayarladım.",
    textTwo:
      "Parallax arka plan sistemiyle 2D derinlik hissi oluşturudum._Oyuncu hızına göre çalışan rastgele engel üretim akışı geliştirdim._Kalıcı high-score sistemiyle tekrar oynanabilirliği artırdım.",
    textThree:
      "Gecikmesiz tap-to-jump kontrolü için mobil input akışını optimize ettim._Skor arttıkça zorluk eğrisini kademeli yükselten tempo sistemi kurdum._Proje, 2D fizik ve mobil UI sadeliği konusunda güçlü bir pratik sağladı.",
  },
  6: {
    headerOne: "Proje Odağı",
    headerTwo: "Uygulama Detayları",
    description:
      "Susuwatari, Flappy Bird’den ilham alarak fizik tabanlı uçuş, skor akışı ve hızlı tekrar deneme döngüsüne odaklandığım mobil bir projedir.",
    textOne:
      "Bu projede basit ama bağımlılık yaratan bir çekirdek loop üretmeye odaklandım. Çarpışma adaleti ve kontrol tepkiselliği oyun hissinin merkezindeydi.",
    textTwo:
      "Prosedürel pipe üretimiyle her denemede değişen bir akış kurdum._Skor geçişlerinde UI animasyonu ve ses geri bildirimi entegre ettim._PlayerPrefs ile kalıcı high-score takibi uyguladım.",
    textThree:
      "2D fizik değerlerini snappy tepki için ince ayarladım._Ölüm sonrası yeniden başlatma akışını hızlandırarak bekleme süresini azalttım._Proje, temel 2D mobil loop tasarımında güçlü bir pratik sundu.",
  },
  7: {
    title: "Müfredat Dönüştürme ve Yönetim Uygulaması",
    headerOne: "Geliştirme Genel Bakışı",
    headerTwo: "Çekirdek Fonksiyonlar",
    description:
      "Bu Java tabanlı masaüstü uygulamayı, karmaşık müfredat verisini sistem entegrasyonuna uygun JSON yapısına dönüştürmek için geliştirdim.",
    textOne:
      "Projenin odağında veri bütünlüğü ve kullanıcı güveni vardı. Farklı giriş formatlarını tek bir yapıda toplayıp şeffaf değişiklik takibi sunan bir akış kurdum.",
    textTwo:
      "Değişikliklerde gerekçe zorunluluğu içeren versiyonlama sistemi uyguladım._Dış sistemlerle uyumlu JSON parser/exporter yapısı geliştirdim._Kayıtlı iki sürümü karşılaştıran yan yana diff görünümü ekledim.",
    textThree:
      "JavaFX ile sezgisel bir masaüstü arayüz geliştirdim._Büyük veri setleri için import/export akışlarını verimli hale getirdim._Proje, yazılım mimarisi ve versiyonlama tarafında güçlü deneyim kazandırdı.",
  },
};

export default projectTranslations;
