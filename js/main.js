$(document).ready(function(){

    //плавная прокрутка
    $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id, a.mouse_scroll").mPageScroll2id({
      highlightSelector:"nav a"
  });

    

    //подключение фильтра работ
    $('#testfilter').mixItUp();

   

    // FancyBox - galery
	$(".fancybox").fancybox({
			// Default - with fix from scroll to top
            helpers: {
                overlay: {
                    locked: false
                }
            }
    });
	// End of FancyBox - galery

 //скрипт валидации формы
   
   $("#contact-form").validate({
    rules: {
        name: { required: true },
        email: { required: true, email: true },
        //skype
        //phone
        message: { required: true }
    },

        messages: {
           name: "Пожалуйста, представьтесь!",
           email: {
              required: "Пожалуйста, введите адрес почты",              
              email: "Не корректный адрес, проверьте, пожалуйста!"
        }
    }
   });
    //конец валидации формы

});