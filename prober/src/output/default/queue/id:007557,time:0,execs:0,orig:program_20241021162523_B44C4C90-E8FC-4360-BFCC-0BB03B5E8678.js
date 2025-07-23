new WeakSet();
const v4 = new Uint8ClampedArray(2502);
for (const v5 in v4) {
    v5[0] = v5;
    v4[10] = 13;
}
gc();
