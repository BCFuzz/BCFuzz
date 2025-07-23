let v2 = ([0.852149189137358])[0];
const v4 = new Uint8Array(3129);
for (const v5 in v4) {
    const v7 = Math.clz32(v2);
    let v8 = v7 + v7;
    v8--;
    ++v2;
}
gc();
