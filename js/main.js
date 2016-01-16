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
    
    var now = new Date();
    var hours = now.getHours();
    var greeting_message;
    
    if(hours<12){
        greeting_message = "Good morning";
    } else if(hours<18) {
        greeting_message = "Good afternoon";
    } else {
        greeting_message = "Good evening";
    }
    
    $(".aboutSection h1 span").typed({
        strings: [greeting_message + ",^1000 I'm a professional <span id='h1words'>web designer</span> with several years' experience across all major platforms."],
        contentType: 'html',
        showCursor: true,
        typeSpeed: 20,
        backSpeed: 30,
        loop: false,
        callback: function() {
            setTimeout(function(){
                $(".aboutSection h1 .typed-cursor").hide();
                $("#h1words").typed({
                    strings: ["progammer^1000", "programmer^2000", "web deisgner^1000", "web designer^2000"],
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
        ['html', 1],
        ['css', 1],
        ['js', 0.7],
        ['php', 0.7],
        ['mysql', 0.8],
        ['wordpress', 0.8],
        ['photoshop', 0.8],
        ['seo', 0.9],
        ['laravel', 0.7]
    ];

    if($(window).width() < 991) {
        skillIinit = initializeSkill();
    }

    $('#fullpage').fullpage({
        menu: 'header',
        anchors:['about', 'skills', 'education', 'work', 'personal', 'achv', 'contact', 'acrd'],
        navigation: true,
        verticalCentered: true,
        scrollOverflow: false,
        normalScrollElements: '.item, .map, #map-canvas, #contact_name, #email, #comment',
        responsive: 991,
        afterLoad: function(anchorLink, index){
            /* Skill Section */
            if(index == 2) {

                if(skillIinit == false) {
                    skillIinit = initializeSkill();
                }
            }
        },
    });

    $('.slider.item').antiscroll();

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
                sweetAlert('Failed', 'Please fill in all the required fields!', 'error');
            }
            return valid;
        },
        success : function() {
            sweetAlert('Success', 'Your message has been sent!', 'success');
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
                fill: { color: '#ffa500' }
            });
        });
        return true;
    }

});

$(window).resize(function(){

});