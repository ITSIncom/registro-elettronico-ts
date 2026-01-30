import { limitedPrompt, strictPrompt } from "../utils";

interface Materia
{
    nome: string;
    professore: string;
}

const MATERIE: Materia[] = [
    { nome: "Matematica", professore: "Mario Rossi" },
    { nome: "Italiano", professore: "Luigi Verdi" },
    { nome: "Informatica", professore: "Matteo Bilotta" }
];

function promptMateria(messaggio: string): number
{
    return limitedPrompt(messaggio, 1, MATERIE.length) - 1;
}

export function visualizzaMaterie(): void
{
    let output = "";

    for (let i = 0; i < MATERIE.length; i += 1)
    {
        const materia = MATERIE[i];

        output += `${i + 1}. ${materia.nome} (${materia.professore})\n`;
    }

    alert(output);
}
export function aggiungiMateria(): void
{
    const nome = strictPrompt("Inserisci il nome della materia:");
    const professore = strictPrompt("Inserisci il nome del prof.:");

    MATERIE.push({ nome, professore });
}
export function modificaMateria(): void
{
    const indice = promptMateria("Quale materia vuoi modificare?");

    const nome = strictPrompt("Inserisci il nuovo nome della materia:");
    const professore = strictPrompt("Inserisci il nuvoo nome del prof.:");

    MATERIE[indice] = { nome, professore };
}
export function eliminaMateria(): void
{
    const indice = promptMateria("Quale materia vuoi eliminare?");
    const ultimo = MATERIE.length - 1;

    MATERIE[indice] = MATERIE[ultimo];
    MATERIE.pop();
}
