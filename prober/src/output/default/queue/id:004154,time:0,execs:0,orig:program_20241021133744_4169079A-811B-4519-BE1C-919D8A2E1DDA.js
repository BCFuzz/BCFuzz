function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0();
function f7(a8, a9) {
    const o20 = {
        p(a11, a12, a13) {
            return a13 * this;
        },
        valueOf(a16, a17, a18, a19) {
            a16[1711] %= a16;
            return a9;
        },
    };
    return o20;
}
const v21 = f7();
const v22 = f7(v21, v6);
try { v22.p(v21, v6, v22); } catch (e) {}
gc();
