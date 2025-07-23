const v1 = new SharedArrayBuffer();
const v3 = new DataView(v1);
const v4 = v3.setFloat32;
try { v4(v1, v1); } catch (e) {}
for (let v6 = 0; v6 < 250; v6++) {
}
gc();
