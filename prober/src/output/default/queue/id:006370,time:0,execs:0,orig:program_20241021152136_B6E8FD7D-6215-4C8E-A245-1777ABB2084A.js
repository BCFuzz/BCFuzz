for (let v0 = 0; v0 < 10; v0++) {
    let v2;
    try { v2 = Float32Array.from(); } catch (e) {}
    for (let v3 = 0; v3 < 1000; v3++) {
    }
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v6 = F4.__defineSetter__;
    let v7;
    try { v7 = v6(v2, v6, v2); } catch (e) {}
    const v8 = new F4();
    try { v8.constructor(v8, F4, v7, v2); } catch (e) {}
    const v10 = new F4();
    function f11() {
    }
    const v12 = v10.constructor;
    const v13 = v12.toString();
    v13.match(v0);
    const v16 = new Int16Array(v6, v13, v13);
    function f17() {
        return v13;
    }
    const v18 = new Int16Array(v16, v0, v6);
    const v20 = v18.copyWithin;
    const v22 = Reflect.apply(v20, v16, v12).fill(v10, v0, v20);
    function f23() {
        return v13;
    }
    Object.defineProperty(v22, "constructor", { get: f23 });
    v22.constructor;
}
gc();
