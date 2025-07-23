Symbol[1447] = Symbol;
const v3 = new Uint32Array(3518);
for (const v4 in v3) {
    for (let v5 = 0; v5 < 5; v5++) {
        Symbol[v4] = v5;
    }
}
gc();
