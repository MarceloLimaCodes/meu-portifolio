const menu = document.querySelector("#hamb")

menu.addEventListener('click', () => {
    console.log('olá click')
    barLateral = document.createElement('div')
    
})

// barLateral.setAttribute('id', 'bar-lateral')
// barLateral.setAttribute('style', 'position: absolute')
// barLateral.setAttribute('style', 'top: 8vh')
// barLateral.setAttribute('style', 'right: 0')
// barLateral.setAttribute('style', 'width: 50vw')
// barLateral.setAttribute('style', 'background: #23232e')
// barLateral.setAttribute('style', 'flex-direction: column')
// barLateral.setAttribute('style', 'align-items: center')
// barLateral.setAttribute('style', 'justify-content: space-around')
// barLateral.setAttribute('style', 'transform: translateX(100%)')
// barLateral.setAttribute('style', 'transition: transform 0.3s ease-in')
// barLateral.setAttribute('style', 'z-index: 15')



/* 
Ao invés de usar o overflow hidden pra puxar o componete já feito escondido, poderia criar um padding dele com 0 assim que
ele entra no media, ai dentro daqui do arquivo de JS, fazemos o padding rigth dele aumentar dando o efeito que estamos puxando
podemos deixar uma opacidade também
*/