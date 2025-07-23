const v1 = new ArrayBuffer(ArrayBuffer, ArrayBuffer);
const v3 = new DataView(v1);
const v5 = v1["transfer"]();
function f6() {
    v3.byteOffset;
    return v1;
}
v5[Symbol.toPrimitive] = f6;
try { v3.getUint8(v5); } catch (e) {}
gc();
