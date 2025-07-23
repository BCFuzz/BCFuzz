function f0(a1, a2, a3) {
    return a1;
}
const o6 = {
    "maxByteLength": 2659,
};
const v8 = new SharedArrayBuffer(2659, o6);
const v10 = new Uint16Array(v8);
Object.defineProperty(v10, Symbol.toPrimitive, { writable: true, enumerable: true, value: f0 });
gc();
