var kvadrat = document.querySelector(".kvadrat");
var container = document.querySelector(".container");
var top_pos = 0;
var left_pos = 0;





document.body.addEventListener("keydown", function (ev) {

    switch (ev.which) {
        case 38: {
            if (top_pos < 300) {
                top_pos += 30;
                kvadrat.style.top = top_pos + "px";
            } else {
                top_pos += 0;
            }
            //up
        }
            break;

        case 39: {
            //right
            if (left_pos != 0) {
                left_pos -= 30;
                kvadrat.style.left = left_pos + "px";
            } else {
                left_pos -= 0;

            }
        }
            break;

        case 40: {
            //bottom
            if (top_pos != 0) {
                top_pos -= 30;
                kvadrat.style.top = top_pos + "px";
            } else {
                top_pos += 0;
            }
        }
            break;

        case 37: {
            //left
            if (left_pos < 690) {
                left_pos += 30;
                kvadrat.style.left = left_pos + "px";
            } else {
                left_pos += 0;
            }



        }

            break;
    }
})



