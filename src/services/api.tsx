const BASE_URL = "https://api.exchangerate-api.com/v4/latest"

interface ExchangeRateResponse {
    base: string;
    date: string;
    rates: Record<string, number>;
}

export async function exchangeRateApi(fromCurrency: string): Promise<ExchangeRateResponse | undefined> {

    try {
        const response = await fetch(`${BASE_URL}/${fromCurrency}`)
        const data = await response.json()
        return data

    } catch (error) {
        console.error(error)
        return undefined
    }




}

export function convertCurrency(amount: string, rate: number): number {
    return parseFloat((parseFloat(amount) * rate).toFixed(2))

}