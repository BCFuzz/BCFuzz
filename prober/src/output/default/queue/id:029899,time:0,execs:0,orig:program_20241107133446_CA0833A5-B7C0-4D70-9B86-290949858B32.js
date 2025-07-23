const v1 = [-0.0,-1.0,1000000000000.0,-1000000000000.0,3.0,1e-15,4.0,189.95075184172651];
for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
        }
        const o21 = {
            "maxByteLength": 3614,
        };
        const v23 = new SharedArrayBuffer(3614, o21);
        const v25 = new Int32Array(v23, v1, "b");
        const v28 = createGlobalObject().Atomics;
        try { v28.waitAsync(v25); } catch (e) {}
        for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
        }
        i5--;
    })()) {
}
gc();
