for (let v1 = 0; v1 < 100; v1++) {
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        try { new a4(); } catch (e) {}
        const o8 = {
        };
        try { Reflect.construct(); } catch (e) {}
        const v11 = Reflect.ownKeys(o8);
        if (a4 !== F2) {
            o8[Set] += v1;
            v11[138];
            [-4.0,-2.2250738585072014e-308];
        }
    }
    new F2(F2);
}
gc();
