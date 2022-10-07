
export const getExchanges = () =>
  fetch('https://api.coinpaprika.com/v1/coins/doge-dogecoin/exchanges').then(res =>
    res.json()
  )

export const getExchange = (exchange) =>
  fetch(`https://api.coinpaprika.com/v1/exchanges/${exchange}`).then(res =>
    res.json()
  )