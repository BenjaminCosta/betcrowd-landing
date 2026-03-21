import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Política de Privacidad - BetCrowd",
  description:
    "Política de privacidad de BetCrowd. Conocé cómo recolectamos, usamos y protegemos tus datos personales.",
}

function Divider() {
  return <div className="h-px bg-[#2A2A2A] my-6" />
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="text-white text-lg font-semibold mb-3">{title}</h2>
      <div className="text-[#B3B3B3] text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] px-4 py-12">
      <div className="w-full max-w-2xl mx-auto animate-fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-5 rounded-2xl overflow-hidden shadow-lg shadow-[#D7263D]/20 ring-1 ring-white/10">
            <Image
              src="/images/betcrowd-logo.png"
              alt="BetCrowd"
              width={80}
              height={80}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">
            Política de Privacidad
          </h1>
          <p className="text-[#B3B3B3] text-sm">BetCrowd</p>
        </div>

        {/* Card */}
        <div className="bg-[#141414] rounded-3xl border border-[#1A1A1A] shadow-2xl p-8 space-y-0">

          <Section title="1. Responsable del tratamiento">
            <p>
              El responsable del tratamiento de los datos personales recolectados
              a través de la aplicación <strong className="text-white">BetCrowd</strong> es:
            </p>
            <p>
              <strong className="text-white">Nombre:</strong> Benjamin Costa Mihanovich
              <br />
              <strong className="text-white">Email de contacto:</strong>{" "}
              <a
                href="mailto:benjacostm100@gmail.com"
                className="text-[#D7263D] hover:underline"
              >
                benjacostm100@gmail.com
              </a>
            </p>
          </Section>

          <Divider />

          <Section title="2. Qué datos recolectamos y para qué">
            <p>BetCrowd recolecta únicamente los datos necesarios para el funcionamiento de la aplicación:</p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>
                <strong className="text-white">Dirección de email:</strong> usada para crear y autenticar tu cuenta mediante Firebase Authentication.
              </li>
              <li>
                <strong className="text-white">Nombre de usuario:</strong> elegido por vos al registrarte, visible dentro de torneos y rankings.
              </li>
            </ul>
            <p>
              Estos datos se utilizan exclusivamente para identificarte dentro de la app,
              permitirte participar en torneos de predicciones y mostrar tu posición en los rankings.
              No recolectamos datos de ubicación, contactos, ni ningún otro dato sensible.
            </p>
          </Section>

          <Divider />

          <Section title="3. Cómo se almacenan los datos">
            <p>
              Tus datos son almacenados mediante los servicios de{" "}
              <strong className="text-white">Google Firebase</strong>:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>
                <strong className="text-white">Firebase Authentication:</strong> gestiona el inicio de sesión y la seguridad de tu cuenta.
              </li>
              <li>
                <strong className="text-white">Cloud Firestore:</strong> almacena los datos relacionados con torneos, predicciones y rankings.
              </li>
            </ul>
            <p>
              Google Firebase aplica medidas de seguridad estándar de la industria para proteger
              los datos. Podés consultar la política de privacidad de Google en{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D7263D] hover:underline"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </Section>

          <Divider />

          <Section title="4. Compartición de datos con terceros">
            <p>
              BetCrowd <strong className="text-white">no vende, alquila ni comparte</strong> tus datos personales
              con terceros, salvo con los servicios de{" "}
              <strong className="text-white">Google Firebase</strong> necesarios para el
              funcionamiento técnico de la aplicación (autenticación y base de datos), según
              lo descrito en la sección anterior.
            </p>
            <p>
              No utilizamos tus datos con fines publicitarios ni los transferimos a ninguna
              otra empresa o entidad.
            </p>
          </Section>

          <Divider />

          <Section title="5. Derechos del usuario">
            <p>Como usuario de BetCrowd, tenés derecho a:</p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>
                <strong className="text-white">Acceder</strong> a los datos personales asociados a tu cuenta.
              </li>
              <li>
                <strong className="text-white">Modificar</strong> tu nombre de usuario desde la configuración de la app.
              </li>
              <li>
                <strong className="text-white">Eliminar</strong> tu cuenta y todos los datos asociados enviando una solicitud al email de contacto.
              </li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, escribinos a{" "}
              <a
                href="mailto:benjacostm100@gmail.com"
                className="text-[#D7263D] hover:underline"
              >
                benjacostm100@gmail.com
              </a>{" "}
              indicando el email asociado a tu cuenta. Responderemos en un plazo máximo de 30 días.
            </p>
          </Section>

          <Divider />

          <Section title="6. Menores de edad">
            <p>
              BetCrowd <strong className="text-white">no está destinada a menores de 13 años</strong>.
              No recolectamos intencionalmente datos de personas menores de esa edad.
              Si tomamos conocimiento de que un menor de 13 años ha creado una cuenta,
              procederemos a eliminar su información de nuestros sistemas a la brevedad.
            </p>
            <p>
              Si creés que un menor de 13 años está usando la aplicación, por favor
              contactanos en{" "}
              <a
                href="mailto:benjacostm100@gmail.com"
                className="text-[#D7263D] hover:underline"
              >
                benjacostm100@gmail.com
              </a>
              .
            </p>
          </Section>

          <Divider />

          <Section title="7. Sin dinero real ni transacciones">
            <p>
              BetCrowd es una aplicación <strong className="text-white">puramente social y competitiva</strong>.
              No involucra dinero real, apuestas monetarias, transacciones financieras
              ni ningún tipo de pago dentro de la app. Toda la competencia es recreativa
              y entre amigos.
            </p>
          </Section>

          <Divider />

          <Section title="8. Cambios en esta política">
            <p>
              Podemos actualizar esta Política de Privacidad en cualquier momento.
              Ante cambios significativos, te notificaremos a través de la app o
              por email. El uso continuado de BetCrowd tras la publicación de cambios
              implica la aceptación de la política actualizada.
            </p>
          </Section>

          <Divider />

          {/* Footer info inside card */}
          <div className="text-center space-y-1 pt-2">
            <p className="text-[#666] text-xs uppercase tracking-wider">Contacto</p>
            <a
              href="mailto:benjacostm100@gmail.com"
              className="text-[#D7263D] text-sm hover:underline"
            >
              benjacostm100@gmail.com
            </a>
            <p className="text-[#666] text-xs mt-2">
              Última actualización: 21 de marzo de 2025
            </p>
          </div>
        </div>

        {/* Back link */}
        <p className="text-[#666] text-sm text-center mt-6">
          BetCrowd — Predicciones y torneos entre amigos
        </p>
      </div>
    </main>
  )
}
