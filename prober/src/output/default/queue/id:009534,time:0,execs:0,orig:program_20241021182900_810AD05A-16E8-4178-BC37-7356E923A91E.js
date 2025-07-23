for (let v0 = 0; v0 < 10; v0++) {
    const v3 = Float32Array.from([1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307]);
    let v4;
    try { v4 = v3.findIndex(); } catch (e) {}
    for (let v5 = 0; v5 < 250; v5++) {
    }
    function F6() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v8 = new F6();
    const v9 = v8.constructor;
    const v11 = new Int16Array(v0, v0, v9);
    const v12 = new Int16Array(v11, v4);
    const v16 = Reflect.apply(v12.copyWithin, v11, v9).fill();
    function F17(a19) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f20(a21, a22, a23) {
        return Int16Array;
    }
    try { v16.find(); } catch (e) {}
}
gc();
