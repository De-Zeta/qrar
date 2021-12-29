// QR Generator
var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 250,
	height : 250,
    colorDark : "#0e0108",
	colorLight : "#ffffff"
    
});


let count = 0
document.getElementById('count').innerHTML =`  ${count} <i class="fas fa-comment"></i>`

function makeCode () {		
	var elText = document.getElementById("text");
	
	qrcode.makeCode(elText.value);
    
    count++
    document.getElementById('count').innerHTML =`  ${count} <i class="fas fa-comment"></i>`
    

}

makeCode();

var image = document.getElementById('qrcode')

image.style.border = '12px solid white';


function PrintElem(elem)
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}


// menu responsive
const mainMenu = document.querySelector(".main-menu")
const closeMenu = document.querySelector(".close-menu")
const openMenu = document.querySelector(".open-menu")
  


const show = () => {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';    
}

const close = () => {
    mainMenu.style.top = '-1000%'
    mainMenu.style.margin = '0'
}

const setSrc = () => {

    const qrImg = document.getElementById('qrcode').getElementsByTagName('img')[0].getAttribute('src')

    document.getElementById('qrcode').getElementsByTagName('img')[0].style.border = '12px solid white'
    document.getElementById('get-image').setAttribute('href', qrImg)
    console.log(qrImg)
}





openMenu.addEventListener('click', show);
closeMenu.addEventListener('click',close);
// End menu responsive

const createQr = document.getElementById('create')
createQr.addEventListener('click', setSrc)




