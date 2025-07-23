class C0 {
}
const v1 = new C0();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    let v6 = 200;
    const v7 = v6--;
    for (let i10 = 0, i11 = 10;
        (() => {
            const v12 = i10 < i11;
            v12 || v12;
            return v12;
        })();
        i11--) {
    }
    const o21 = {
        "maxByteLength": 3614,
    };
    const v23 = new SharedArrayBuffer(3614, o21);
    const v25 = new Int32Array(v23);
    createGlobalObject().Atomics.waitAsync(v25, v6, v25, v7);
    for (let i32 = 0, i33 = 10; i32 / i32, i32 < i33; i33--) {
    }
}
new F2(C0, v1);
for (let i44 = 0, i45 = 10;
    (() => {
        const v46 = i44 != i45;
        v46 || v46;
        return v46;
    })();
    i45--) {
}
gc();
