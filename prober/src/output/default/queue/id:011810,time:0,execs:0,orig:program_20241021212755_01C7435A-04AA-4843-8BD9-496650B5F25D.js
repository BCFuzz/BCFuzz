const v2 = new Uint8Array(3129);
let v4 = 9;
const v5 = new Uint8Array(v4);
v4 /= 257;
for (const v6 in v2) {
    v5.indexOf(v6, v4 - v6);
}
gc();
