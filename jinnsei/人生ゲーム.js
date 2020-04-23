console.log("接続テスト");
$(function(){
    var saiko;
    var cnt=0;
    var left=0;
    var topp=0;
    var x = 0;
    var y = 0;


    var masu = new Object();
        masu.yoko = [25,74,123,172,221];
        masu.tate = [25,78,131,184];
        masu.menn =[
            [1,2,3,4,5],
            [6,7,8,9,10],
            [11,12,13,14,15],
            [16,17,18,19,20]
        ];
    
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

    function torappu(){
        if(x % 2 == 1){
            susumu();
            console.log("１マス進みます。");
        }else{
            modoru();
            console.log("１マス戻ります。");
        };
    }

    $('#saik').click(function(){               //サイコロを振るをクリックしたとき
        saiko = Math.floor(Math.random()*6)+1;
        console.log("サイコロの目は"+saiko);
        pcheck();

        for(var i = saiko;i>0;i--){
            susumu();
            
            if (topp >= 184 && left >= 221){
                document.write("ゴール");
                break;
            }
        }

        pcheck();
        x=0;
        y=0;
        while(masu.yoko[x] != left){
            x++;
        };
        while(masu.tate[y] != topp){
            y++;
        };
        console.log("現在地"+masu.menn[y][x]);
        x = masu.menn[y][x];
        torappu();

        if (topp >= 184 && left >= 221){
            document.write("ゴール");
        }
    })
});