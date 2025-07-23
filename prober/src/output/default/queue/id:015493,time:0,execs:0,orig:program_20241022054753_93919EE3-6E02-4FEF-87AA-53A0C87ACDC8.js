const v2 = Int8Array.BYTES_PER_ELEMENT;
let v3;
try { v3 = v2.toString(); } catch (e) {}
v3[v2] &&= 176;
const v6 = new Uint16Array(512);
for (const v7 of v6) {
}
gc();
