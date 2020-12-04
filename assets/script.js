// Global Variables

var workExpButton = $("#resumeWorkExperience");
var certificatesButton = $("#resumeCertifications");
var educationButton = $("#resumeEducation");

var workExpInfo = $(".resumeWorkExperienceInfo");
var certificatesInfo = $(".resumeCertificationsInfo");
var educationInfo = $(".resumeEducationInfo");

//Functions
////////////////////

//Functions for collapsing resume targets

function workExpCollapse(){

    certificatesInfo.removeClass("hide show");
    educationInfo.removeClass("hide show");
    workExpInfo.removeClass("hide show");
    
    certificatesInfo.addClass("hide");
    educationInfo.addClass("hide");
    setTimeout(function(){
        workExpInfo.addClass("show")
    },100)
}

function certificateExpCollapse(){

    certificatesInfo.removeClass("hide show");
    educationInfo.removeClass("hide show");
    workExpInfo.removeClass("hide show");
    
    workExpInfo.addClass("hide");
    educationInfo.addClass("hide");
    setTimeout(function(){
        certificatesInfo.addClass("show")
    },100)
}

function educationExpCollapse(){

    certificatesInfo.removeClass("hide show");
    educationInfo.removeClass("hide show");
    workExpInfo.removeClass("hide show");
    
    workExpInfo.addClass("hide");
    certificatesInfo.addClass("hide");
    setTimeout(function(){
        educationInfo.addClass("show")
    },100)
}

// typwriter effect for header

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

//Call Functions
//////////////////

workExpButton.on("click",workExpCollapse);
certificatesButton.on("click",certificateExpCollapse);
educationButton.on("click",educationExpCollapse);