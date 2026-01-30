import { datePrompt, formatDate, limitedPrompt } from "@/utils";
import { getMateria, type Materia } from "./materie";

export interface Voto
{
    materia: Materia;
    valore: number;
    data: Date;
}

function promptVoto(voti: Voto[], messaggio: string): number
{
    return limitedPrompt(messaggio, 1, voti.length) - 1;
}

export function visualizzaVoti(voti: Voto[]): void
{
    let output = "";

    for (let i = 0; i < voti.length; i += 1)
    {
        const voto = voti[i];

        output += `${i + 1}. ${voto.valore} in ${voto.materia.nome} del ${formatDate(voto.data)}\n`;
    }

    alert(output);
}
export function aggiungiVoto(voti: Voto[]): void
{
    const valore = limitedPrompt("Inserisci il valore del voto:", 1, 10);
    const materia = getMateria("Seleziona la materia per il voto:");
    const data = datePrompt("Inserisci la data del voto:");

    voti.push({ materia, valore, data });
}
export function modificaVoto(voti: Voto[]): void
{
    const indice = promptVoto(voti, "Quale voto vuoi modificare?");

    const valore = limitedPrompt("Inserisci il nuovo valore del voto:", 1, 10);
    const materia = getMateria("Seleziona la nuova materia per il voto:");
    const data = datePrompt("Inserisci la nuova data del voto:");

    voti[indice] = { materia, valore, data };
}
export function eliminaVoto(voti: Voto[]): void
{
    const indice = promptVoto(voti, "Quale voto vuoi eliminare?");
    const ultimo = voti.length - 1;

    voti[indice] = voti[ultimo];
    voti.pop();
}

function calcolaMediaMateria(): void
{
    // TODO!
}
function calcolaMediaGlobale(): void
{
    // TODO!
}
