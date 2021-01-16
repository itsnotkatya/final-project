let i = 0;
var txt = ["Welcome, User!",
    " You have been in coma for the last five years. No one knows what caused this.",
    " You were found deep in the woods in 2016."," What is your name? Will you tell us what have you seen?",
    " ...Anyway.",
    " We will show you what happened while you were asleep"];
var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this position
var iArrLength = txt[1].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("intro");

    while ( iRow < iIndex ) {
        sContents += txt[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + txt[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
        if ( iIndex != txt.length ) {
            iArrLength = txt[iIndex].length;
            setTimeout("typewriter()", 100);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}

function fade_out() {
    $("#intro").fadeOut().empty();
    document.getElementById("navigation").style.display = "block";
}

function pop_out() {
    $("#navigation").fadeIn();
}

function showContent(link, place, number) {

    var cont = document.getElementById(place);
    var http = createRequestObject();					// создаем ajax-объект
    if( http ) {
        http.open('get', link);// инициируем загрузку страницы
        http.onreadystatechange = function () {			// назначаем асинхронный обработчик события
            if(http.readyState == 4) {
                if (number === null) {
                    cont.innerHTML = http.responseText;
                } else {
                    let newinfo = http.responseText.split('\n')[number];
                    console.log(newinfo);
                    cont.innerHTML = newinfo;
                }
            }
        }
        http.send(null);
    } else {
        document.location = link;	// если ajax-объект не удается создать, просто перенаправляем на адрес
    }
}

function createRequestObject() {
    try { return new XMLHttpRequest() }
    catch(e) {
        try { return new ActiveXObject('Msxml2.XMLHTTP') }
        catch(e) {
            try { return new ActiveXObject('Microsoft.XMLHTTP') }
            catch(e) { return null; }
        }
    }
}

async function main(order) {
    emailjs.init('YOUR_USER_ID');
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', resume)  //Insert your email service ID and email template ID
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}

function send() {
    var name = document.getElementById("1").value;
    var skills = document.getElementById("2").value;
    var purposes = document.getElementById("3").value;
    var email = document.getElementById("3").value;

    let resume = {
        name: name,
        skills: skills,
        purposes: purposes,
        email: email,
    };
    return resume
}

window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
});

typewriter();
setTimeout(fade_out, 18000);
setTimeout(pop_out,18000);
