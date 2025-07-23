const v1 = new Uint8Array(Uint8Array, Uint8Array, Uint8Array);
const v2 = new Uint8Array(v1, v1, v1);
let v3;
try { v3 = v2(); } catch (e) {}
const v4 = v3++;
(v3 >>> v1) | v4;
for (let v7 = 0; v7 < 250; v7++) {
}
gc();
