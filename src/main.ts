import { aggiungi_materia, visualizza_materie } from "./registro-elettronico/materie";

function main(): void
{
    for (let i = 0; i < 5; i += 1)
    {
        aggiungi_materia();
    }

    visualizza_materie();
}

main();
