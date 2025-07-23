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
    const v24 = createGlobalObject();
    v24.globalThis;
    v24.Atomics.waitAsync(v22, v4, v22, v5);
    for (let i30 = 0, i31 = 10;
        i30 < i31;
        (() => {
            i31--;
            const v36 = `
                async function* f37(a38, a39) {
                    return f37;
                }
                f37(F0, v5);
            `;
            eval(v36).next();
        })()) {
    }
}
const v46 = new F0(F0, F0);
new F0(v46, v46);
new F0();
for (let i51 = 0, i52 = 10; i51 != i52; i52--) {
}
gc();
