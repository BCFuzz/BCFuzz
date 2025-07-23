const v1 = new Float32Array();
const v3 = new BigInt64Array();
for (let v4 = 0; v4 < 25; v4++) {
    const v7 = new Float64Array(v4, 42);
    for (let i = 0; i < 5; i++) {
        for (let v8 = 0; v8 < 25; v8++) {
        }
        42 in v7;
    }
}
const v10 = v1.constructor;
try { v10.from(v3); } catch (e) {}
gc();
