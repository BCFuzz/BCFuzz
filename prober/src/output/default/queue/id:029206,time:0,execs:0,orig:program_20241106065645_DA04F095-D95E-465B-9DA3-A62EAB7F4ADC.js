function f0() {
    return f0;
}
for (let [i13, i14] = (() => {
        for (let i4 = 10, i5 = 10; -13369 < i5; i5--) {
        }
        return [0, 1024];
    })();
    i14--;
    ) {
}
const v20 = [5.197943960373909,728995.9939078528,-2.2250738585072014e-308,2.0,-1e-15];
const v22 = new Uint16Array(1024, 1024, 1024);
const v23 = v22.values();
const o24 = {
};
const o27 = {
    "maxByteLength": 536870912,
};
const v28 = new ArrayBuffer(o24, o27);
const v30 = new Int32Array(v28, v23, v20);
function f31(a32) {
    Object.defineProperty(v30, 0, { writable: true, enumerable: true, value: f0 });
    return a32;
}
try { f31.call(); } catch (e) {}
gc();
