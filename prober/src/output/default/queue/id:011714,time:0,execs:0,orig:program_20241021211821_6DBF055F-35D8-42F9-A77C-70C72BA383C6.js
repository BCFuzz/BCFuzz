const v2 = new SharedArrayBuffer();
DataView.valueOf = Symbol;
const v4 = new DataView(v2);
try { v4.setUint16(DataView); } catch (e) {}
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
gc();
