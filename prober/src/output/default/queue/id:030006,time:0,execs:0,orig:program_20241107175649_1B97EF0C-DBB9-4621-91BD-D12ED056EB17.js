function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    let v4 = 200;
    const v5 = v4--;
    for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
    }
    const o18 = {
        "maxByteLength": 3614,
    };
    const v20 = new SharedArrayBuffer(3614, o18);
    const v22 = new Int32Array(v20);
    const v25 = createGlobalObject().Atomics;
    v25.isLockFree();
    v25.waitAsync(v22, v4, v22, v5);
    for (let i30 = 0, i31 = 10;
        i30 < i31;
        (() => {
            i31--;
            const v36 = `
                async function* f37(a38, a39) {
                    return f37;
                }
                f37();
            `;
            eval(v36).next(eval);
        })()) {
    }
}
new F0();
const v47 = new F0();
const t30 = v47.constructor;
new t30(F0, F0, F0);
new F0(v47, F0);
for (let i53 = 0, i54 = 10; i53 != i54; i54--) {
}
gc();
