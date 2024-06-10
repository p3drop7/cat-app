const CAT_FACT_ENDPOINT = "https://catfact.ninja/fact"

export const getRandomCatFact = () => {
    return fetch(CAT_FACT_ENDPOINT)
        .then(res => res.json())
        .then(res => {
            const data = res.fact
            return data
        })
}