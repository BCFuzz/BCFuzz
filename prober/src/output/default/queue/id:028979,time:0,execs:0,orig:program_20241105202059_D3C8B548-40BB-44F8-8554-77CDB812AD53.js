const v2 = new Int16Array(Int16Array);
function f3() {
    for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
        const v15 = createGlobalObject();
        const v16 = v15.Atomics;
        let v17;
        try { v17 = v16.or(v2, i7, 64); } catch (e) {}
        try { v15.slice(v17); } catch (e) {}
    }
    const v21 = new Uint8Array(3129);
    for (const v22 in v21) {
    }
    return 3129;
}
f3();
gc();
