const v2 = new Int32Array(979);
v2[258] = v2;
const v4 = new Int8Array(v2);
v4[834];
for (let v6 = 0; v6 < 25; v6++) {
    v2.set(v4);
    for (let v8 = 0; v8 < 10; v8++) {
    }
}
gc();
