$(function(){


    var i = 0;
    var time = setInterval(function(){
        i--;
        $('.mod').css('marginLeft',i)
        if(i == -2400){
            i=0;
        }
    },10)

    $('span').eq(0).click(function(){
    	window.location.href='./page_1.html'
    })
    $('span').eq(1).click(function(){
        window.location.href='./page_2.html'
    })
    $('span').eq(2).click(function(){
        window.location.href='./page_3.html'
    })
    $('span').eq(3).click(function(){
        window.location.href='./page_4.html'
    })
    $('span').eq(4).click(function(){
        window.location.href='./page_5.html'
    })
    $('span').eq(5).click(function(){
        window.location.href='./page_6.html'
    })
    $('span').eq(6).click(function(){
        window.location.href='./page_7.html'
    })
    $('span').eq(7).click(function(){
        window.location.href='./page_8.html'
    })
    $('span').eq(8).click(function(){
        window.location.href='./page_9.html'
    })
    $('span').eq(9).click(function(){
        window.location.href='./page_10.html'
    })
    $('span').eq(10).click(function(){
        window.location.href='./page_11.html'
    })
    $('span').eq(11).click(function(){
        window.location.href='./page_12.html'
    })


    $('span').eq(12).click(function(){
        window.location.href='./page_1.html'
    })
    $('span').eq(13).click(function(){
        window.location.href='./page_2.html'
    })
    $('span').eq(14).click(function(){
        window.location.href='./page_3.html'
    })
    $('span').eq(15).click(function(){
        window.location.href='./page_4.html'
    })
    $('span').eq(16).click(function(){
        window.location.href='./page_5.html'
    })
    $('span').eq(17).click(function(){
        window.location.href='./page_6.html'
    })
    $('span').eq(18).click(function(){
        window.location.href='./page_7.html'
    })
    $('span').eq(19).click(function(){
        window.location.href='./page_8.html'
    })
    $('span').eq(20).click(function(){
        window.location.href='./page_9.html'
    })
    $('span').eq(21).click(function(){
        window.location.href='./page_10.html'
    })
    $('span').eq(22).click(function(){
        window.location.href='./page_11.html'
    })
    $('span').eq(23).click(function(){
        window.location.href='./page_12.html'
    })
    var arr = ['Daisy Doronila','Deborah Eubanks Stevers','Joseph Anthony bongiorno Sr',
                'Kious Kelly','Kurt Julian','Liang wudong','Liu Fan','liwenliang',
                'Nina Forbes','Paul Charon','Robert Weber','Sandra Hardy Rogers'
    ]
    var arrs = ['April 5,2020','May 12,2020','April 14,2020','Mar 24, 2020','May 29,2020',
                'Jan 25,2020','May 12,2020','Feb7,2020','April 25,2020','May 14,2020',
                'Apr 15, 2020','May 1,2020 '
    ]
    $('span').mouseenter(function(){
        let i = $(this).index()
        if(i > 11){
            i -= 12
        }

        $('.name').html(arr[i])
        $('.time').html(arrs[i])
    })


})