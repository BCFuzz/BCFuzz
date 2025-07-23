function f1() {
    return f1;
}
class C2 extends f1 {
}
const v3 = new C2();
function f4() {
    return 13;
}
Object.defineProperty(v3, Symbol.toPrimitive, { enumerable: true, value: f4 });
const o10 = {
    "maxByteLength": 2312845920,
};
const v12 = new ArrayBuffer(750704325, o10);
v12.resize();
const v15 = new Int8Array(v12);
v15[v3] = 1.7976931348623157e+308;
gc();
