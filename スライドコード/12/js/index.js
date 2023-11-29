$(function(){
    $('form').submit(function() {
            console.log("form送信 中止");

            // 処理を中断
            return false;
        }
    );
})
