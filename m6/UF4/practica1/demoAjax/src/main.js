document.addEventListener('DOMContentLoaded',  () => {

    function GetPartial(){

      let promise = new Promise(function(resolve, reject){
    let ajax = new XMLHttpRequest();
    ajax.onload = function(){
       resolve(this.responseText)
    }
    ajax.open('GET', '/partial.html')  
    ajax.send()
      })
      return promise
    }
    async function updateAppInfor(){
      let info = await GetPartial()
      console.log(info)
    }
    updateAppInfor()
  // promise.then((result) => document.getElementById('app').innerHTML= result)

})


  // setTimeout( function() {
  //   let ajax = new XMLHttpRequest();
  //   ajax.onload = function () {
  //     let html = this.responseText
  //     let app = document.getElementById('app')
  //     app.innerHTML = html
  //   }
  //   ajax.open('GET', '/partial.html')  
  //   ajax.send()
  // }, 3000)
    
  // } );




// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
