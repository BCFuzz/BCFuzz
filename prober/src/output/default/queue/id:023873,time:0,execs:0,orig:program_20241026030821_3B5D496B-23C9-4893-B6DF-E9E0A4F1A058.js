for (let v0 = 0; v0 < 25; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        const v8 = new Int32Array(2);
        const o17 = {
            n(a10, a11, a12) {
                createGlobalObject().Atomics.store(v8, v8, -1.7976931348623157e+308);
                return a11;
            },
        };
        const v18 = o17.n;
        v18(v18, v0, F1, o17);
    }
    new F1(v0, v0);
}
gc();
