function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F1();
const v9 = new Int8Array(255);
for (const v10 in v9) {
    const v12 = new WeakMap();
    const v13 = v12.set(v12, v10);
    const v15 = Symbol.toPrimitive;
    const o20 = {
        [v15]() {
            (v6 !== 2147483648 ? v6 : 2147483648) << v13;
        },
    };
    function f21(a22) {
        return v12;
    }
}
gc();
