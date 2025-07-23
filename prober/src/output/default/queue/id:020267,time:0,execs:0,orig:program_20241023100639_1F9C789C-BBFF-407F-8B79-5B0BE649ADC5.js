for (let i = 0; i < 5; i++) {
    function f0() {
        return f0;
    }
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F2(undefined, f0, f0);
    const v8 = v7.constructor;
    const v10 = ("-13")[undefined];
    function f11() {
        return Date;
    }
    Object.defineProperty(Uint8Array, "toString", { writable: true, configurable: true, value: f11 });
    for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
    }
    for (let v24 = 0; v24 < 5; v24++) {
        for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
        }
        const v35 = Uint8Array.toString();
        const o36 = {
        };
        o36.constructor.create(v35);
    }
    function f39(a40, a41) {
        const v42 = a41.constructor;
        v42.prototype = v42;
        new v42(undefined, Uint8Array);
        return F2;
    }
    f39(v10, v7);
    Object.defineProperty(v8, 0, { enumerable: true, get: f0, set: f39 });
}
gc();
