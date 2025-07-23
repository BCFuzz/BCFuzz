function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3(a4) {
    return 1;
}
v2.toString = f3;
function f8(a9, a10) {
    arguments.length = arguments;
    return arguments;
}
const t12 = f8(2, f8);
t12[v2] = 6;
gc();
