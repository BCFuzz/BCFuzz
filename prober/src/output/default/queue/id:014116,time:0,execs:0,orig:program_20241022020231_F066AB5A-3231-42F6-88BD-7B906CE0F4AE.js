let v0 = 2084824343;
const v3 = new Int16Array(4096);
for (const v4 of v3) {
    for (let v5 = 0; v5 < 5; v5++) {
        const v8 = 6 | v0;
        let v9 = v8 ^ v4;
        v0--;
        Math.sinh(v8);
        ++v9;
    }
}
gc();
