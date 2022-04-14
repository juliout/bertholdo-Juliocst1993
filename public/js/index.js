const divsBanner = [
    {
        "background" : 'bannerBg2',
        "titulo" : 'VENHA CONFERIR NOSSOS PRODUTOS',
        "conteudo" : 'of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially',
        "sub" : 'tent of a page when looking at its layout. The point ',
        "btn" : 'Venha conferir'    
    },
    {
        "background" : 'bannerzin',
        "titulo" : 'VENHA CONFERIR NOSSOS estoque',
        "conteudo" : 'of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially',
        "sub" : 'tent of a page when looking at its layout. The point ',
        "btn" : 'Venha conferir'    
    },
    {
        "background" : 'bannerBg',
        "titulo" : 'PRODUTOS  FÁBRICA modesta',
        "conteudo" : 'Somos especialistas em gôndolas, porta pallets, racks, roupteiros, estantes, e mais diversos outros itens para organizar o armazenamento de produtos.',
        "sub" : 'tent of a page when looking at its layout. The point ',
        "btn" : 'Venha fazer seu orçamento'    
    },
    {
        "background" : 'bannerTal',
        "titulo" : 'VENHA CONFERIR NOSSOS PRODUTOS',
        "conteudo" : 'asdas sadsadsadsadsa sdsdsds  of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially',
        "sub" : 'tent of a page when looking at its layout. The point ',
        "btn" : 'Venha conferir'    
    }
]
const bannerC = document.querySelector('.bannerC')
const bannerMainDiv = document.querySelector('.bannerMainDiv')

let bannerContador = 0
function esquerda () {

    bannerContador = bannerContador - 1
    
    if(bannerContador < 0 ) {
        bannerContador = 3
    }
    if(bannerContador > 3) {
        bannerContador = 0
    }
    bannerC.style.backgroundImage = `url('public/images/${divsBanner[bannerContador].background}.png')`
    
    bannerMainDiv.innerHTML = `
        <div class="bannerText">
            <h1 class="bannerText-titulo">${divsBanner[bannerContador].titulo}</h1>
            <span class="bannerText-conteudo"> ${divsBanner[bannerContador].conteudo}
            </span>
            <h2 class="bannetText-SubTitulo">${divsBanner[bannerContador].sub}!</h2>
            <button class="bannerText-btn">${divsBanner[bannerContador].btn}</button>
        </div>
    `
}

function direita () {

    bannerContador = bannerContador + 1
    
    if(bannerContador < 0 ) {
        bannerContador = 3
    }
    if(bannerContador > 3) {
        bannerContador = 0
    }
    bannerC.style.backgroundImage = `url('public/images/${divsBanner[bannerContador].background}.png')`
    
    bannerMainDiv.innerHTML = `
        <div class="bannerText">
            <h1 class="bannerText-titulo">${divsBanner[bannerContador].titulo}</h1>
            <span class="bannerText-conteudo"> ${divsBanner[bannerContador].conteudo}
            </span>
            <h2 class="bannetText-SubTitulo">${divsBanner[bannerContador].sub}!</h2>
            <button class="bannerText-btn">${divsBanner[bannerContador].btn}</button>
        </div>
    `    
}

//slide de produtos 