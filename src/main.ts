import {
    aggiungiAlunno,
    eliminaAlunno,
    menuVotiAlunno,
    modificaAlunno,
    ricercaAlunni,
    visualizzaAlunni

} from "./models/alunni";
import { aggiungiMateria, eliminaMateria, modificaMateria, visualizzaMaterie } from "./models/materie";
import { limitedPrompt } from "./utils";

function menuMaterie(): void
{
    let risposta: number;

    do
    {
        risposta = limitedPrompt(
            "Cosa vuoi fare?\n" +
            "1. Visualizzare tutte le materie.\n" +
            "2. Aggiungere una nuova materia.\n" +
            "3. Modificare una materia esistente.\n" +
            "4. Eliminare una materia esistente.\n" +
            "0. Tornare indietro.", 0, 4);

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
            "1. Ricerca alunni.\n" +
            "2. Visualizzare tutti gli alunni.\n" +
            "3. Gestire i voti di un alunno.\n" +
            "4. Aggiungere un nuovo alunno.\n" +
            "5. Modificare un alunno esistente.\n" +
            "6. Eliminare un alunno esistente.\n" +
            "0. Tornare indietro.", 0, 6);

        switch (risposta)
        {
            case 1:
                ricercaAlunni();
                break;

            case 2:
                visualizzaAlunni();
                break;

            case 3:
                menuVotiAlunno();
                break;

            case 4:
                aggiungiAlunno();
                break;

            case 5:
                modificaAlunno();
                break;

            case 6:
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
            "1. Materie.\n" +
            "2. Alunni.\n" +
            "0. Uscire dal programma.", 0, 2);

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
