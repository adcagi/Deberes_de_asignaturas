document.addEventListener('DOMContentLoaded',  () => {
    //-------------------Partial HTML-------------------
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
    updateAppInfor()

    

    async function updateAppInfor(){
      let info = await   GetPartial()
      console.log(info)
    }
    //-------------------Partial HTML-------------------


    //-------------------url HTML-------------------
    function getPage(url){
      let promise = new Promise(function(resolve, reject){
        let ajax = new XMLHttpRequest();
        ajax.onload = function(){
          if(this.status >= 200 && this.status < 300){
          resolve(this.responseText)
          }else{
            reject(new Error('Request failed: ' + this.statusText))
          }
          ajax.onerror = function(){
            reject(new Error('Network error'))
          }
        }
      ajax.open('GET', url)
      ajax.send()
      })
      return promise
    }

    async function getiNFO(){
      try{
        let info = await getPage('https://api.dicebear.com/9.x/adventurer/svg?seed=1')
        let jsonData = JSON.parse(info)
        console.log(jsonData)
  
        let app = document.getElementById('app')
        app.innerHTML = `<pre>${JSON.stringify(jsonData, null, 2)}</pre>`

      }catch(error){
        console.error('Error: ')
      }
    }



    getiNFO();
    //-------------------url HTML-------------------
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
