const v1 = new Int16Array(Int16Array);
function f2() {
    for (let i5 = 0, i6 = 10; i6--, i5 < i6;) {
        const v14 = createGlobalObject();
        const v15 = v14.Atomics;
        let v16;
        try { v16 = v15.or(v1, i6, i6); } catch (e) {}
        try { v14.slice(v16); } catch (e) {}
    }
    const v20 = new Uint8Array(3129);
    for (const v21 in v20) {
    }
    return f2;
}
f2();
gc();
