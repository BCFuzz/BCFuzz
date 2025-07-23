for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 50; v13++) {
        function f14(a15) {
            return f14;
        }
        const v16 = f14();
        const v17 = f14();
        const v18 = f14();
        function F19(a21, a22, a23) {
            if (!new.target) { throw 'must be called with new'; }
            a22.arguments = a22;
        }
        new F19(v17, v18);
        new F19(v16, v16);
    }
}
new F10(F10);
gc();
