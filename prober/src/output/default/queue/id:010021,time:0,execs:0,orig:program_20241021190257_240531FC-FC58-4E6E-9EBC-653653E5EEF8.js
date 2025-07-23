class C2 {
}
class C3 extends C2 {
}
Object.defineProperty(C2, 2, { value: NaN });
const v5 = Float32Array.from([C3,C3,C3,C3]);
try { v5.every(Float32Array); } catch (e) {}
function* f7(a8, a9, a10) {
    return a8;
}
f7();
const v14 = new Uint8Array(3129);
for (const v15 in v14) {
}
gc();
