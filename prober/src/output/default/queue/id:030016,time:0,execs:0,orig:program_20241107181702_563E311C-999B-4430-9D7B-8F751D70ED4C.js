const v2 = new Int32Array(Int32Array);
function f3() {
    for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
        const v15 = createGlobalObject();
        const v16 = v15.Atomics;
        let v17;
        try { v17 = v16.or(v2, i7, 64); } catch (e) {}
        try { v15.slice(v17); } catch (e) {}
    }
    const v20 = new Int32Array(3129);
    for (const v21 in v20) {
    }
    return v2;
}
f3();
gc();
