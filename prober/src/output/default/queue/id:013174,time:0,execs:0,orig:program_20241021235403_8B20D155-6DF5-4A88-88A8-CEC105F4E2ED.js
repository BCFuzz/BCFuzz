for (let v2 = 0; v2 < 10; v2++) {
    const v6 = Float32Array.from([1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307]);
    for (let v7 = 0; v7 < 1000; v7++) {
    }
    let v8;
    try { v8 = Uint8Array(); } catch (e) {}
    let [v9,...v10] = v6;
    const v11 = BigUint64Array.constructor;
    const v12 = new Int16Array(v11);
    const v13 = new Int16Array(v2);
    const v15 = v13.copyWithin;
    const v16 = Reflect.apply(v15, v12, v11);
    const v17 = v16.fill(Uint8Array, v16, v15, v13, Uint8Array);
    class C18 extends Int16Array {
    }
    C18.of().at(v8, v13, v12, Uint8Array, v6);
    const v21 = new Int16Array();
    v21.find(C18);
    try { v17.find(Int16Array); } catch (e) {}
}
gc();
