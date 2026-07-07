$(function(){
    // 文字色変化ボタンを押したとき
   $('#change-color').on('click', function() {
      $('#target').css('color', 'red');
    });
    // 文字内容変化ボタンを押したとき
    $('#change-text').on('click', function(){
      $('#target').text('Hello!');
    });
    // フェードアウトボタンを押したとき
    $('#fade-out').on('click', function(){
      $('#target').fadeOut();
    });
    // フェードインボタンを押したとき
    $('#fade-in').on('click', function(){
      $('#target').fadeIn();
    });
});
