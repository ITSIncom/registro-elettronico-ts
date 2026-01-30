import { aggiungiAlunno, eliminaAlunno, modificaAlunno, visualizzaAlunni } from "./models/alunni";
import { aggiungiMateria, eliminaMateria, modificaMateria, visualizzaMaterie } from "./models/materie";
import { limitedPrompt } from "./utils";

function menuMaterie(): void
{
    let risposta: number;

    do
    {
        risposta = limitedPrompt(
            "Cosa vuoi fare?\n" +
            " 1. Visualizzare tutte le materie.\n" +
            " 2. Aggiungere una nuova materia.\n" +
            " 3. Modificare una materia esistente.\n" +
            " 4. Eliminare una materia esistente.\n" +
            " 0. Tornare indietro.", 0, 4);

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
        }
    }
    while (risposta !== 0);
}
function menuAlunni(): void
{
    let risposta: number;

    do
    {
        risposta = limitedPrompt(
            "Cosa vuoi fare?\n" +
            " 1. Visualizzare tutti gli alunni.\n" +
            " 2. Aggiungere un nuovo alunno.\n" +
            " 3. Modificare un alunno esistente.\n" +
            " 4. Eliminare un alunno esistente.\n" +
            " 0. Tornare indietro.", 0, 4);

        switch (risposta)
        {
            case 1:
                visualizzaAlunni();
                break;

            case 2:
                aggiungiAlunno();
                break;

            case 3:
                modificaAlunno();
                break;

            case 4:
                eliminaAlunno();
                break;
        }
    }
    while (risposta !== 0);
}

function main(): void
{
    let risposta: number;

    do
    {
        risposta = limitedPrompt(
            "Cosa vuoi gestire?\n" +
            " 1. Materie.\n" +
            " 2. Alunni.\n" +
            " 0. Uscire dal programma.", 0, 2);

        switch (risposta)
        {
            case 1:
                menuMaterie();
                break;

            case 2:
                menuAlunni();
                break;
        }
    }
    while (risposta !== 0);
}

main();
