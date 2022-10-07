/* Desenvolva sua lógica aqui ... */
function handleDarkMode() {
    const dmButton = document.getElementById('darkMode')
    const dmIcon = document.getElementById('dmIcon')
    const html = document.querySelector('html')
  
    dmButton.addEventListener('click', () => {
      html.classList.toggle('dark-mode')
      dmIcon.classList.toggle('text-white')
  
      const dmPref = localStorage.getItem('darkmode')
  
      if(!dmPref) {
        localStorage.setItem('darkmode', true)
      }
  
      if(dmPref) {
        localStorage.removeItem('darkmode')
      }
  
      if(dmIcon.classList.contains('text-white')) {
        dmIcon.src = './assets/img/sun.png'
      } else {
        dmIcon.src = './assets/img/moon.png'
      }
    })
  }
  
  handleDarkMode()