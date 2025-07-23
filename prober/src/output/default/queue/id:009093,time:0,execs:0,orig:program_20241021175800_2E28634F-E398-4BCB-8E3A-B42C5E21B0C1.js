const v1 = new BigUint64Array();
function f3() {
    return v1;
}
Map.toString = f3;
const v5 = new SharedArrayBuffer();
const v7 = new DataView(v5);
try { v7.setFloat16(Map); } catch (e) {}
gc();
