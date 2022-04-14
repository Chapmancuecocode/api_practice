//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//api.nasa.gov

//ODnxZ9c4XPCuvTZsIE7atavkoJNxlUR44nSS88rn

//https://api.nasa.gov/planetary/apod?api_key=ODnxZ9c4XPCuvTZsIE7atavkoJNxlUR44nSS88rn

