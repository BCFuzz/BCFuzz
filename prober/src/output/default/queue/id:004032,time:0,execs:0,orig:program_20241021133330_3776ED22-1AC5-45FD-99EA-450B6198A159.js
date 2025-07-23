const v1 = 13 + 13;
try { Uint8Array(v1); } catch (e) {}
const v5 = new Uint8Array(2);
let v6;
try { v6 = v5.toBase64(); } catch (e) {}
v6.toString();
const v10 = new BigInt64Array(1116);
const v13 = new Int8Array(v5, v5);
const t8 = v13.constructor;
new t8(BigInt64Array, v10);
v13[1];
const v17 = new Int8Array();
v17[1606];
const v21 = new Uint8Array(3129);
try { v21.setFromHex(); } catch (e) {}
v21[2004];
for (const v25 in v21) {
    const v26 = 9 + v25;
    v26[16] = v26;
}
gc();
