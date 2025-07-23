class C0 {
}
new C0();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    let v6 = 200;
    const v7 = v6--;
    for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
    }
    const o20 = {
        "maxByteLength": 3614,
    };
    const v22 = new SharedArrayBuffer(3614, o20);
    const v24 = new Int32Array(v22);
    const v26 = createGlobalObject();
    const v27 = v26.globalThis;
    let v28;
    try { v28 = v27.Int16Array(); } catch (e) {}
    const v31 = v26.Atomics.waitAsync(v24, v6, v24, v7).__defineSetter__;
    try { v31(v28); } catch (e) {}
    for (let i35 = 0, i36 = 10; i36 << i36, i35 < i36; i36--) {
    }
}
new F2();
new F2();
for (let i48 = 0, i49 = 10;
    (() => {
        const v50 = i48 != i49;
        v50 || v50;
        return v50;
    })();
    i49--) {
}
gc();
