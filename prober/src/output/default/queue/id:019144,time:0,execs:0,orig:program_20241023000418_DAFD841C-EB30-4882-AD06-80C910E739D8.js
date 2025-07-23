const v1 = Int16Array.from;
function f2() {
    const v5 = new Uint16Array(5);
    return v5.lastIndexOf(Uint16Array, v1);
}
v1.valueOf = f2;
function f7(a8, a9) {
    a8 >> a8;
    return a9;
}
try { f7(v1); } catch (e) {}
gc();
