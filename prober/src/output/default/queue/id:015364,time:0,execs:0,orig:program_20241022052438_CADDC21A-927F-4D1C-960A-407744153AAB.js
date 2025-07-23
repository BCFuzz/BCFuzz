const v3 = new ArrayBuffer(ArrayBuffer);
const v5 = new DataView(v3);
function f6() {
    return Int16Array;
}
v5[Symbol.toPrimitive] = f6;
try { v5.setInt32(undefined, v5); } catch (e) {}
gc();
