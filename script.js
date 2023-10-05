var hb = prompt('masukan HB');
var dp = prompt('masukan DP');
var tenor = prompt('masukan Tenor');

var hbNum = parseInt(hb);
var dpNum = parseInt(dp);
var tnNum = parseInt(tenor);
var sbNum = parseInt(tnNum * 3.5);

var hasil1 = hbNum + (hbNum * 9) / 100;
var hasil2 = (hasil1 * 100) / 71 - dpNum;
var hasil3 = hasil2 + (hasil2 * sbNum) / 100;
var hasilAkhir = hasil3 / tnNum;
alert(hasilAkhir);
