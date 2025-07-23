function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 10; v4++) {
        const v7 = ([804168982])["slice"]();
        const v8 = v7.slice(v7);
        function f9() {
            return this;
        }
        function f10(a11) {
            return this;
        }
        Object.defineProperty(v8, 0, { get: f9, set: f10 });
        for (let v12 = 0; v12 < 250; v12++) {
        }
    }
}
new F0();
gc();
