function firstTask() {
    $(document).ready(function(){
        $('.calc-container').css('display', 'block');
        $('.clc').click(function(){
            $('#display').val($(display).val() + $(this).val());
        });
        $('.clear').click(function(){
            $('#display').val(' ');
        });
        $('.result-of-calc').click(function(){
            $('#display').val(eval($('#display').val()));
        });
    });
}

function secondTask() {
    $(document).ready(function() {
        $('#first-task').css("display", "block");

        $('.tabs-content-item').not(':first').hide();
        $('.tabs-nav-menu .tab-button').click(function() {
            $('.tabs-continer .tab-button').removeClass('active').eq($(this).index()).addClass('active');
            $('.tabs-content-item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');
    });
}

const chooseTask = +prompt('Enter number of task, you want to check(1-2)');

switch(chooseTask) {
    case 1:
        firstTask();
        break;
    case 2:
        secondTask();
        break;
    default:
        
        break;
}