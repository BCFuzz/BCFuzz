function f0() {
    const v2 = this.constructor;
    const v3 = v2.getOwnPropertySymbols(v2);
    function f5() {
        return f0;
    }
    const v6 = f5.apply(v3, arguments);
    try { v6(v2, this); } catch (e) {}
    return this;
}
f0();
gc();
