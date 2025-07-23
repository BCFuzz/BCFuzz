function f2(a3, a4) {
    return 10;
}
Object.defineProperty(SharedArrayBuffer, Symbol.toPrimitive, { writable: true, enumerable: true, value: f2 });
const v7 = new SharedArrayBuffer(SharedArrayBuffer);
const v9 = new Int16Array(v7);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    const v15 = new Uint8Array(v7);
    v15.set(v9);
}
new F10(f2, v9);
gc();
