function f0() {
    return f0;
}
const v1 = f0();
class C3 extends f0 {
}
const v4 = new C3();
const v6 = !1708251011;
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v12 = 0; v12 < 10; v12++) {
        let v17 = 7 * (-4294967297 + (-4294967297 | Float32Array));
        const v19 = -(v17--);
        for (let v20 = 0; v20 < 100; v20++) {
            Array(a11);
        }
        v19 - v19;
        function f23(a24, a25, a26, a27) {
            return a27;
        }
        f23(v1, v4, a11, v6);
        for (let v29 = 0; v29 < 250; v29++) {
        }
    }
}
new F8(v4, f0);
gc();
