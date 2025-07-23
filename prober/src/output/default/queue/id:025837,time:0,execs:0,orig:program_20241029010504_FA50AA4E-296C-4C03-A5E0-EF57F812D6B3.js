function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = -4294967296 * v2;
const v7 = new Uint8Array(153);
for (let i = 0; i < 5; i++) {
    const v9 = new Map();
    v9.set(v9, Map);
    v9.delete(v4);
    for (const v12 in v7) {
    }
}
gc();
