function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = a2?.constructor;
    try { new v4(F0, a2); } catch (e) {}
    for (let i9 = 0, i10 = 10;
        (() => {
            for (let i13 = 0, i14 = 10; i14--, i13 < i14;) {
            }
            return i9 < i10;
        })();
        i10--) {
    }
    const o28 = {
        "maxByteLength": 3614,
    };
    const v30 = new SharedArrayBuffer(3614, o28);
    const v32 = new Int32Array(v30);
    createGlobalObject().Atomics.waitAsync(v32);
    class C39 extends Uint8ClampedArray {
    }
    new C39(4294967296);
    for (let i43 = 0, i44 = 10; i43 < i44; i44--) {
    }
}
const v51 = new F0();
new F0(v51);
for (let i55 = 0, i56 = 10; i55 != i56; i56--) {
}
gc();
