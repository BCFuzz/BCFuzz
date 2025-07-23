const v1 = -9223372036854775808n | -9223372036854775808n;
function f2() {
    return -9223372036854775808n;
}
function f3(a4, a5, a6) {
    arguments.length = arguments;
    Object.defineProperty(arguments, 2, { enumerable: true, get: f2 });
    return a5;
}
f3(v1, v1, -9223372036854775808n);
gc();
