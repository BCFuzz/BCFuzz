for (let v1 = 0; v1 < 10; v1++) {
    const v2 = [1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307];
    const v5 = Float32Array.from(v2);
    for (let v6 = 0; v6 < 1000; v6++) {
    }
    let v7;
    try { v7 = Uint8Array(); } catch (e) {}
    let [v8,...v9] = v5;
    v9.toReversed(Uint8Array, Uint8Array, v8);
    const v11 = BigUint64Array.constructor;
    const v13 = new Int16Array(v7, v5, v9);
    const v14 = new Int16Array(v2);
    try { Reflect.deleteProperty(); } catch (e) {}
    const v19 = Reflect.apply(v14.copyWithin, v13, v11).fill(v9, v11, Uint8Array, Uint8Array, BigUint64Array);
    class C20 extends Int16Array {
    }
    const v21 = new C20();
    const v22 = v21.find(C20);
    try { v19.find(v22, v21, Uint8Array, v21, BigUint64Array); } catch (e) {}
}
gc();
