export function strictPrompt(message: string): string
{
    let risposta: string | null;

    do
    {
        risposta = prompt(message);
    }
    while (!(risposta));

    return risposta;
}
