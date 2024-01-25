import React from "react";
import PersonalInfoTable from "@/components/app/impressum/PersonalInfoTable";

const Page: React.FC = () => (
    <div className="w-full mt-[120px] mb-[100px] flex justify-center">
        <div className="w-full max-w-[1150px]">
            
            <h1 className="mb-10 text-4xl font-bold">
                Impressum
            </h1>

            <h3 className="my-5 text-xl font-bold">
                Angaben gemäß § 5 TMG:
            </h3>
            
            <PersonalInfoTable />
            
            <h3 className="my-5 text-xl font-bold">
                Haftungsausschluss
            </h3>
            
            <h4 className="my-5 text-lg font-semibold">
                Haftung für Inhalte
            </h4>
            <p>
                Die Inhalte meiner Webseite wurden mit größtmöglicher Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine
                Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für
                eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet,
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
                nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h4 className="my-5 text-lg font-semibold">
                Haftungsbeschränkung für externe Links
            </h4>
            <p>
                Diese Webseite enthält Links zu externen Webseiten Dritter, auf deren Inhalte
                ich keinen Einfluss habe. Daher kann ich für diese fremden Inhalte auch
                keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
                Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
                Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige
                Links umgehend entfernen.
            </p>
            
            <h4 className="my-5 text-lg font-semibold">
                Urheberrecht
            </h4>
            <p>
                Die von mir erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem Deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden
                die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als
                solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
                aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei
                Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend
                entfernen.
            </p>
            
        </div>
    </div>
)

export default Page