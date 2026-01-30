import { datePrompt, formatDate, limitedPrompt, strictPrompt } from "../utils";

interface Alunno
{
    nome: string;
    cognome: string;
    dataNascita: Date;
}

const ALUNNI: Alunno[] = [
    { nome: "Fabio", cognome: "Bianchi", dataNascita: new Date(2005, 4, 15) },
    { nome: "Emanuele", cognome: "Longhi", dataNascita: new Date(2006, 6, 22) },
    { nome: "Carlo", cognome: "Trotta", dataNascita: new Date(2005, 11, 3) }
];

function promptAlunno(messaggio: string): number
{
    return limitedPrompt(messaggio, 1, ALUNNI.length) - 1;
}

export function visualizzaAlunni(): void
{
    let output = "";

    for (let i = 0; i < ALUNNI.length; i += 1)
    {
        const alunno = ALUNNI[i];

        output += `${i + 1}. ${alunno.cognome} ${alunno.nome} (${formatDate(alunno.dataNascita)})\n`;
    }

    alert(output);
}

function ordinamentoAlunni(a: Alunno, b: Alunno): number
{
    const alunnoA = `${a.cognome} ${a.nome}`.toLowerCase();
    const alunnoB = `${b.cognome} ${b.nome}`.toLowerCase();

    if (alunnoA < alunnoB) { return -1; }
    if (alunnoA > alunnoB) { return 1; }

    return 0;
}

export function aggiungiAlunno(): void
{
    const nome = strictPrompt("Inserisci il nome dell'alunno:");
    const cognome = strictPrompt("Inserisci il cognome dell'alunno:");
    const dataNascita = datePrompt("Inserisci la data di nascita dell'alunno:");

    ALUNNI.push({ nome, cognome, dataNascita });
    ALUNNI.sort(ordinamentoAlunni);
}
export function modificaAlunno(): void
{
    const indice = promptAlunno("Quale alunno vuoi modificare?");

    const nome = strictPrompt("Inserisci il nuovo nome dell'alunno:");
    const cognome = strictPrompt("Inserisci il nuovo cognome dell'alunno:");
    const dataNascita = datePrompt("Inserisci la nuova data di nascita dell'alunno:");

    ALUNNI[indice] = { nome, cognome, dataNascita };
    ALUNNI.sort(ordinamentoAlunni);
}
export function eliminaAlunno(): void
{
    const indice = promptAlunno("Quale alunno vuoi eliminare?");
    const ultimo = ALUNNI.length - 1;

    ALUNNI[indice] = ALUNNI[ultimo];
    ALUNNI.pop();
}
