$(function(){
    $('form').submit(function() {
            // console.log("form送信 中止");
            var email = $("input[name='email']").val();
            console.log(email);
            // 処理を中断
            return false;
        }
    );
})
