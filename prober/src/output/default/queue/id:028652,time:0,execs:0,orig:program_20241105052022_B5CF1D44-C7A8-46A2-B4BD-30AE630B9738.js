for (let i = 0; i < 5; i++) {
    function f0() {
        return f0;
    }
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v6 = new F1(F1, f0, f0);
    const v7 = v6.constructor;
    function f9() {
        return Date;
    }
    Object.defineProperty(Uint8Array, "toString", { writable: true, configurable: true, value: f9 });
    for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
    }
    for (let v22 = 0; v22 < 5; v22++) {
        for (let i25 = 0, i26 = 10; i25 < i26; i26--) {
        }
        let v33 = Uint8Array.toString(f9, f0, F1);
        function f34(a35, a36, a37) {
            return arguments;
        }
        f34();
        const o40 = {
        };
        o40.constructor.create(v33);
        for (let i = 0; i < 5; i++) {
            v33 >>= "-13";
        }
    }
    function f43(a44, a45) {
        const v46 = a45.constructor;
        v46.prototype = v46;
        new v46(f9, f43);
        return v6;
    }
    f43(v6, v6);
    Object.defineProperty(v7, 0, { enumerable: true, get: f0, set: f43 });
}
gc();
