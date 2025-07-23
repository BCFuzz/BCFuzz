for (let v1 = 0; v1 < 10; v1++) {
    const v2 = [1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307];
    function f4(a5) {
        return a5;
    }
    const v7 = Float32Array.from(v2);
    for (let v8 = 0; v8 < 1000; v8++) {
    }
    let v9;
    try { v9 = Uint8Array(); } catch (e) {}
    let [v10,...v11] = v7;
    const v12 = BigUint64Array.constructor;
    function f13() {
        return v2;
    }
    function f14(a15) {
        return f14;
    }
    const v17 = new Int16Array(v7, v10, v7);
    const v18 = new Int16Array();
    const v22 = Reflect.apply(v18.copyWithin, v17, v12).fill();
    try { v22.find(v11, v22, v1, v9); } catch (e) {}
}
gc();
