import React from 'react';

interface RomanticMessageProps {
  isAuthenticated: boolean;
}

const RomanticMessage: React.FC<RomanticMessageProps> = ({ isAuthenticated }) => {
  if (!isAuthenticated) return null;

  const message = `8 aydır beraberiz bir kere ayrıldık ve olan şeyler için hem özür hem de yaşanan güzel şeyler için minnettarlığımı göstermek istiyorum bu 8 ay boyunca çok güzel anılar yaşadık yeri geldi korktuk yeri geldi ağladık yeri geldi güldük birlikte geçirdiğimiz her an benim için çok değerli seninle paylaştığım her his her gülüş her bakış unutulmaz oldu bazen zorluklar yaşadık ama hepsinden birlikte güçlenerek çıktık birbirimizi anlamak ve destek olmak hayatımızı daha da özel kıldı seni sevmenin verdiği huzur ve mutluluk tarif edilemez her gün yanımda olman bana güven vermen ve hayatı birlikte paylaşmamız bana tarifsiz bir mutluluk verdi bazen fark etmeden kırgınlıklar yaşadık ama her defasında yeniden bağlandık ve birbirimize daha çok değer verdik seninle geçirdiğim her anı saklamak hatırlamak ve geleceğe taşımak istiyorum birlikte olduğumuz süre boyunca öğrendiğim şeyler yaşadığımız anılar ve paylaştığımız sevgimiz bana hayatın ne kadar güzel olduğunu gösterdi seninle gülmek seninle ağlamak seninle korkularımı paylaşmak hayatımı zenginleştirdi her sabah uyandığımda aklımda ilk sen oluyorsun ve her gece uyumadan önce seni düşünüyorum bu 8 ay boyunca yaşadığımız küçük ve büyük her an benim için paha biçilemez seninle olan bağımızın her geçen gün daha da güçlenmesi her anımızın daha da özel olması için elimden geleni yapacağım sana olan sevgim her zaman aynı kalacak ve her zaman artacak bu mesaj sadece sana özel bir hatırlatma bu süre boyunca yaşadığımız her şey için teşekkür ederim ve gelecekte paylaşacağımız tüm güzel anılar için şimdiden heyecanlanıyorum bu sayfa sana özel sadece bizim hikayemizi hatırlatacak bir küçük hatıra olarak kalacak umarım her açışında yüzünde bir gülümseme oluşturur ve sevgimizin ne kadar değerli olduğunu hatırlatır seni seviyorum sen benim için hayatımın en değerli parçasısın sensiz geçen bir an bile eksik bir an sensiz geçen zaman sanki boşa geçen zaman oluyor senin varlığın bana güç veriyor senin sesin bana huzur veriyor senin gülüşün kalbime dokunuyor senin gözlerin bana umut veriyor seninle geçirdiğim her saniye bana hayatın ne kadar anlamlı olduğunu hatırlatıyor seni sevmek bana kendimi bulduruyor seni sevmek bana geleceğe dair hayaller kurduruyor seni sevmek bana içimdeki en saf en temiz en gerçek duyguları yaşatıyor her gün seninle ilgili hayaller kuruyorum birlikte çıkacağımız yolculukları düşünüyorum birlikte göreceğimiz yerleri hayal ediyorum bir gün el ele sahilde yürümeyi birlikte gün batımını izlemeyi birlikte yağmurun altında ıslanmayı birlikte bir şarkıya eşlik etmeyi hayal ediyorum bütün bunları seninle paylaşabilmek bana tarifsiz bir mutluluk veriyor bazen düşünüyorum hayatımda senden önce ne yapıyordum seninle tanışmadan önce nasıl yaşıyordum sanki seninle tanışmadan önceki ben eksik bir bendim şimdi tamamlandım sanki senden önceki hayatımın rengi yoktu şimdi seninle hayat rengarenk oldu senin varlığınla her şey güzelleşti seninle öğrendim gerçek sevgiyi seninle öğrendim sabretmeyi seninle öğrendim affetmeyi seninle öğrendim bağlanmayı seninle öğrendim emek vermeyi seninle öğrendim paylaşmayı seninle öğrendim hayatı seninle öğrendim senden öğrendiğim her şey bana çok şey kattı ve bu yüzden sana minnettarım senin yanımda oluşun bana en güzel hediyelerden biri bazen düşünüyorum sana nasıl teşekkür etsem kelimeler yetmiyor hangi cümleleri kursam da sana hissettiklerimi anlatabilsem diye düşünüyorum ama biliyorum ki kelimeler sınırlı hislerim ise sınırsız senin için hissettiklerim o kadar büyük o kadar derin ki hiçbir kelime hiçbir yazı hiçbir şarkı hiçbir şiir anlatamaz sadece kalbimde hissediliyor ve sadece seninle tamamlanıyor seninle olan bağımız benim için kutsal bir şey bu bağın değerini her geçen gün daha çok anlıyorum ve korumak için elimden geleni yapacağım çünkü sen benim hayatımın en güzel yanı sen benim en büyük şansım sen benim en kıymetli hazinemsin bazen birlikte yaşadığımız zor zamanları düşünüyorum kavgalarımızı yanlış anlamalarımızı kırgınlıklarımızı ama sonra görüyorum ki bütün bunlar bizi ayırmadı aksine daha da yakınlaştırdı çünkü biz öğrendik birlikte nasıl yürüneceğini öğrendik sabretmeyi öğrendik affetmeyi öğrendik kalbimizi açık tutmayı öğrendik birbirimize sarılmayı öğrendik ve bütün bunlar sevgimizin gücünü gösterdi hiçbir şey bizi ayıramaz hiçbir şey bizi koparamaz çünkü biz gerçekten birbirimizi seviyoruz ve birbirimize aitiz sen benim kaderimsin sen benim yol arkadaşım benim sırdaşım benim dostum benim aşkımsın her gece uyumadan önce sana sarılmayı hayal ediyorum her sabah gözlerimi açtığımda seni görmeyi hayal ediyorum gelecekte birlikte kuracağımız hayatı düşünüyorum birlikte bir evimiz olmasını birlikte kahvaltılar yapmayı birlikte film izlemeyi birlikte gülmeyi birlikte yaşlanmayı hayal ediyorum bunların hepsi bana güç veriyor bunların hepsi bana umut veriyor çünkü biliyorum ki sen yanımda olduğun sürece hayatım eksiksiz olacak sen yanımda olduğun sürece hiçbir şeyden korkmam sen yanımda olduğun sürece her şeyin üstesinden gelirim çünkü seninle beraberken ben kendimin en güçlü en mutlu en huzurlu halimim senin sevgin bana yetiyor senin sevgin bana ışık oluyor senin sevgin bana yol gösteriyor senin sevgin bana şifa oluyor ve ben senin sevginle büyüyorum gelişiyorum olgunlaşıyorum senin sevgin bana hayat veriyor ve bu yüzden her gün Allah’a şükrediyorum seni bana verdiği için her gün şükrediyorum senin gibi birini tanıdığım için her gün şükrediyorum seninle hayatımı paylaştığım için çünkü seninle olmak bana her şeyden daha kıymetli seni sevmek bana bir ömür yetecek kadar büyük bir mutluluk veriyor seni sevmek bana en derin huzuru yaşatıyor seni sevmek bana umut dolu yarınlar vaat ediyor seninle geçirdiğim her anı saklamak istiyorum hiçbirini unutmamak istiyorum çünkü seninle yaşadığım her şey bir hazine gibi kalbimde saklanıyor ve hep öyle kalacak`;

  const sentences = message.split(/(?<=[.!?])\s+/).filter(s => s.trim());

  return (
    <div className="relative z-20 w-full px-6 py-10 animate-fade-in font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight tracking-wide">
            Sana Özel Mesajım 💕
          </h1>
          <div className="w-40 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* ✨ Çerçeveli mesaj kutusu */}
        <div
          className="relative p-12 rounded-2xl shadow-xl"
          style={{
            border: "4px solid transparent",
            borderImage: "linear-gradient(135deg, #FFD700, #FFB347, #FFD700) 1",
          }}
        >
          <div className="prose prose-xl max-w-none text-gray-900 leading-relaxed font-bold tracking-wide">
            <div className="space-y-8 text-justify">
              {sentences.map((sentence, index) => (
                <p
                  key={index}
                  className="animate-fade-in-up hover:text-black transition-colors duration-300"
                  style={{
                    animationDelay: `${index * 0.12}s`,
                    lineHeight: "1.9",
                  }}
                >
                  {sentence.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 text-white px-10 py-5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span className="text-lg">Sonsuza kadar seninle</span>
            <span className="text-2xl animate-pulse">💖</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RomanticMessage;
