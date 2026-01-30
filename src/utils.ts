export function strictPrompt(messaggio: string): string
{
    let risposta = prompt(messaggio);
    while (!(risposta))
    {
        risposta = prompt(
            "Hai inserito una stringa vuota non valida. Riprova.\n" +
            messaggio
        );
    }

    return risposta;
}

export function promptNumber(messaggio: string): number
{
    let valore = Number(prompt(messaggio));
    while (Number.isNaN(valore))
    {
        valore = Number(prompt(
            "Hai inserito un valore numerico non valido. Riprova.\n" +
            messaggio
        ));
    }

    return valore;
}
export function limitedPrompt(messaggio: string, min: number, max: number): number
{
    let valore = promptNumber(messaggio);
    while ((valore < min) || (valore > max))
    {
        valore = promptNumber(
            `Il valore deve essere compreso tra ${min} e ${max}. Riprova.\n` +
            messaggio
        );
    }

    return valore;
}

export function datePrompt(messaggio: string): Date
{
    const _extractDate = (input: string | null): Date | null =>
    {
        if (!(input)) { return null; }

        const parti = input.split("/");
        if (parti.length === 3)
        {
            const giorno = Number(parti[0]);
            const mese = Number(parti[1]) - 1;
            const anno = Number(parti[2]);

            const data = new Date(anno, mese, giorno);
            if ((data.getFullYear() === anno) && (data.getMonth() === mese) && (data.getDate() === giorno))
            {
                return data;
            }
        }

        return null;
    };

    messaggio += " (GG/MM/AAAA)";

    let data = _extractDate(prompt(messaggio));
    while (data === null)
    {
        data = _extractDate(prompt(
            "Hai inserito una data non valida. Riprova.\n" +
            messaggio
        ));
    }

    return data;
}

export function formatDate(data: Date): string
{
    const giorno = data.getDate().toString()
        .padStart(2, "0");

    const mese = (data.getMonth() + 1).toString()
        .padStart(2, "0");

    const anno = data.getFullYear().toString();

    return `${giorno}/${mese}/${anno}`;
}
