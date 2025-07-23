const v1 = new Uint8ClampedArray();
class C2 {
    n(a4, a5) {
        return -34354 ^ +a4;
    }
}
const v9 = new C2();
const v12 = v1[v9["n"]()];
const v15 = new Uint8Array(1024);
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v15;
}
const v22 = new F16(v15, 1024, v1, v12);
for (const v24 of v22.d) {
}
gc();
