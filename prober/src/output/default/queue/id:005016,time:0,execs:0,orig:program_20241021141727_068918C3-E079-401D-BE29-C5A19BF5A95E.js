for (let v0 = 0; v0 < 10; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v5 = new F1(v0, v0);
    function f6(a7, a8) {
        return f6;
    }
    v5[Symbol.toPrimitive] = f6;
}
gc();
