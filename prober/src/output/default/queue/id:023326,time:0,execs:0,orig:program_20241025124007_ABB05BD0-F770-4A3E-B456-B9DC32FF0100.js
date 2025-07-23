const v2 = new Int32Array(979);
v2[258] = v2;
const v4 = new Int8Array(v2);
for (let v5 = 0; v5 < 25; v5++) {
    v2.set(v4);
    for (let v7 = 0; v7 < 10; v7++) {
    }
}
gc();
