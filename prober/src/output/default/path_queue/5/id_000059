function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = v2 !== v2;
let v4;
try { v4 = v3(); } catch (e) {}
const v6 = `
    async function* f7(a8, a9) {
        const v12 = new Uint16Array();
        if (null != v12) {
            function f14(a15, a16, a17) {
                return f14;
            }
            f14(f7);
            f14(Uint16Array, v4, v2);
            f14(f7, 0.0, v4);
        }
    }
    f7(f7, f7);
`;
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
    for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
    }
}
eval(v6).next();
gc();
