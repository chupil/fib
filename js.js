var n = prompt('Число');

function fibrec(n) {
    return n <= 2 ? 1 : fibrec(n - 1) + fibrec(n - 2);
}
document.write('буде ' + fibrec(n) + ' <br> ');

function fibloop(n) {
    var one = 1;
    var two = 1;
    var sum;

    for (var i = 3; i <= n; i++) {
        sum = one + two;
        one = two;
        two = sum;
    }
    return two;
}
document.write('буде ' + fibloop(n) + ' <br> ');

function fibArrey(n) {
    var fibArrey = [1, 1];
    for (var i = 2; i < n; i++) {
        fibArrey[i] = fibArrey[i - 1] + fibArrey[i - 2];
    }
    return fibArrey[n - 1];
}
document.write('буде ' + fibArrey(n) + ' <br> ');
