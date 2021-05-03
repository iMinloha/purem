var a_idx = 0;

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
    //return "rgb(72,85,137)"
}
jQuery(document).ready(function($) {


    $("body").click(function(e) {
        var a = new Array("C","编曲","原神","Html","php","富强","C++","民主","和谐","python","文明","自由","C#","平等","java","公正","法治","javascript","爱国","敬业","study","诚信","友善");
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 25,
            "left": x,
            "position": "absolute",
            "font-weight": "bolder",
            "color": randomColor
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function() {
                $i.remove();
            });
    });
});