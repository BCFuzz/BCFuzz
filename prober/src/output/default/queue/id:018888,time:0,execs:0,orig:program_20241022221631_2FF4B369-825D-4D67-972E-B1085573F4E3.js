const v2 = new SharedArrayBuffer();
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
try { new Int8Array(v2, v2, -65535); } catch (e) {}
gc();
