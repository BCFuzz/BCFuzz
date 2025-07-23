const o0 = {
};
const v2 = [3925,3925,3925];
const o3 = {
};
const v5 = new Proxy(v2, o3);
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 10; v13++) {
        function f16(a17, a18) {
            const o22 = {
                ...a17,
                __proto__: a17,
                "b": 462505212n,
                "h": a17,
                [a8]: o0,
                toString(a20, a21) {
                    return this;
                },
                "c": 462505212n,
                128: a17,
                "e": -6n,
                "f": v5,
                "maxByteLength": 3925,
                "a": 1,
                "d": a17,
            };
            return -6n;
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
new F6(o0, 3925, v5, o3);
gc();
