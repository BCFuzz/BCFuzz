const v1 = 4 & 4;
class C2 {
}
new C2();
const v4 = new C2();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    let v9 = 200;
    const v10 = v9--;
    for (let i14 = 0, i15 = 10;
        (() => {
            const v16 = i14 < i15;
            v16 || v16;
            return v16;
        })();
        i15--) {
    }
    const o24 = {
        "maxByteLength": 3614,
    };
    const v26 = new SharedArrayBuffer(3614, o24);
    const v28 = new Int32Array(v26);
    const v30 = createGlobalObject();
    const v31 = v30.globalThis;
    try { v31.Int16Array(v4, v4, v1); } catch (e) {}
    const v33 = v30.Atomics;
    try { v33.waitAsync(v28, v9, v28, v10); } catch (e) {}
    for (let i37 = 0, i38 = 10; i37 / i37, i37 < i38; i38--) {
    }
}
new F5();
new F5();
for (let i50 = 0, i51 = 10;
    (() => {
        i50 - i50;
        const v53 = i50 != i51;
        v53 || v53;
        return v53;
    })();
    i51--) {
}
gc();
