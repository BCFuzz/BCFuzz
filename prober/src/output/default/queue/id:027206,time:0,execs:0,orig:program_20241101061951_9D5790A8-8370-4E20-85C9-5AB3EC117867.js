function f1(a2, a3) {
    const o6 = {
        "maxByteLength": 65536,
    };
    const v8 = new SharedArrayBuffer(1454, o6);
    const v10 = new BigUint64Array(v8);
    return v10;
}
Symbol[Symbol.species] = f1;
for (let i14 = 0, i15 = 10; i14 !== i15; i15--) {
}
const v24 = ("").split();
v24.constructor = Symbol;
try { v24.flatMap(eval); } catch (e) {}
for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
}
gc();
