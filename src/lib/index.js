var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 250,
	height : 250
    
});

function makeCode () {		
	var elText = document.getElementById("text");
	
	
	qrcode.makeCode(elText.value);
}

makeCode();

var image = document.getElementById('qrcode');


function PrintElem(elem)
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById("qrcode").innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}

