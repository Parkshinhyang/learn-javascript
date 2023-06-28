function solution(n) {
  var n = n.toUpperCase();
  var cnt_P = 0;
  var cnt_T = 0;
  for (var i = 0; i < n.length; i++) {
    if (n[i] === "P") {
      cnt_P += 1;
    } else if (n[i] === "T") {
      cnt_T += 1;
    }
  }
  console.log(cnt_p, cnt_T);
  if (cnt_T === cnt_P) {
    return true;
  } else {
    return false;
  }
}
