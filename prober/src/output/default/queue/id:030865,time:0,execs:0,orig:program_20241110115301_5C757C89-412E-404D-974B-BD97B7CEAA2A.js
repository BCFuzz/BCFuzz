function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F1(Array);
class C5 extends Array {
}
const v6 = new C5();
const o10 = {
    "maxByteLength": 65537,
};
const v12 = new ArrayBuffer(1175, o10);
const v13 = new BigInt64Array(v12);
createGlobalObject().Atomics.add(v13, v4, v6);
for (let i20 = 0, i21 = 10000;
    i20 < i21;
    (() => {
        i21--;
        for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
        }
    })()) {
}
gc();
