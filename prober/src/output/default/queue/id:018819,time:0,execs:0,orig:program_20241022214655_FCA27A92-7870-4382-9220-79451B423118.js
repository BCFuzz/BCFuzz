const v3 = new SharedArrayBuffer(3199);
const v5 = new DataView(v3);
function f6() {
    const v8 = new Int8Array();
    Reflect.defineProperty(v8, -4, v8);
}
v5[Symbol.toPrimitive] = f6;
v5.getFloat16(v5);
gc();
