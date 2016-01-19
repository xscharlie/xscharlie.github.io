$(document).ready(function(){

    $('.loading').css('display', 'none');

    outdatedBrowser({
        bgColor: '#f25648',
        color: '#ffffff',
        lowerThan: 'transform',
        languagePath: 'outdatedbrowser/lang/en.html'
    });

    /*$("#h1Words").typed({
        strings: ["web deisgner", "web designer^2000", "progammer", "programmer^2000"],
        typeSpeed: 75,
        backSpeed: 30,
        loop: true,
    });*/
    
    
    $(".aboutSection h1 span").typed({
        strings: ["^1000 Hola, soy un profesional <span id='h1words'>en el diseño web,</span> con años de experiencia en las principales tecnologías."],
        contentType: 'html',
        showCursor: true,
        typeSpeed: 20,
        backSpeed: 30,
        loop: false,
        callback: function() {
            setTimeout(function(){
                $(".aboutSection h1 .typed-cursor").hide();
                $("#h1words").typed({
                    strings: ["en el desarrollo web,^1000", "en el diseño y desarrollo web,^2000", "en el desarrollo móvil,^1000", "en el diseño y desarrollo móvil,^2000"],
                    startDelay: 0,
                    typeSpeed: 100,
                    backSpeed: 50,
                    loop: true,
                    highlight: true,
                    customBack: true,
                    startBackspace: true,
                    contentType: 'html'
                });
            }, 2000);
        },
    });

    var skillIinit = false;
    var skillArray = [
        ['server', 1],
        ['backend', 1],
        ['frontend', 0.7],
        ['uiux', 0.7],
        ['seo', 0.8],
        ['mobile', 0.8],
        
    ];

    if($(window).width() < 991) {
        skillIinit = initializeSkill();
    }

    $('a[href*=#]').anchor({
        transitionDuration : 1200
    });

    /*$('#fullpage').fullpage({
        menu: 'header',
        anchors:['about', 'skills', 'education', 'work', 'personal', 'contact'],
        navigation: true,
        navigationTooltips: ['about', 'skills', 'education', 'work', 'personal', 'contact'], 
        verticalCentered: true,
        scrollOverflow: false,
        normalScrollElements: '.item, .map, #map-canvas, #contact_name, #email, #comment',
        responsive: 991,
        scrollingSpeed: 1000,
        afterLoad: function(anchorLink, index){
            /* Skill Section 
            if(index == 2) {

                if(skillIinit == false) {
                    skillIinit = initializeSkill();
                }
            }
        },
    });*/

    $('.slider.item').antiscroll();
    skillIinit = initializeSkill();

    $(".slider").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        margin: 10,
        autoHeight : true,
    });

    $('#contact_form').ajaxForm({
        beforeSubmit : function() { 
            var valid = init_validation('#contact_form');
            if(valid == false) {
                sweetAlert('Algo salió mal', '¡Por favor llene todos los campos!Please fill in all the required fields!', 'error');
            }
            return valid;
        },
        success : function() {
            sweetAlert('Exito', '¡Tu mensaje ha sido enviado!', 'success');
            $('#contact_form').resetForm();
        }
    });

    function init_validation(target) {
        function validate(target) {
            var valid = true;
            $(target).find('.req').each(function() {
                if($(this).val() == '') {
                    valid = false;
                    $(this).parent().addClass('errored');
                }
                else {
                    $(this).parent().removeClass('errored');
                }
            });
            return valid;
        }

        $('form.w_validation').on('submit', function(e) {
            var valid = validate(this);
            if(!valid) e.preventDefault();
        });

        if(target) {return validate(target);}
    }

    function initializeSkill(){
        $.each(skillArray, function(index, value){
            var tempSelector = '.' + value[0] + '.circle';
            $(tempSelector).circleProgress({
                startAngle: -Math.PI / 4 * 3,
                value: value[1],
                lineCap: 'round',
                fill: { color: '#2F98BB' }
            });
        });
        return true;
    }

});

$(window).resize(function(){

});