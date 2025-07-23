for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13(a14) {
        return f13;
    }
    const v15 = f13();
    const v16 = f13(f13);
    function F17(a19, a20, a21) {
        if (!new.target) { throw 'must be called with new'; }
        Object.defineProperty(a21, "name", { writable: true, value: f13 });
        a19.bind();
    }
    new F17(v15, v16, f13);
}
new F10(F10);
gc();
