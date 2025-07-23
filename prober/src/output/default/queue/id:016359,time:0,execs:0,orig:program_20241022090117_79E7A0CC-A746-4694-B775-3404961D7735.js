const v0 = [-65535,11];
function f1(a2, a3) {
    return v0;
}
v0.toString = f1;
const v5 = new ArrayBuffer(f1, ArrayBuffer);
try { new Int16Array(v5, v0); } catch (e) {}
gc();
