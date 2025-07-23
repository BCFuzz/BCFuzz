for (let v0 = 0; v0 < 5; v0++) {
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F2(F2, F2, v0);
    const v10 = new Int8Array(255);
    for (const v11 in v10) {
        const v13 = new WeakMap();
        const v14 = v13.set(v13, v11);
        const v16 = Symbol.toPrimitive;
        const o21 = {
            [v16]() {
                (v7 !== 2147483648 ? v7 : 2147483648) << v14;
            },
        };
        function f22(a23) {
            return v14;
        }
    }
}
gc();
