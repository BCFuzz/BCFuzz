function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let v6 = 0; v6 < 10; v6++) {
    const v8 = "p" + v6;
    function F9() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f12(a13, a14, a15, a16) {
        a14 = a16 instanceof F9;
    }
    f12(Uint16Array, v8, F0, F9);
}
gc();
