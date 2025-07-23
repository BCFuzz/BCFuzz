for (let v0 = 0; v0 < 10; v0++) {
    const v1 = [1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307];
    try { BigUint64Array(); } catch (e) {}
    const v5 = Float32Array.from(v1);
    for (let v6 = 0; v6 < 1000; v6++) {
    }
    function F7() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v9 = F7.__defineSetter__;
    const v10 = new F7();
    const v11 = new F7();
    const v12 = v11.constructor;
    v12.toString(v0, Float32Array, v5, v10);
    const o16 = {
        "maxByteLength": 1401,
    };
    const v18 = new SharedArrayBuffer(1401, o16);
    const v20 = new Uint32Array(v18);
    const v21 = delete v20.byteOffset;
    const v23 = new Int16Array();
    const v24 = new Int16Array(v12, v12, v9);
    const v28 = Reflect.apply(v24.copyWithin, v23, v12).fill(v21);
    try { v28.find(); } catch (e) {}
}
gc();
