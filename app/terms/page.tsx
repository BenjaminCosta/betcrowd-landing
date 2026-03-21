import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Términos y Condiciones - BetCrowd",
  description:
    "Términos y condiciones de uso de BetCrowd. Conocé las reglas que rigen el uso de la aplicación.",
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

export default function TermsPage() {
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
            Términos y Condiciones
          </h1>
          <p className="text-[#B3B3B3] text-sm">BetCrowd</p>
        </div>

        {/* Card */}
        <div className="bg-[#141414] rounded-3xl border border-[#1A1A1A] shadow-2xl p-8 space-y-0">

          <Section title="1. Aceptación de los términos">
            <p>
              Al descargar, registrarte o usar la aplicación{" "}
              <strong className="text-white">BetCrowd</strong>, aceptás estos
              Términos y Condiciones en su totalidad. Si no estás de acuerdo con
              alguno de estos términos, no debés usar la aplicación.
            </p>
            <p>
              Estos términos constituyen un acuerdo legal entre vos y el
              responsable de BetCrowd,{" "}
              <strong className="text-white">Benjamin Costa Mihanovich</strong>,
              contactable en{" "}
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

          <Section title="2. Descripción del servicio">
            <p>
              BetCrowd es una aplicación móvil gratuita de{" "}
              <strong className="text-white">
                torneos privados de predicciones entre amigos
              </strong>
              . Permite a los usuarios crear torneos, invitar participantes,
              realizar predicciones sobre eventos y competir en rankings internos.
            </p>
            <p>
              BetCrowd{" "}
              <strong className="text-white">
                no involucra dinero real, apuestas monetarias ni ningún tipo de
                transacción financiera
              </strong>
              . Es una plataforma puramente social y recreativa. La app se
              provee de forma gratuita y sin cargos ocultos.
            </p>
          </Section>

          <Divider />

          <Section title="3. Requisitos para usar la app">
            <p>Para usar BetCrowd debés:</p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>
                Tener{" "}
                <strong className="text-white">al menos 13 años de edad</strong>.
                La aplicación no está destinada a menores de 13 años.
              </li>
              <li>
                Crear una cuenta con un{" "}
                <strong className="text-white">email válido</strong> y un nombre
                de usuario.
              </li>
              <li>
                Proporcionar información{" "}
                <strong className="text-white">veraz y actualizada</strong> al
                registrarte.
              </li>
              <li>
                Ser responsable de mantener la{" "}
                <strong className="text-white">
                  confidencialidad de tu cuenta
                </strong>{" "}
                y contraseña.
              </li>
            </ul>
          </Section>

          <Divider />

          <Section title="4. Conducta del usuario">
            <p>Al usar BetCrowd, te comprometés a:</p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>
                No usar la app para fines{" "}
                <strong className="text-white">ilegales o fraudulentos</strong>.
              </li>
              <li>
                No publicar contenido{" "}
                <strong className="text-white">
                  ofensivo, abusivo, discriminatorio o que viole derechos de
                  terceros
                </strong>
                .
              </li>
              <li>
                No realizar{" "}
                <strong className="text-white">
                  spam, manipulación de rankings
                </strong>{" "}
                ni crear cuentas falsas.
              </li>
              <li>
                No intentar acceder sin autorización a cuentas ajenas ni a los
                sistemas de BetCrowd.
              </li>
              <li>
                No utilizar la app de una manera que pueda{" "}
                <strong className="text-white">
                  dañar, sobrecargar o perjudicar
                </strong>{" "}
                el servicio o a otros usuarios.
              </li>
            </ul>
            <p>
              El incumplimiento de estas normas puede resultar en la suspensión
              o eliminación permanente de tu cuenta.
            </p>
          </Section>

          <Divider />

          <Section title="5. Propiedad intelectual">
            <p>
              Todos los derechos sobre la marca{" "}
              <strong className="text-white">BetCrowd</strong>, el diseño, el
              código, el logo y el contenido de la aplicación son propiedad
              exclusiva de su responsable.
            </p>
            <p>
              Queda prohibida la reproducción, distribución o modificación de
              cualquier elemento de la app sin autorización previa y por escrito.
            </p>
            <p>
              El contenido generado por los usuarios (nombres de torneos,
              predicciones, nombres de usuario) es responsabilidad de quienes lo
              crean. Al publicarlo en BetCrowd, otorgás una licencia no exclusiva
              para mostrarlo dentro de la plataforma.
            </p>
          </Section>

          <Divider />

          <Section title="6. Limitación de responsabilidad">
            <p>
              BetCrowd se provee{" "}
              <strong className="text-white">&quot;tal cual&quot; (as-is)</strong>, sin
              garantías de ningún tipo. No garantizamos disponibilidad continua,
              ausencia de errores ni que la app funcione en todos los dispositivos
              o versiones de sistema operativo.
            </p>
            <p>
              En ningún caso el responsable de BetCrowd será liable por daños
              directos, indirectos, incidentales o consecuentes derivados del uso
              o imposibilidad de uso de la aplicación.
            </p>
            <p>
              BetCrowd no se responsabiliza por el contenido generado por
              usuarios ni por disputas entre participantes de un torneo.
            </p>
          </Section>

          <Divider />

          <Section title="7. Suspensión o eliminación de cuenta">
            <p>
              Nos reservamos el derecho de{" "}
              <strong className="text-white">
                suspender o eliminar cualquier cuenta
              </strong>{" "}
              sin previo aviso en caso de:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>Violación de estos Términos y Condiciones.</li>
              <li>
                Uso fraudulento, abusivo o que perjudique a otros usuarios.
              </li>
              <li>
                Actividad que comprometa la seguridad o integridad de la
                plataforma.
              </li>
            </ul>
            <p>
              Si querés eliminar tu propia cuenta, podés solicitarlo escribiendo
              a{" "}
              <a
                href="mailto:benjacostm100@gmail.com"
                className="text-[#D7263D] hover:underline"
              >
                benjacostm100@gmail.com
              </a>
              . Todos tus datos serán eliminados según lo establecido en nuestra{" "}
              <a href="/privacy" className="text-[#D7263D] hover:underline">
                Política de Privacidad
              </a>
              .
            </p>
          </Section>

          <Divider />

          <Section title="8. Modificaciones a los términos">
            <p>
              Nos reservamos el derecho de{" "}
              <strong className="text-white">
                actualizar estos Términos y Condiciones
              </strong>{" "}
              en cualquier momento. Ante cambios significativos, notificaremos a
              los usuarios a través de la app o por email.
            </p>
            <p>
              El uso continuado de BetCrowd tras la publicación de cambios
              implica la aceptación de los términos actualizados. Si no aceptás
              los nuevos términos, debés dejar de usar la aplicación.
            </p>
          </Section>

          <Divider />

          <Section title="9. Ley aplicable">
            <p>
              Estos Términos y Condiciones se rigen por las leyes de la{" "}
              <strong className="text-white">República Argentina</strong>.
              Cualquier disputa derivada del uso de BetCrowd será sometida a la
              jurisdicción de los tribunales competentes de Argentina.
            </p>
          </Section>

          <Divider />

          {/* Footer info inside card */}
          <div className="text-center space-y-1 pt-2">
            <p className="text-[#666] text-xs uppercase tracking-wider">
              Contacto
            </p>
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

        {/* Footer */}
        <p className="text-[#666] text-sm text-center mt-6">
          BetCrowd — Predicciones y torneos entre amigos
        </p>
      </div>
    </main>
  )
}
