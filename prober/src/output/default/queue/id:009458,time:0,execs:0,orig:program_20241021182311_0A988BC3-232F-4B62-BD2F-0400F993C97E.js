for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 50; v13++) {
        function f14(a15) {
            return a12;
        }
        const v16 = f14();
        const v17 = f14(F10);
        const v18 = f14();
        function F19(a21, a22, a23) {
            if (!new.target) { throw 'must be called with new'; }
            function f24(a25, a26) {
                return f24;
            }
            a23.constructor = f24;
            const t17 = a23.constructor;
            new t17(this, this, F10, a12);
            a23.arguments = a23;
        }
        const v29 = new F19(v17, v18, F19);
        v29.arguments = this;
        new F19(v16, v16, v29);
        new F19(v16, v17, f14);
    }
}
new F10();
gc();
