for (let v0 = 0; v0 < 100; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        try { new v0(v0); } catch (e) {}
        const o7 = {
        };
        const v9 = Reflect.ownKeys(o7);
        if (a3 !== F1) {
            v9[138];
        }
    }
    new F1(F1);
}
gc();
