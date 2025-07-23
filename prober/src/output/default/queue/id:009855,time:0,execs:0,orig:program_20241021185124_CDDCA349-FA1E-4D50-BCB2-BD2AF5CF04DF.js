for (let v1 = 0; v1 < 10; v1++) {
    const v5 = Float32Array.from([1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307]);
    for (let v6 = 0; v6 < 1000; v6++) {
    }
    let v7;
    try { v7 = Uint8Array(); } catch (e) {}
    let [v8,...v9] = v5;
    const v10 = BigUint64Array.constructor;
    const v12 = new Int16Array(v10);
    const v13 = new Int16Array();
    const v17 = Reflect.apply(v13.copyWithin, v12, v10).fill(v7);
    class C18 extends Int16Array {
    }
    try { v17.find(); } catch (e) {}
}
gc();
