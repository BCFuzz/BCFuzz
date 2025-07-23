const v1 = [12843];
function f3() {
    return f3;
}
function f4(a5, a6) {
    return v1;
}
f4.toString = f3;
function f7(a8, a9, a10) {
    a9 in a8;
    return a8;
}
try { f7(v1, f4); } catch (e) {}
gc();
