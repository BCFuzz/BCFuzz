for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
function f10() {
    const o11 = {
    };
    return o11;
}
const v12 = f10();
const v13 = f10();
const v14 = /[\xe2\x81\xa3]+/ygisu;
const v15 = /[AEj(?:a{5,1000000}){3,1000000}a\fb\nc\rd\te\vf+]/mdgiu;
function f16(a17, a18, a19) {
    const o20 = {
        [a18]: a19,
    };
    return o20;
}
const v22 = f16(v12, v14, f16(v13, v15, v12));
const v25 = new Int32Array(v15, v22, v12);
v25.toJSON = v22;
function f26(a27) {
    a27[Symbol.toPrimitive] = Date;
    const o30 = {
        "g": a27,
        [f26]: v25,
    };
    return o30;
}
JSON.parse(JSON.stringify([f26(f26(f26)).g]));
for (let i40 = 0, i41 = 10; i40 < i41; i41--) {
}
gc();
