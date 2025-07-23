new BigInt64Array();
const v7 = new Int8Array();
for (let v8 = 0; v8 < 10; v8++) {
    function f13(a14, a15) {
        const o16 = {
            ...a14,
            __proto__: a14,
            "b": 462505212n,
            [2n]: 65536,
            [a15]: f13,
            128: a14,
            "e": -6n,
        };
        return a15;
    }
    const v18 = new Set();
    const v20 = v18.union(v18).entries();
    class C21 {
        2359 = v20;
    }
    const v22 = new C21();
    async function f23(a24, a25, a26) {
        const o27 = {
        };
        const v29 = new Proxy(v22, o27);
        await v29;
    }
    f23();
    f13(462505212n, 462505212n);
    f13(v7);
    for (let v34 = 0; v34 < 50; v34++) {
        f13();
    }
}
gc();
