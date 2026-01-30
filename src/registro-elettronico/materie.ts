interface Materia
{
    nome: string;
    professore: string;
}

const MATERIE: Materia[] = [];

export function visualizza_materie(): void
{
    console.log(MATERIE);
}
export function aggiungi_materia(): void
{
    const nomeMateria = prompt("Inserisci il nome della materia:");
    const professoreMateria = prompt("Inserisci il nome del prof.:");

    MATERIE.push({
        nome: nomeMateria,
        professore: professoreMateria
    });
}
function modifica_materia(): voidz
{
    // TODO!
}
function elimina_materia(): void
{
    // TODO!
}
