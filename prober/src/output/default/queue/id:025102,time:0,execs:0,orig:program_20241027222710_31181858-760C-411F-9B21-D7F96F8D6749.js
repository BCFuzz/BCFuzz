function f0() {
    const o4 = {
        "h": "-1105056007",
        "b": "-1105056007",
        "f": 5,
        "a": "-1105056007",
        "e": 5,
        "c": 0.9338501753319111,
    };
    return o4;
}
const v5 = f0();
const v6 = f0();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
const v11 = new F7();
const v12 = new F7();
const v13 = /[\xe2\x81\xa3]+/ygisu;
const v14 = /[AEj(?:a{5,1000000}){3,1000000}a\fb\nc\rd\te\vf+]/mdgiu;
function f15(a16, a17, a18) {
    const o19 = {
        ...a18,
        "g": v12,
        [-1]: v11,
    };
    return o19;
}
const v21 = f15(v5, v13, f15(v6, v14, v5));
const v24 = new Int32Array(v12, F7);
v24.toJSON = v21;
function f25(a26) {
    a26[Symbol.toPrimitive] = Date;
    const o29 = {
        "g": a26,
        [f25]: v24,
    };
    return o29;
}
JSON.parse(JSON.stringify([f25(f25(f25)).g]));
for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
}
gc();
