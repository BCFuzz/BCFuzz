async function f0(a1, a2, a3) {
    function f4(a5, a6) {
        const o9 = {
            "maxByteLength": 2312845920,
        };
        const v10 = new ArrayBuffer(a1, o9);
        const v13 = createGlobalObject().Float16Array;
        const v15 = new Float32Array(v10);
        v13.from(v15);
        return createGlobalObject;
    }
    a3.then = f4;
    return a3;
}
f0(f0, f0, f0);
gc();
