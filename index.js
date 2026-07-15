'use strict';
//数値配列を渡されたら、17で割り切れるものだけにして配列を返すモジュールの実行←この解釈は間違いだった

function isMultipleOfSeventeen(num){
  return num % 17 === 0;
}

module.exports = { isMultipleOfSeventeen
}
//filterは配列の中から一つづつ要素を取り出して渡すのをやっているそして要素を（）ないの関数に通してtrueかfalseを返してもらうのを待っている、私たちが作った関数がtrueを返せば新たな配列にfilterが組み込み、falseなら組み込まないということをやっている。なので私が作るのは値1個に対してtrueかfalseを返す処理を作るだけ。配列からばらしたり配列を作っているのはすべてfilterがやっている
