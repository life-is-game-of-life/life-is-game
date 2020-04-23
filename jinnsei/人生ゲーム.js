console.log("接続テスト");
$(function(){
    var saiko;
    var cnt=0;
    var left=0;
    var topp=0;
    var x = 0;
    var y = 0;
    var syoko=50;
    var state=50;
    var zyoko=99;
    var ztate=103;


    var masu = new Object();
        masu.yoko = [syoko,syoko+zyoko,syoko+zyoko*2,syoko+zyoko*3,syoko+zyoko*4];
        masu.tate = [state,state+ztate,state+ztate*2,state+ztate*3];
        masu.menn =[
            [1,2,3,4,5],
            [6,7,8,9,10],
            [11,12,13,14,15],
            [16,17,18,19,20]
        ];
    
    var gazo = ["",
        "img/saikoro-illust1.png",
        "img/saikoro-illust2.png",
        "img/saikoro-illust3.png",
        "img/saikoro-illust4.png",
        "img/saikoro-illust5.png",
        "img/saikoro-illust6.png"
    ];

    
    function pcheck(){
        left = $('#koma').position().left;
        topp = $('#koma').position().top;
    }

    function gcheck(){
        if (topp >= masu.tate[3] && left >= masu.yoko[4]){
            document.write("ゴール");
        };
    }

    function modoru(){                       //１マス戻る
        left = left - zyoko;
            $('#koma').css("left",left);
            if (left <= syoko){
                topp = topp -ztate;
                left = masu.yoko[4];
                $('#koma').css("left",left);
                $('#koma').css("top",topp);                
            }
    }

    function susumu(){　　　　　　　　　　　　　//１マス進む
        left = left + zyoko;
            $('#koma').css("left",left);
            if (left >= masu.yoko[4]+zyoko){
                topp = topp + ztate;
                left = syoko;
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
        $('#gazou').children('img').attr('src', gazo[saiko]);
        pcheck();

        for(var i = saiko;i>0;i--){
            susumu();
            
            if (topp >= masu.tate[3] && left >= masu.yoko[4]){
                document.write("ゴール");
                break;
            };
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

        gcheck();
    })
});