import { aggiungiMateria, eliminaMateria, modificaMateria, visualizzaMaterie } from "./models/materie";

function menuMateria(): void
{
    let risposta: number;

    do
    {
        risposta = Number(prompt(
            "Cosa vuoi fare?\n" +
            " 1. Visualizzare tutte le materie.\n" +
            " 2. Aggiungere una nuova materia.\n" +
            " 3. Modificare una materia esistente.\n" +
            " 4. Eliminare una materia esistente.\n" +
            " 0. Uscire."
        ));

        switch (risposta)
        {
            case 1:
                visualizzaMaterie();
                break;

            case 2:
                aggiungiMateria();
                break;

            case 3:
                modificaMateria();
                break;

            case 4:
                eliminaMateria();
                break;

            case 0:
                break;

            default:
                alert("Non è una scelta valida. Riprova.");
                break;
        }
    }
    while (risposta != 0);
}

function main(): void
{
    menuMateria();
}

main();
