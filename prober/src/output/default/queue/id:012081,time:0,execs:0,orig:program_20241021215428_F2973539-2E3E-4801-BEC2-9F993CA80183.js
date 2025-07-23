class C0 {
}
const v1 = new C0();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        Math.exp(a9);
        return a7;
    }
    for (let v13 = 0; v13 < 10; v13++) {
        f6(Uint16Array, v1, v13);
    }
}
new F2(v1, F2);
gc();
