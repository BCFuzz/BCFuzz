new BigUint64Array();
new BigUint64Array(187);
new Int16Array(1451);
class C7 {
}
const v8 = new C7();
const t6 = v8.constructor;
const v10 = new t6(v8, C7);
const v11 = v10.__defineSetter__;
function f12(a13, a14) {
    a13();
    return f12;
}
v11[Symbol.toPrimitive] = f12;
const v20 = Uint16Array ^ [-10];
const v22 = new BigUint64Array(586);
for (let i = 0; i < 5; i++) {
    const v25 = new SharedArrayBuffer();
    const v27 = new DataView(v25);
    try { v27.setUint32(256, v11); } catch (e) {}
    try { v27.getUint8(v20); } catch (e) {}
}
for (const v30 of v22) {
}
gc();
