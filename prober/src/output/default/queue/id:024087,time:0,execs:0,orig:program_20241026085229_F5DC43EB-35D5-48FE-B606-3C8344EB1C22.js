const v0 = [];
const o1 = {
};
const v3 = new Proxy(v0, o1);
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v11 = 0; v11 < 10; v11++) {
        const v15 = ([1000,46308,-256601138,129,-1]).push();
        function f16(a17, a18) {
            const o22 = {
                ...a17,
                __proto__: a17,
                "b": 462505212n,
                "h": a17,
                toString(a20, a21) {
                    return a20;
                },
                [a18]: f16,
                "c": 462505212n,
                "e": -6n,
                "maxByteLength": v15,
                "f": v3,
                "a": 1,
                "d": a17,
            };
            return Proxy;
        }
        class C23 {
        }
        const v24 = new C23();
        f16(v24);
        for (let v26 = 0; v26 < 50; v26++) {
            f16();
        }
    }
}
new F4();
gc();
