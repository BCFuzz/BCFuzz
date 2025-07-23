for (let i = 0; i < 5; i++) {
    function f0() {
        return f0;
    }
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F2();
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
        function f36(a37, a38, a39) {
            return arguments;
        }
        f36();
        const o42 = {
        };
        o42.constructor.create(v35);
    }
    function f45(a46, a47) {
        const v48 = a47.constructor;
        v48.prototype = v48;
        new v48();
        return f0;
    }
    f45(v10, v7);
    Object.defineProperty(v8, 0, { enumerable: true, get: f0, set: f45 });
}
gc();
