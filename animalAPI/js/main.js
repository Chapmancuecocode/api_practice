document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://zoo-animal-api.herokuapp.com/animals/rand'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.name
        document.querySelector('img').src = data.image_link

        document.querySelector('#habitat').innerText = data.habitat
        document.querySelector('#diet').innerText = data.diet
        document.querySelector('#lName').innerText = data.latin_name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//api.nasa.gov

//ODnxZ9c4XPCuvTZsIE7atavkoJNxlUR44nSS88rn

//https://api.nasa.gov/planetary/apod?api_key=ODnxZ9c4XPCuvTZsIE7atavkoJNxlUR44nSS88rn

