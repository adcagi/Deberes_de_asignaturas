document.addEventListener('DOMContentLoaded', () => {
  //-------------------Partial HTML-------------------
  function GetPartial() {
    let promise = new Promise(function(resolve, reject) {
      let ajax = new XMLHttpRequest();
      ajax.onload = function() {
        resolve(this.responseText);
      };
      ajax.onerror = function() {
        reject(new Error('Network error'));
      };
      ajax.open('GET', '/partial.html');
      ajax.send();
    });
    return promise;
  }

  async function updateAppInfor() {
    let info = await GetPartial();
    console.log(info);
  }

  //-------------------Partial HTML-------------------

  //-------------------url HTML-------------------
  function getPage(url) {
    let promise = new Promise(function(resolve, reject) {
      let ajax = new XMLHttpRequest();
      ajax.onload = function() {
        resolve(this.responseText);
      };
      ajax.onerror = function() {
        reject(new Error('Network error'));
      };
      ajax.open('GET', url);
      ajax.send();
    });
    return promise;
  }

  async function getiNFO() {
      let info = await getPage('https://jsonplaceholder.typicode.com/posts');

      let jsonData = JSON.parse(info);
      let element = document.getElementById('app');
      
      
        for(let i in jsonData){
          let info2 = await getPage('https://jsonplaceholder.typicode.com/users/' + jsonData[i].userId);
          let info3 = await getPage('https://jsonplaceholder.typicode.com/posts/' + jsonData[i].userId + '/comments');
          let pic = await getPage('https://api.dicebear.com/9.x/adventurer/svg?seed=' + i);
          let userComments = JSON.parse(info3);
          let userData = JSON.parse(info2);
          
            element.innerHTML += `
            <div id="app"><h1></h1></div>
            <div id="proyecto">
              <div id="imagen">${pic}</div>
                <div id="info">
                  <div id="nombre">${userData.username}</div>
                <div id="descripcion">${jsonData[i].body}</div>
                <div id="comments">${userComments.length}</div>
            </div>  
          </div>
          `
      }
  }

  getiNFO();
  updateAppInfor();
});

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
