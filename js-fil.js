let btn = document.querySelector("#hamburger");
        let sidebar = document.querySelector(".sidebar");

        btn.onclick = function () {
            sidebar.classList.toggle('active');
        };
