const v2 = new FinalizationRegistry(Int8Array);
let v3;
try { v3 = v2.register(); } catch (e) {}
const v4 = [v2];
const v6 = new ArrayBuffer(v3);
const v8 = new DataView(v6);
try { v8.getFloat32(v4, v3); } catch (e) {}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
gc();
