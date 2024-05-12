let timer = document.getElementById("timer");
let speedTypingTest = document.getElementById("speedTypingTest");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinnet = document.getElementById("spinnet");
spinnet.classList.add("spinner-border");
spinnet.classList.remove("spinner-border");
spinnet.classList.add("spinner-border");
let c = 0;

function ssm() {
    let ss = setInterval(function() {
        c = c + 1;
        timer.textContent = c + "seconds";
    }, 1000);
    resetBtn.addEventListener("click", function() {
        clearInterval(ss);

    });
    submitBtn.addEventListener("click", function() {
        clearInterval(ss);

    });



}

function ip() {
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)

        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            let ds = jsondata.content;
            quoteDisplay.textContent = jsondata.content;

            function u() {
                if (ds === quoteInput) {
                    result.textContent = "You Typed in" + c + "seconds";
                } else {
                    result.textContent = "you Typed incorrect sentence";
                }

            }




            submitBtn.addEventListener("click", u);
        });
}




resetBtn.addEventListener("click", ip);



ip();
ssm();