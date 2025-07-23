const o0 = {
};
for (let i3 = 0, i4 = 10; i3 !== i4; i4--) {
}
function f11() {
    const o12 = {
        [f11]: o0,
    };
    return o12;
}
const v13 = f11();
const v14 = f11();
for (let v15 = 0; v15 < 25; v15++) {
    o0["p" + v15] = v15;
}
const v18 = /[\xe2\x81\xa3]+/ygisu;
const v19 = /[AEj(?:a{5,1000000}){3,1000000}a\fb\nc\rd\te\vf+]/mdgiu;
function f20(a21, a22, a23) {
    const o24 = {
        [a22]: a23,
    };
    return o24;
}
const v26 = f20(v13, v18, f20(v14, v19, v13));
const v29 = new Int32Array(v13, v26, f11);
v29.toJSON = v26;
function f30(a31) {
    a31[Symbol.toPrimitive] = Date;
    const o34 = {
        "g": a31,
        [f30]: v29,
    };
    return o34;
}
JSON.parse(JSON.stringify([f30(f30(f30)).g]));
for (let i44 = 0, i45 = 10; i44 < i45; i45--) {
}
gc();
