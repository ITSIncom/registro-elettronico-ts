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
function modificaMateria(): void
{
    // TODO!
}
function eliminaMateria(): void
{
    // TODO!
}
