const v0 = -Infinity;
const v3 = new Uint32Array(1000);
for (const v4 in v3) {
    let v7 = v4 ** -1;
    --v7;
    Math.pow(v0, v7);
}
gc();
