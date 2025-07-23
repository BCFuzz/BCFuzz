for (let v0 = 0; v0 < 10; v0++) {
    const v3 = Float32Array.from([1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307]);
    for (let v4 = 0; v4 < 250; v4++) {
    }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F5();
    const v8 = v7.constructor;
    const v10 = new Int16Array(v0, v0, v8);
    const v11 = new Int16Array(v3, v0, v3);
    const v14 = Reflect.apply(v11.copyWithin, v10, v8);
    const v15 = v14.fill(v14);
    try { v15.find(); } catch (e) {}
}
gc();
