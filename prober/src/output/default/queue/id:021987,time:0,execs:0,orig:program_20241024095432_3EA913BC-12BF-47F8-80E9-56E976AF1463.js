function F1() {
    if (!new.target) { throw 'must be called with new'; }
    function f3() {
        "undefined" in this;
        return this;
    }
    for (let v6 = 0; v6 < 5; v6++) {
        f3();
    }
}
new F1();
for (let i11 = -14, i12 = 10; -13369 < i12; i12--) {
}
gc();
