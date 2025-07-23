function f1(a2, a3) {
    const o4 = {
    };
    return o4;
}
const v5 = f1(f1, 1000);
const v6 = f1();
for (let i9 = 0, i10 = 10; i9 !== i10; i10--) {
}
function f17() {
    const o18 = {
        "d": 1000,
        "b": v6,
        [f17]: v5,
    };
    return o18;
}
const v19 = f17();
const v20 = f17();
const v21 = /[\xe2\x81\xa3]+/ygisu;
const v22 = /[AEj(?:a{5,1000000}){3,1000000}a\fb\nc\rd\te\vf+]/mdgiu;
function f23(a24, a25, a26) {
    const o27 = {
        [a25]: a26,
    };
    return o27;
}
const v29 = f23(v19, v21, f23(v20, v22, v19));
const v32 = new Int32Array();
v32.toJSON = v29;
function f33(a34) {
    a34[Symbol.toPrimitive] = Date;
    const o37 = {
        "g": a34,
        [f33]: v32,
    };
    return o37;
}
JSON.parse(JSON.stringify([f33(f33(f33)).g]));
for (let i47 = 0, i48 = 10; i47 < i48; i48--) {
}
gc();
