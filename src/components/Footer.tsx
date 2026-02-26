import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

type FooterProps = {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
};

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps) {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="w-[90%] md:w-[80%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-display">voitechrj</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Sua parceira confiável para soluções de TI. Manutenção rápida, honesta e eficiente para você e sua empresa.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/voitechrj/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1e1e1e] p-2 rounded-full hover:bg-[var(--color-primary)] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/voitechrj"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1e1e1e] p-2 rounded-full hover:bg-[var(--color-primary)] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-display">Entre em Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="text-[var(--color-primary)] mt-1" size={18} />
                <a
                  href="tel:+5521994472406"
                  className="hover:text-white transition-colors"
                >
                  (21) 99447-2406
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="text-[var(--color-primary)] mt-1" size={18} />
                <a
                  href="mailto:voitechrj@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  voitechrj@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-[var(--color-primary)] mt-1" size={18} />
                <a
                  href="https://www.google.com/maps/place/Voitechrj/@-22.8804551,-43.0954073,17z/data=!4m8!3m7!1s0x97013146222ed5:0x9e8be72486a0b8c6!8m2!3d-22.8804551!4d-43.0928324!9m1!1b1!16s%2Fg%2F11h_81qvl0!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Niterói, RJ
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-display">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#social-proof" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} voitechrj. Todos os direitos reservados.</p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Política de Privacidade
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Termos de Serviço
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
