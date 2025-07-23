const v2 = new BigUint64Array(82);
let v4 = v2[2];
const v5 = v4--;
const v6 = v5 ^ v5;
v5 === v4;
try { Int16Array(v6, v5); } catch (e) {}
const v10 = new Int16Array(4096);
for (const v11 of v10) {
}
gc();
