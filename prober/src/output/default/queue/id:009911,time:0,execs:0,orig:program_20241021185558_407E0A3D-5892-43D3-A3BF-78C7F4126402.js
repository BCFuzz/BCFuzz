let v0 = 3199;
const v2 = new SharedArrayBuffer(v0, SharedArrayBuffer);
const v4 = new DataView(v2);
function f5() {
    return Math.exp(++v0);
}
v4[Symbol.toPrimitive] = f5;
try { v4.getFloat16(v4); } catch (e) {}
gc();
