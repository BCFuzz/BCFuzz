const v2 = new Uint32Array(5);
const v4 = new Uint32Array(41);
for (const v5 of v2) {
    Object.defineProperty(v4, 5, { writable: true, configurable: true, enumerable: true, value: v5 });
}
gc();
