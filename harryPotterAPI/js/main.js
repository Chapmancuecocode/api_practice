document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  // const choice = document.querySelector('input').value
  const url = 'http://hp-api.herokuapp.com/api/characters/students'

  let ranNum = Math.floor(Math.random() * 100)

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#name').innerText = data[ranNum].name
        document.querySelector('img').src = data[ranNum].image
        document.querySelector('#house').innerText = data[ranNum].house
        document.querySelector("#dateOfBirth").innerText = data[ranNum].dateOfBirth
        // document.querySelector('#wand').innerText = data[ranNum].wand[0,1,2]
        document.querySelector('#patronus').innerText = data[ranNum].patronus
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//api.nasa.gov

//ODnxZ9c4XPCuvTZsIE7atavkoJNxlUR44nSS88rn

//https://api.nasa.gov/planetary/apod?api_key=ODnxZ9c4XPCuvTZsIE7atavkoJNxlUR44nSS88rn

