function F2() {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        const v5 = new Map("boolean");
        return v5;
    }
    this.constructor = f4;
    const v6 = this.constructor;
    try { v6(f4, v6, v6); } catch (e) {}
}
new F2();
gc();
