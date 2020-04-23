console.log("接続テスト");
$(function(){
    var saiko;
    var cnt=0;
    var left=0;
    var topp

    function pcheck(){
        left = $('#koma').position().left;
        topp = $('#koma').position().top;
    }

    function modoru(){                       //１マス戻る
        left = left - 49;
            $('#koma').css("left",left);
            if (left <= 25){
                topp = topp -53;
                left = 221;
                $('#koma').css("left",left);
                $('#koma').css("top",topp);                
            }
    }

    function susumu(){　　　　　　　　　　　　　//１マス進む
        left = left + 49;
            $('#koma').css("left",left);
            if (left >= 270){
                topp = topp +53;
                left = 25;
                $('#koma').css("left",left);
                $('#koma').css("top",topp);                
            }
    }

    $('#saik').click(function(){               //サイコロを振るをクリックしたとき
        saiko = Math.floor(Math.random()*6)+1;
        console.log(saiko);
        cnt = cnt + saiko;
        console.log(cnt);
        pcheck();

        for(var i = saiko;i>0;i--){
            console.log(left);
            susumu();
            
            if (topp >= 184 && left >= 221){
                document.write("ゴール");
                break;
            }
        }
    })
});