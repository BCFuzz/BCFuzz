for (let i = 0; i < 10; i++) {
    class C0 {
        static 3;
    }
    function f1() {
        return f1;
    }
    function F3(a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v8 = new F3();
    const v9 = v8.constructor;
    const v11 = ("-13")[undefined];
    function f12(a13, a14) {
        const v15 = a14.constructor;
        v15.prototype = v15;
        new v15();
        return v11;
    }
    f12(v11, v8);
    Object.defineProperty(v9, 0, { enumerable: true, get: f1, set: f12 });
}
gc();
