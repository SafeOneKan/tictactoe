const O_class = 'o';
const X_class = 'x';
let Xturn =true;
const Container = document.getElementById('cont')
let winmsg = document.querySelector('.winmsg');
let win = document.querySelector('.win')
let reset = document.querySelector('#reset')

reset.addEventListener('click',restart)

function restart(){
    location.reload()
}

const wins =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],]


    v = document.querySelectorAll("[data-cell]")
    let table = Array.from(v)

    start()




function start(){
    
    table.forEach((e) => {
        e.addEventListener("click",startgame,{once : true});
        hover()
    } )
}
function startgame(e){
    const cell = e.target;
    const thisclass = Xturn ? X_class : O_class;
    addmark(cell,thisclass);
    swap()
    hover()
    if(check_wins(thisclass)){
        winmsg.style.display = "flex";
        win.innerText =`${thisclass} wins`
        
    }
    else if (isDraw())
    {
        winmsg.style.display = "flex";
        
        win.innerText =`Its A Draw`
    }
}

function addmark(cell,thisclass){
    cell.classList.add(thisclass)
}
function swap(){
   Xturn = !Xturn;
}
function hover(){
    Container.classList.remove(X_class)
    Container.classList.remove(O_class)
    if(Xturn){
        Container.classList.add(X_class)
    }
    else{
        Container.classList.add(O_class)
    }
}


function check_wins(thisclass){
    return wins.some(com =>{
     return   com.every(i => {
          return  table[i].classList.contains(thisclass)
        })
    })
}
function isDraw(){
    return table.every(Element =>{
      return  Element.classList.contains(X_class) || Element.classList.contains(O_class)
    })
}
