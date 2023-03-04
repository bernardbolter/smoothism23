import React, { useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { motion } from 'framer-motion'

const Daten = () => {
    const [smooth, setSmooth] = useContext(SmoothContext)
    
    return (
        <motion.section
            initial={{ translateX: 0}}
            animate={{ translateX: smooth.viewDaten ? 0 : '100%' }}
            exit={{ translateX: 0 }}
            transition={{ duration: 1 }}
            key="daten"
            className="daten-container"
            style={{ 
                color: smooth.primaryDark, 
                backgroundColor: smooth.secondaryLight ,
                display: smooth.viewFooterItems ? 'block' : 'none'
            }}    
        >
            <div className="daten-content">
                <h1>Datenschutz</h1>
                <h3>Name und Kontakt des Verantwortlichen gemäß Artikel 4 Abs. 7 DSGVO</h3>
                <p>Bernard John Bolter IV<br/>
                Anschrift: Cuvrystr. 32<br/>
                Telefon: 0151 / 4749 1553<br/>
                E-Mail: bernardbolter@gmail.com</p>
                <h3>Sicherheit und Schutz Ihrer personenbezogenen Daten</h3>
                <p>Wir betrachten es als unsere vorrangige Aufgabe, die Vertraulichkeit der von Ihnen bereitgestellten personenbezogenen Daten zu wahren und diese vor unbefugten Zugriffen zu schützen. Deshalb wenden wir äußerste Sorgfalt und modernste Sicherheitsstandards an, um einen maximalen Schutz Ihrer personenbezogenen Daten zu gewährleisten.</p>
                <p>Als privatrechtliches Unternehmen unterliegen wir den Bestimmungen der europäischen Datenschutzgrundverordnung (DSGVO) und den Regelungen des Bundesdatenschutzgesetzes (BDSG). Wir haben technische und organisatorische Maßnahmen getroffen, die sicherstellen, dass die Vorschriften über den Datenschutz sowohl von uns, als auch von unseren externen Dienstleistern beachtet werden.</p>
                <h4>Begriffsbestimmungen</h4>
                <p>Der Gesetzgeber fordert, dass personenbezogene Daten auf rechtmäßige Weise, nach Treu und Glauben und in einer für die betroffene Person nachvollziehbaren Weise verarbeitet werden („Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz“). Um dies zu gewährleisten, informieren wir Sie über die einzelnen gesetzlichen Begriffsbestimmungen, die auch in dieser Datenschutzerklärung verwendet werden:</p>
                <ul>
                <li>
                <p><strong>1. Personenbezogene Daten:</strong> „Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.</p>
                </li>
                <li>
                <p><strong>2. Verarbeitung:</strong> „Verarbeitung“ ist jeder, mit oder ohne Hilfe automatisierter Verfahren, ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.</p>
                </li>
                <li>
                <p><strong>3. Einschränkung der Verarbeitung:</strong> „Einschränkung der Verarbeitung“ ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken.</p>
                </li>
                <li>
                <p><strong>4. Profiling:</strong> „Profiling“ ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.</p>
                </li>
                <li>
                <p><strong>5. Pseudonymisierung:</strong> „Pseudonymisierung“ ist die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden können.</p>
                </li>
                <li>
                <p><strong>6. Dateisystem:</strong> „Dateisystem“ ist jede strukturierte Sammlung personenbezogener Daten, die nach bestimmten Kriterien zugänglich sind, unabhängig davon, ob diese Sammlung zentral, dezentral oder nach funktionalen oder geografischen Gesichtspunkten geordnet geführt wird.</p>
                </li>
                <li>
                <p><strong>7. Verantwortlicher:</strong> „Verantwortlicher“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet; sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so können der Verantwortliche beziehungsweise die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.</p>
                </li>
                <li>
                <p><strong>8. Auftragsverarbeiter:</strong> „Auftragsverarbeiter“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.</p>
                </li>
                <li>
                <p><strong>9. Empfänger:</strong> „Empfänger“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, denen personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten jedoch nicht als Empfänger; die Verarbeitung dieser Daten durch die genannten Behörden erfolgt im Einklang mit den geltenden Datenschutzvorschriften gemäß den Zwecken der Verarbeitung.</p>
                </li>
                <li>
                <p><strong>10. Dritter:</strong> „Dritter“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, außer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten.</p>
                </li>
                <li>
                <p><strong>11. Einwilligung:</strong> Eine „Einwilligung“ der betroffenen Person ist jede freiwillig für den bestimmten Fall, in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.</p>
                </li>
                </ul>
                <h3>Rechtmäßigkeit der Verarbeitung</h3>
                <p>Die Verarbeitung personenbezogener Daten ist nur rechtmäßig, wenn für die Verarbeitung eine Rechtsgrundlage besteht. Rechtsgrundlage für die Verarbeitung können gemäß Artikel 6 Abs. 1 lit. a – f DSGVO insbesondere sein:</p>
                <ul>
                <li>a. Die betroffene Person hat ihre Einwilligung zu der Verarbeitung der sie betreffenden personenbezogenen Daten für einen oder mehrere bestimmte Zwecke gegeben; </li>
                <li>b. die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen; </li>
                <li>c. die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt; </li>
                <li>d. die Verarbeitung ist erforderlich, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen; </li>
                <li>e. die Verarbeitung ist für die Wahrnehmung einer Aufgabe erforderlich, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde; </li>
                <li>f. die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen, insbesondere dann, wenn es sich bei der betroffenen Person um ein Kind handelt.</li>
                </ul>
                <h3>Information über die Erhebung personenbezogener Daten</h3>
                <p>(1) Im Folgenden informieren wir über die Erhebung personenbezogener Daten bei Nutzung unserer Website. Personenbezogene Daten sind z.?B. Name, Adresse, E-Mail-Adressen, Nutzerverhalten.</p>
                <p>(2) Bei einer Kontaktaufnahme mit uns per E-Mail oder über ein Kontaktformular werden die von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von uns gespeichert, um Ihre Fragen zu beantworten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder die Verarbeitung wird eingeschränkt, falls gesetzliche Aufbewahrungspflichten bestehen.</p>
                <h4>Erhebung personenbezogener Daten bei Besuch unserer Website</h4>
                <p>Bei der bloß informatorischen Nutzung der Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur die personenbezogenen Daten, die Ihr Browser an unseren Server übermittelt. Wenn Sie unsere Website betrachten möchten, erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten (Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO):</p>
                <ul>
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                <li>Inhalt der Anforderung (konkrete Seite)</li>
                <li>Zugriffsstatus/HTTP-Statuscode</li>
                <li>jeweils übertragene Datenmenge</li>
                <li>Website, von der die Anforderung kommt</li>
                <li>Browser</li>
                <li>Betriebssystem und dessen Oberfläche</li>
                <li>Sprache und Version der Browsersoftware</li>
                </ul>
                <h4>Einsatz von Cookies</h4>
                <p>(1) Zusätzlich zu den zuvor genannten Daten werden bei der Nutzung unserer Website Cookies auf Ihrem Rechner gespeichert. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrer Festplatte dem von Ihnen verwendeten Browser zugeordnet gespeichert werden und durch welche der Stelle, die den Cookie setzt, bestimmte Informationen zufließen. Cookies können keine Programme ausführen oder Viren auf Ihren Computer übertragen. Sie dienen dazu, das Internetangebot insgesamt nutzerfreundlicher und effektiver zu machen.(2) Diese Website nutzt folgende Arten von Cookies, deren Umfang und Funktionsweise im Folgenden erläutert werden:</p>
                <ul>
                <li>Transiente Cookies (dazu a.)</li>
                <li>Persistente Cookies (dazu b.).</li>
                </ul>
                <p>a. Transiente Cookies werden automatisiert gelöscht, wenn Sie den Browser schließen. Dazu zählen insbesondere die Session-Cookies. Diese speichern eine sogenannte Session-ID, mit welcher sich verschiedene Anfragen Ihres Browsers der gemeinsamen Sitzung zuordnen lassen. Dadurch kann Ihr Rechner wiedererkannt werden, wenn Sie auf unsere Website zurückkehren. Die Session-Cookies werden gelöscht, wenn Sie sich ausloggen oder den Browser schließen.</p>
                <p>b. Persistente Cookies werden automatisiert nach einer vorgegebenen Dauer gelöscht, die sich je nach Cookie unterscheiden kann. Sie können die Cookies in den Sicherheitseinstellungen Ihres Browsers jederzeit löschen.</p>
                <p>c. Sie können Ihre Browser-Einstellung entsprechend Ihren Wünschen konfigurieren und
                z.?B. die Annahme von Third-Party-Cookies oder allen Cookies ablehnen. Sog. „Third Party Cookies“ sind Cookies, die durch einen Dritten gesetzt wurden, folglich nicht durch die eigentliche Website auf der man sich gerade befindet. Wir weisen Sie darauf hin, dass Sie durch die Deaktivierung von Cookies eventuell nicht alle Funktionen dieser Website nutzen können.</p>
                <h4>Weitere Funktionen und Angebote unserer Website</h4>
                <p>(1) Neben der rein informatorischen Nutzung unserer Website bieten wir verschiedene Leistungen an, die Sie bei Interesse nutzen können. Dazu müssen Sie in der Regel weitere personenbezogene Daten angeben, die wir zur Erbringung der jeweiligen Leistung nutzen und für die die zuvor genannten Grundsätze zur Datenverarbeitung gelten.</p>
                <p>(2) Teilweise bedienen wir uns zur Verarbeitung Ihrer Daten externer Dienstleister. Diese wurden von uns sorgfältig ausgewählt und beauftragt, sind an unsere Weisungen gebunden und werden regelmäßig kontrolliert.</p>
                <p>(3) Weiterhin können wir Ihre personenbezogenen Daten an Dritte weitergeben, wenn Aktionsteilnahmen, Gewinnspiele, Vertragsabschlüsse oder ähnliche Leistungen von uns gemeinsam mit Partnern angeboten werden. Nähere Informationen hierzu erhalten Sie bei Angabe Ihrer personenbezogenen Daten oder untenstehend in der Beschreibung des Angebotes.</p>
                <p>(4) Soweit unsere Dienstleister oder Partner ihren Sitz in einem Staat außerhalb des Europäischen Wirtschaftsraumen (EWR) haben, informieren wir Sie über die Folgen dieses Umstands in der Beschreibung des Angebotes.</p>
                <h3>Kinder</h3>
                <p>Unser Angebot richtet sich grundsätzlich an Erwachsene. Personen unter 18 Jahren sollten ohne Zustimmung der Eltern oder Erziehungsberechtigten keine personenbezogenen Daten an uns übermitteln.</p>
                <h3>Rechte der betroffenen Person</h3>
                <h4>(1) Widerruf der Einwilligung</h4>
                <p>Sofern die Verarbeitung der personenbezogenen Daten auf einer erteilten Einwilligung beruht, haben Sie jederzeit das Recht, die Einwilligung zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.</p>
                <p>Für die Ausübung des Widerrufsrechts können Sie sich jederzeit an uns wenden.</p>
                <h4>(2) Recht auf Bestätigung</h4>
                <p>Sie haben das Recht, von dem Verantwortlichen eine Bestätigung darüber zu verlangen, ob wir sie betreffende personenbezogene Daten verarbeiten. Die Bestätigung können Sie jederzeit unter den oben genannten Kontaktdaten verlangen.</p>
                <h4>(3) Auskunftsrecht</h4>
                <p>Sofern personenbezogene Daten verarbeitet werden, können Sie jederzeit Auskunft über diese personenbezogenen Daten und über folgenden Informationen verlangen: </p>
                <ul>
                <li>a. die Verarbeitungszwecke;</li>
                <li>b. den Kategorien personenbezogener Daten, die verarbeitet werden;</li>
                <li>c. die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empfängern in Drittländern oder bei internationalen Organisationen;</li>
                <li>d. falls möglich, die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer;</li>
                <li>e. das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;</li>
                <li>f. das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>
                <li>g. wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden, alle verfügbaren Informationen über die Herkunft der Daten;</li>
                <li>h. das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Artikel 22 Absätze 1 und 4 DSGVO und – zumindest in diesen Fällen – aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person.</li>
                </ul>
                <p>Werden personenbezogene Daten an ein Drittland oder an eine internationale Organisation übermittelt, so haben Sie das Recht, über die geeigneten Garantien gemäß Artikel 46 DSGVO im Zusammenhang mit der Übermittlung unterrichtet zu werden. Wir stellen eine Kopie der personenbezogenen Daten, die Gegenstand der Verarbeitung sind, zur Verfügung. Für alle weiteren Kopien, die Sie Person beantragen, können wir ein angemessenes Entgelt auf der Grundlage der Verwaltungskosten verlangen. Stellen Sie den Antrag elektronisch, so sind die Informationen in einem gängigen elektronischen Format zur Verfügung zu stellen, sofern er nichts anderes angibt. Das Recht auf Erhalt einer Kopie gemäß Absatz 3 darf die Rechte und Freiheiten anderer Personen nicht beeinträchtigen.</p>
                <h4>(4) Recht auf Berichtigung</h4>
                <p>Sie haben das Recht, von uns unverzüglich die Berichtigung Sie betreffender unrichtiger personenbezogener Daten zu verlangen. Unter Berücksichtigung der Zwecke der Verarbeitung haben Sie das Recht, die Vervollständigung unvollständiger personenbezogener Daten – auch mittels einer ergänzenden Erklärung – zu verlangen.</p>
                <h4>(5) Recht auf Löschung („Recht auf vergessen werden“)</h4>
                <p>Sie haben das Recht, von dem Verantwortlichen zu verlangen, dass Sie betreffende personenbezogene Daten unverzüglich gelöscht werden, und wir sind verpflichtet, personenbezogene Daten unverzüglich zu löschen, sofern einer der folgenden Gründe zutrifft:</p>
                <ul>
                <li>a. Die personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.</li>
                <li>b. Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gemäß Artikel 6 Absatz 1 Buchstabe a oder Artikel 9 Absatz 2 Buchstabe a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
                <li>c. Die betroffene Person legt gemäß Artikel 21 Absatz 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder die betroffene Person legt gemäß Artikel 21 Absatz 2 DSGVO Widerspruch gegen die Verarbeitung ein.</li>
                <li>d. Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
                <li>e. Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.</li>
                <li>f. Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Artikel 8 Absatz 1 DSGVO erhoben.</li>
                </ul>
                <p>Hat der Verantwortliche die personenbezogenen Daten öffentlich gemacht und ist er gemäß Absatz 1 zu deren Löschung verpflichtet, so trifft er unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um für die Datenverarbeitung Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu informieren, dass eine betroffene Person von ihnen die Löschung aller Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt hat.</p>
                <p>Das Recht auf Löschung („Recht auf vergessen werden“) besteht nicht, soweit die Verarbeitung erforderlich ist: </p>
                <ul>
                <li>zur Ausübung des Rechts auf freie Meinungsäußerung und Information;</li>
                <li>zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;</li>
                <li>aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Artikel 9 Absatz 2 Buchstaben h und i sowie Artikel 9 Absatz 3 DSGVO;</li>
                <li>für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gemäß Artikel 89 Absatz 1 DSGVO, soweit das in Absatz 1 genannte Recht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder</li>
                <li>zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
                </ul>
                <h4>(6) Recht auf Einschränkung der Verarbeitung</h4>
                <p>Sie haben das Recht, von uns die Einschränkung der Verarbeitung ihrer personenbezogenen Daten zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:</p>
                <ul>
                <li>a. die Richtigkeit der personenbezogenen Daten von der betroffenen Person bestritten wird, und zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen,</li>
                <li>b. die Verarbeitung unrechtmäßig ist und die betroffene Person die Löschung der personenbezogenen Daten ablehnt und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangt;</li>
                <li>c. der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, die betroffene Person sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigt, oder</li>
                <li>d. die betroffene Person Widerspruch gegen die Verarbeitung gemäß Artikel 21 Absatz 1 DSGVO eingelegt hat, solange noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber denen der betroffenen Person überwiegen.</li>
                </ul>
                <p>Wurde die Verarbeitung gemäß den oben genannten Voraussetzungen eingeschränkt, so werden diese personenbezogenen Daten – von ihrer Speicherung abgesehen – nur mit Einwilligung der betroffenen Person oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet. </p>
                <p>Um das Recht auf Einschränkung der Verarbeitung geltend zu machen, kann sich die betroffene Person jederzeit an uns unter den oben angegebenen Kontaktdaten wenden. </p>
                <h4>(7) Recht auf Datenübertragbarkeit</h4>
                <p>Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und Sie haben das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern:</p>
                <ul>
                <li>a. die Verarbeitung auf einer Einwilligung gemäß Artikel 6 Absatz 1 Buchstabe a oder Artikel 9 Absatz 2 Buchstabe a oder auf einem Vertrag gemäß Artikel 6 Absatz 1 Buchstabe b DSGVO beruht und</li>
                <li>b. die Verarbeitung mithilfe automatisierter Verfahren erfolgt.</li>
                </ul>
                <p>Bei der Ausübung des Rechts auf Datenübertragbarkeit gemäß Absatz 1 haben Sie das Recht, zu erwirken, dass die personenbezogenen Daten direkt von einem Verantwortlichen zu einem anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist. Die Ausübung des Rechts auf Datenübertragbarkeit lässt das Recht auf Löschung („Recht auf Vergessen werden“) unberührt. Dieses Recht gilt nicht für eine Verarbeitung, die für die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde.</p>
                <h4>(8) Widerspruchsrecht</h4>
                <p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Artikel 6 Absatz 1 Buchstaben e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Der Verantwortliche verarbeitet die personenbezogenen Daten nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die die Interessen, Rechte und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
                <p>Werden personenbezogene Daten verarbeitet, um Direktwerbung zu betreiben, so haben SIe das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, so werden die personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet.</p>
                <p>Im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft könne Sie ungeachtet der Richtlinie 2002/58/EG Ihr Widerspruchsrecht mittels automatisierter Verfahren ausüben, bei denen technische Spezifikationen verwendet werden.</p>
                <p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Sie betreffende Verarbeitung Sie betreffender personenbezogener Daten, die zu wissenschaftlichen oder historischen Forschungszwecken oder zu statistischen Zwecken gemäß Artikel 89 Absatz 1 erfolgt, Widerspruch einzulegen, es sei denn, die Verarbeitung ist zur Erfüllung einer im öffentlichen Interesse liegenden Aufgabe erforderlich.</p>
                <p>Das Widerspruchsrecht können Sie jederzeit ausüben, indem Sie sich an den jeweiligen Verantwortlichen wenden.</p>
                <h4>(9) Automatisierte Entscheidungen im Einzelfall einschließlich Profiling</h4>
                <p>Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt. Dies gilt nicht, wenn die Entscheidung:</p>
                <ul>
                <li>a. für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich ist,</li>
                <li>b. aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte und Freiheiten sowie der berechtigten Interessen der betroffenen Person enthalten oder</li>
                <li>c. mit ausdrücklicher Einwilligung der betroffenen Person erfolgt.</li>
                </ul>
                <p>Der Verantwortliche trifft angemessene Maßnahmen, um die Rechte und Freiheiten sowie die berechtigten Interessen der betroffenen Person zu wahren, wozu mindestens das Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung gehört.</p>
                <p>Dieses Recht kann die betroffene Person jederzeit ausüben, indem sie sich an den jeweiligen Verantwortlichen wendet.</p>
                <h4>(10) Recht auf Beschwerde bei einer Aufsichtsbehörde</h4>
                <p>Sie haben zudem, unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs, das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn die betroffene Person der Ansicht ist, dass die Verarbeitung der sie betreffenden personenbezogenen Daten gegen diese Verordnung verstößt. </p>
                <h4>(11) Recht auf wirksamen gerichtlichen Rechtsbehelf</h4>
                <p>Sie haben unbeschadet eines verfügbaren verwaltungsrechtlichen oder außergerichtlichen Rechtsbehelfs einschließlich des Rechts auf Beschwerde bei einer Aufsichtsbehörde gemäß <a target="_blank" href="https://dsgvo-gesetz.de/art-77-dsgvo/">Artikel 77 DSGVO</a> das Recht auf einen wirksamen gerichtlichen Rechtsbehelf, wenn sie der Ansicht ist, dass Ihre, aufgrund dieser Verordnung zustehenden Rechte, infolge einer nicht im Einklang mit dieser Verordnung stehenden Verarbeitung Ihrer personenbezogenen Daten verletzt wurden.</p>
                <h4>Einsatz von Plausible Analytics</h4>
                <p>Ich verwende Plausible Analytics, ein DSGVO-, GDPR, CCPA- und Cookie-Gesetz-konformes Website-Analysetool. Es ist mir egal, wer Sie sind, ich bin nur neugierig, wie Sie die Website nutzen. Deshalb habe ich ein Tool gewählt, das sich auf den Datenschutz konzentriert. Mehr dazu finden sie auf der Website von <a target="_blank" href="https://plausible.io/data-policy">plausible</a></p>
            </div>
            <div
                className="daten-close"
                onClick={() => setSmooth(state => ({ ...state, viewDaten: false }))}
            >
                <svg viewBox="0 0 60 60">
                    <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,.4)"/>
                    <path d="M19.881 38.5018L38.5964 19.7863L40.2099 21.3998L21.4945 40.1153L19.881 38.5018Z" fill="black"/>
                    <path d="M19.881 21.3999L21.4945 19.7864L40.2099 38.5019L38.5964 40.1154L19.881 21.3999Z" fill="black"/>
                    <path d="M30.0467 50.0001C24.7299 49.9998 19.6311 47.8875 15.8715 44.1282C12.1119 40.3686 10 35.2695 10 29.9531C10 24.6366 12.1119 19.5375 15.8712 15.778C19.6394 12.0596 24.7252 9.98249 30.0192 10.0001C35.3129 10.0174 40.3851 12.1284 44.1284 15.8716C47.8716 19.6149 49.9824 24.6869 49.9999 29.9808C50.0175 35.2745 47.9404 40.3607 44.222 44.1288C42.3648 45.9961 40.1555 47.4764 37.7223 48.4845C35.2893 49.4922 32.6805 50.0076 30.0468 50.0009L30.0467 50.0001ZM30.0467 12.192C26.5311 12.1892 23.0937 13.2297 20.1697 15.1821C17.2459 17.1342 14.9673 19.9104 13.6227 23.1584C12.2778 26.4066 11.927 29.9807 12.615 33.428C13.3032 36.8757 14.9989 40.0415 17.4876 42.525C20.8201 45.8556 25.3396 47.7263 30.0515 47.725C34.7634 47.7238 39.2819 45.8508 42.6123 42.518C45.9432 39.1855 47.8139 34.666 47.8123 29.9541C47.8111 25.2422 45.9381 20.7237 42.6056 17.3933C40.9597 15.7395 39.0024 14.4283 36.8468 13.5351C34.691 12.6423 32.3799 12.1857 30.0467 12.1915V12.192Z" fill="black"/>
                </svg>
            </div>
        </motion.section>
    )
}

export default Daten