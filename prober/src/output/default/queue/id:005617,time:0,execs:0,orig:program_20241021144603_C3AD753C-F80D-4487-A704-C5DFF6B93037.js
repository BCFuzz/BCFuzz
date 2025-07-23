function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
for (let v3 = 0; v3 < 100; v3++) {
    function f4(a5, a6, a7) {
        a5 >= a7;
        return v3;
    }
    f4(v2);
}
gc();
