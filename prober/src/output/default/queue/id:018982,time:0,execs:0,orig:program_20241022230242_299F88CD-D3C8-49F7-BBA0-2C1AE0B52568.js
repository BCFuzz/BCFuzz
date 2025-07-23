for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 25; v13++) {
        function f14(a15) {
            return f14;
        }
        const v16 = f14();
        const v17 = f14(this);
        function F18(a20, a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
            Object.defineProperty(a22, "name", { writable: true, value: v13 });
            a20.bind(v13, v17, v16);
        }
        new F18(v16, v17, f14);
    }
}
new F10(F10);
gc();
