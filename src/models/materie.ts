import { strictPrompt } from "../utils";

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
    const nomeMateria = strictPrompt("Inserisci il nome della materia:");
    const professoreMateria = strictPrompt("Inserisci il nome del prof.:");

    MATERIE.push({
        nome: nomeMateria,
        professore: professoreMateria
    });
}
export function modificaMateria(): void
{
    const indice = Number(prompt("Quale materia vuoi modificare?")) - 1;

    const nomeMateria = strictPrompt("Inserisci il nuovo nome della materia:");
    const professoreMateria = strictPrompt("Inserisci il nuvoo nome del prof.:");

    MATERIE[indice] = {
        nome: nomeMateria,
        professore: professoreMateria
    };
}
export function eliminaMateria(): void
{
    const indice = Number(prompt("Quale materia vuoi eliminare?")) - 1;
    const ultimo = MATERIE.length - 1;

    MATERIE[indice] = MATERIE[ultimo];
    MATERIE.pop();
}
