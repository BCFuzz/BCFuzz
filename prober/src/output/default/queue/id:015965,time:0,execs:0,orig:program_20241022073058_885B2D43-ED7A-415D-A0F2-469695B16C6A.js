function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2() {
        function F4(a6, a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v9 = new F4(f2, "undefined", f2);
        v9.undefined = v9;
        "undefined" in v9;
        return this;
    }
    for (let v11 = 0; v11 < 5; v11++) {
        f2();
    }
}
new F0();
for (let i16 = 10, i17 = 10; -13369 < i17; i17--) {
}
gc();
