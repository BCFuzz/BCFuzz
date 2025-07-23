const v1 = new Uint8ClampedArray();
for (let v3 = 0; v3 < 5; v3++) {
    delete v1[Symbol(127)];
    for (let v7 = 0; v7 < 10; v7++) {
    }
}
const v9 = new Uint32Array(127);
for (const v10 in v9) {
}
gc();
