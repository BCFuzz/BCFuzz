function f0() {
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F2("undefined", "undefined", "undefined");
    v7.undefined = v7;
    v7.undefined = v7;
    "undefined" in v7;
    return f0;
}
for (let v9 = 0; v9 < 100; v9++) {
    f0();
}
gc();
