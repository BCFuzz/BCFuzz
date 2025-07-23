const v2 = new Int32Array(6);
const v5 = new Uint8Array(1147);
for (const v6 of v5) {
    const v7 = new Int32Array(v6);
    v2.length *= v6;
    v7[Symbol.search] = v6;
}
gc();
