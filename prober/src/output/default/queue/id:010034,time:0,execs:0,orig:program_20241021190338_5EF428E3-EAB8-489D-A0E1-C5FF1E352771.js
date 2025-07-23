function f0() {
    const o10 = {
        "g": -2.2250738585072014e-308,
        ["e"](a5, a6) {
            const v7 = super.c;
            this[Symbol.hasInstance] = v7;
            return "e";
        },
        ..."-13",
        __proto__: "-13",
        "f": "-13",
        ..."-13",
        "a": -2.2250738585072014e-308,
        "c": -2.2250738585072014e-308,
        "b": -2.2250738585072014e-308,
        ["-13"]: "e",
        "c": "-13",
        "e": "e",
    };
    return o10;
}
const v11 = f0();
f0();
const v13 = f0();
function f14(a15, a16) {
    const o27 = {
        "g": f0,
        __proto__: v11,
        4: a15,
        "c": a16,
        [a15](a18, a19, a20) {
            const o21 = {
            };
            new Proxy(this, o21);
            return 2;
        },
    };
    return o27;
}
const v28 = f14(v13, v13);
f14(v13, v28);
f14(v11, v13);
function F37(a39, a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
}
const v42 = new F37(F37, F37, v28);
const v45 = new Uint32Array(1003);
for (const v46 in v45) {
    +58702 << v42;
    for (let v50 = 0; v50 < 5; v50++) {
    }
}
gc();
