import { datePrompt, formatDate, limitedPrompt, strictPrompt } from "../utils";
import { aggiungiVoto, eliminaVoto, modificaVoto, visualizzaVoti, type Voto } from "./voti";

export interface Alunno
{
    nome: string;
    cognome: string;
    dataNascita: Date;
    voti: Voto[];
}

const ALUNNI: Alunno[] = [
    { nome: "Fabio", cognome: "Bianchi", dataNascita: new Date(2005, 4, 15), voti: [] },
    { nome: "Emanuele", cognome: "Longhi", dataNascita: new Date(2006, 6, 22), voti: [] },
    { nome: "Carlo", cognome: "Trotta", dataNascita: new Date(2005, 11, 3), voti: [] }
];

function promptAlunno(messaggio: string): number
{
    return limitedPrompt(messaggio, 1, ALUNNI.length) - 1;
}

export function ricercaAlunni()
{
    const valore = strictPrompt("Inserisci il nome o il cognome da ricercare:")
        .toLowerCase();

    let output = "";

    for (let i = 0; i < ALUNNI.length; i += 1)
    {
        const { nome, cognome, dataNascita } = ALUNNI[i];

        if (nome.toLowerCase().includes(valore) || cognome.toLowerCase().includes(valore))
        {
            output += `${i + 1}. ${cognome} ${nome} nato il ${formatDate(dataNascita)}\n`;
        }
    }

    alert(output);
}
export function visualizzaAlunni(): void
{
    let output = "";

    for (let i = 0; i < ALUNNI.length; i += 1)
    {
        const alunno = ALUNNI[i];

        output += `${i + 1}. ${alunno.cognome} ${alunno.nome} nato il ${formatDate(alunno.dataNascita)}\n`;
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
    const voti: Voto[] = [];

    ALUNNI.push({ nome, cognome, dataNascita, voti });
    ALUNNI.sort(ordinamentoAlunni);
}
export function modificaAlunno(): void
{
    const indice = promptAlunno("Quale alunno vuoi modificare?");

    const nome = strictPrompt("Inserisci il nuovo nome dell'alunno:");
    const cognome = strictPrompt("Inserisci il nuovo cognome dell'alunno:");
    const dataNascita = datePrompt("Inserisci la nuova data di nascita dell'alunno:");
    const voti = ALUNNI[indice].voti;

    ALUNNI[indice] = { nome, cognome, dataNascita, voti };
    ALUNNI.sort(ordinamentoAlunni);
}
export function eliminaAlunno(): void
{
    const indice = promptAlunno("Quale alunno vuoi eliminare?");
    const ultimo = ALUNNI.length - 1;

    ALUNNI[indice] = ALUNNI[ultimo];
    ALUNNI.pop();
}

export function menuVotiAlunno(): void
{
    const indice = promptAlunno("Per quale alunno vuoi gestire i voti?");
    const alunno = ALUNNI[indice];

    let risposta: number;

    do
    {
        risposta = limitedPrompt(
            `Cosa vuoi fare con i voti dell'alunno ${alunno.cognome} ${alunno.nome}?\n` +
            "1. Visualizzare tutti i voti.\n" +
            "2. Aggiungere un nuovo voto.\n" +
            "3. Modificare un voto esistente.\n" +
            "4. Eliminare un voto esistente.\n" +
            "0. Tornare indietro.", 0, 4);

        switch (risposta)
        {
            case 1:
                visualizzaVoti(alunno.voti);
                break;

            case 2:
                aggiungiVoto(alunno.voti);
                break;

            case 3:
                modificaVoto(alunno.voti);
                break;

            case 4:
                eliminaVoto(alunno.voti);
                break;
        }
    }
    while (risposta !== 0);
}
