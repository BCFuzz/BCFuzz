for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 50; v13++) {
        function f14(a15) {
            return a15;
        }
        const v16 = f14();
        const v17 = f14();
        const v18 = f14();
        function F19(a21, a22, a23) {
            if (!new.target) { throw 'must be called with new'; }
            -a22;
            const v25 = a23?.constructor;
            try { new v25(a12); } catch (e) {}
            a23.arguments = a23;
        }
        const v27 = new F19(v17, v18, F19);
        v27.arguments = f14;
        new F19(v16, v16, v27);
        new F19(v16, v17, f14);
    }
}
const v30 = new F10();
const t25 = v30.constructor;
new t25();
gc();
