new Uint32Array();
for (let v2 = 0; v2 < 5; v2++) {
    const v4 = new Uint8ClampedArray();
    const v5 = v4.constructor;
    const v6 = new v5();
    const v7 = v6.toString(v5, v6, v6, Uint32Array);
    const o8 = {
    };
    function F9(a11, a12, a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v15 = o8.constructor;
    try { v15.create(v7); } catch (e) {}
}
for (let v17 = 0; v17 < 250; v17++) {
}
gc();
