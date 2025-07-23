const v1 = new Float64Array();
let v2 = 98231404n;
const v3 = v2--;
const v6 = new Int8Array(26);
for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
    const v19 = createGlobalObject().Atomics;
    try { v19.sub(v6, v1, v3); } catch (e) {}
}
gc();
