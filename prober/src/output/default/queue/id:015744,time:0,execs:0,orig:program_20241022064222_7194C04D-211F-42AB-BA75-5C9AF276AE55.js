for (let i = 0; i < 10; i++) {
    function f0() {
        return f0;
    }
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F2(F2, F2, f0);
    const v8 = v7.constructor;
    const v10 = ("-13")[undefined];
    function f11(a12, a13) {
        const v14 = a13.constructor;
        v14.prototype = v14;
        const v15 = new v14(a13, v14, undefined, "-13");
        for (let v16 = 0; v16 < 25; v16++) {
            function F17(a19, a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                for (let i24 = 0, i25 = 10; i24 <= i25; i25--) {
                    function f32(a33, a34) {
                        [-2.0,0.3584123256554328,392191.46831176267,0.4410410947718395,NaN,-357.92007581942516,5.0];
                        return arguments;
                    }
                    f32();
                }
            }
            new F17(v15, v15, F17);
        }
        return f0;
    }
    f11(v10, v7);
    Object.defineProperty(v8, 0, { enumerable: true, get: f0, set: f11 });
}
gc();
