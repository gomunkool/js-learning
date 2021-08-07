var winner = function () {
  alert("WINNER!");
};
var loser = function () {
  alert("LOSER!");
};
// Простой тест
winner();
// Присваивание ссылок переменным
var a = winner;
var b = loser;
var c = loser;
a();
b();
// Проверяем удачу в игре “наперстки”
c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;
a();
function a() {}
const a = () => {};
