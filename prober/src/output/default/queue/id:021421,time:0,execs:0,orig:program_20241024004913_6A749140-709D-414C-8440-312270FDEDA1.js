function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3(a4) {
    return 1;
}
v2.toString = f3;
function f8(a9, a10) {
    function f11() {
        return a9;
    }
    return arguments;
}
const t14 = f8(2, f8);
t14[v2] = 6;
gc();
