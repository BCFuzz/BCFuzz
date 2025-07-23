for (const v4 in "matchAll") {
    function F5(a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v10 = new F5();
    try { v10.constructor(); } catch (e) {}
}
const v12 = new Int8Array(128);
for (const v13 in v12) {
    v13[0] = v13;
    const o16 = {
        "maxByteLength": 3439449941,
    };
    const v17 = new SharedArrayBuffer(3439449941, o16);
    v17.h = v17;
}
gc();
