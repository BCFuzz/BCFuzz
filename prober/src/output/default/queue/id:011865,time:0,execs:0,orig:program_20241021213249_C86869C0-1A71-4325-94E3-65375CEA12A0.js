function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    let v6;
    try { v6 = new v5(a3, v5); } catch (e) {}
    const o14 = {
        valueOf(a8, a9) {
            function f10() {
                return this;
            }
            a9[Symbol.hasInstance] = f10;
            a8 instanceof a9;
            return v6;
        },
    };
    o14.valueOf(65536n, o14);
}
new F0(F0, F0, F0);
gc();
