for (let v0 = 0; v0 < 10; v0++) {
    const v3 = Float32Array.from([1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307]);
    v3.keys();
    for (let v5 = 0; v5 < 1000; v5++) {
    }
    function F6() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v8 = F6?.__defineSetter__;
    try { v8(); } catch (e) {}
    const v10 = new F6();
    const v11 = new F6();
    const v12 = v11.constructor;
    v12.toString(v0, Float32Array, v3, v10).match(v10);
    const v16 = new Int16Array();
    const v17 = new Int16Array(v12, v12, v8);
    const v20 = Reflect.apply(v17.copyWithin, v16, v12);
    try { v20.filter(); } catch (e) {}
    const v22 = v20.fill();
    try { v22.find(); } catch (e) {}
}
gc();
