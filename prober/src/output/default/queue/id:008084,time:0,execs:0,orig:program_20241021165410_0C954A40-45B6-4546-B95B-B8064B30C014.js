for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function f11(a12, a13) {
    return a12;
}
const o16 = {
    "maxByteLength": 512,
};
const v18 = new ArrayBuffer(5, o16);
const v19 = new Int8Array(v18);
Object.defineProperty(v19, "constructor", { writable: true, enumerable: true, value: f11 });
gc();
