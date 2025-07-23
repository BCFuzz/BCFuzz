function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
let v2 = new F0();
for (let v3 = 0; v3 < 10; v3++) {
    function f4(a5, a6) {
        Math.cosh(v2);
        v2++;
    }
    f4(v2, f4);
}
gc();
