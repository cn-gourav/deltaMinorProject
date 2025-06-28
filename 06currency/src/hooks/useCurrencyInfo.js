import { useEffect , useState } from "react";

function useCurrencyInfo(currency) {
     fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((response) => response.json())
            .then((data) => {
               setCurrencyInfo(data);
            })
     const [currencyInfo, setCurrencyInfo] = useState(null);
     useEffect(() => {
          if (currency) {
               fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
                    .then((response) => response.json())
                    .then((data) => {
                         setCurrencyInfo(data);
                    });
          }
     }, [currency]);
     return currencyInfo;
}
