let btn = document.querySelector("#hamburger");
        let sidebar = document.querySelector(".sidebar");

        btn.onclick = function () {
            sidebar.classList.toggle('active');
        };

        var $el = document.querySelector('.banner')
            , str = ""
            , imgHTML = $el.innerHTML
            , i, i2;
        for( i=0,i2=2; i<i2; i++ ){
            str += imgHTML;
        }
        $el.innerHTML = str;
