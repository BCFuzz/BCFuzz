const v1 = new ArrayBuffer();
const v3 = new DataView(v1);
function f4() {
    return v3;
}
v3.toString = f4;
try { v3.getFloat32(v3); } catch (e) {}
gc();
