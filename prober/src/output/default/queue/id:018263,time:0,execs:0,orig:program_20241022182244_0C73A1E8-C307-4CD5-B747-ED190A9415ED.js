for (let i = 0; i < 5; i++) {
    function F0(a2) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v3 = new F0(F0);
    const o27 = {
        n(a5, a6, a7) {
            const v8 = [];
            const v9 = [5.0,0.15731719625813334];
            v9.minimum = v8;
            const t10 = this.WebAssembly.Memory;
            new t10(v9);
            ("DVVte").big().match("DVVte", a7);
            for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
            }
            return v3;
        },
    };
    const t18 = o27.n;
    t18(F0);
    function f30() {
        return v3;
    }
    function F32(a34, a35, a36) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v37 = new F32();
    const v38 = v37.constructor;
    const v40 = ("-13")[undefined];
    function f41(a42, a43) {
        const v44 = a43.constructor;
        v44.prototype = v44;
        new v44();
        return a43;
    }
    f41(v40, v37);
    Object.defineProperty(v38, 0, { enumerable: true, get: f30, set: f41 });
}
gc();
