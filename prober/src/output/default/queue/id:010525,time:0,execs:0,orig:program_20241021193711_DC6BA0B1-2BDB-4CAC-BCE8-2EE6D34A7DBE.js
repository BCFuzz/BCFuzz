const v0 = [4.50467827560672,889918.9398356758];
for (let v1 = 0; v1 < 10; v1++) {
    const v2 = [1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307];
    try { v0(v0, v1, v2, v0); } catch (e) {}
    const v5 = Float32Array.from(v2);
    for (let v6 = 0; v6 < 1000; v6++) {
    }
    class C7 {
    }
    const v8 = new C7();
    const v9 = v8.__defineSetter__;
    for (let i11 = 0; i11 < 21768; i11++) {
    }
    function F17() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v19 = F17.__defineSetter__;
    const v20 = new F17();
    const v21 = new F17();
    const v22 = v21.constructor;
    v22.toString(v1, Float32Array, v5, v20);
    const o26 = {
        "maxByteLength": 1401,
    };
    const v28 = new SharedArrayBuffer(1401, o26);
    const o29 = {
    };
    const v31 = new Uint32Array(v28);
    delete v31.byteOffset;
    function f34(a35, a36, a37, a38) {
        return a38;
    }
    const v40 = new Int16Array(v22, v9, v19);
    const v41 = new Int16Array(v22, v22, v19);
    Reflect.apply(v41.copyWithin, v40, v22);
    const v45 = `
    `;
    eval(v19);
}
gc();
