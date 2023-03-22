export function fetchCountries(searchCountry) {
  const url = '?fields=name,capital,population,flags,languages';
  

  return fetch(`https://restcountries.com/v3.1/name/${searchCountry}${url}`)
  .then(response => { if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  )
}

