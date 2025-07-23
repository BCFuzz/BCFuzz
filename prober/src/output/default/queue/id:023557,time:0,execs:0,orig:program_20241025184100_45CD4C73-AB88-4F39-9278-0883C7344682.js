const v0 = [];
const o1 = {
};
const v3 = new Proxy(v0, o1);
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v11 = 0; v11 < 10; v11++) {
        function f14(a15, a16) {
            const o17 = {
                ...a15,
                __proto__: a15,
                "b": 462505212n,
                "h": a15,
                [a16]: f14,
                "c": 462505212n,
                128: a15,
                "e": -6n,
                "f": v3,
                "a": 1,
                "d": a15,
            };
            return this;
        }
        class C18 {
        }
        const v19 = new C18();
        f14(v19);
        for (let v21 = 0; v21 < 50; v21++) {
            f14();
        }
    }
}
new F4();
gc();
