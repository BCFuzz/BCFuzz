function f0() {
    const v2 = this.constructor;
    const v3 = v2.getOwnPropertySymbols(v2);
    function f4() {
        return f0;
    }
    const v5 = f4.apply(v3, v3);
    try { v5(); } catch (e) {}
    return f0;
}
f0();
gc();
