function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        const v8 = this.constructor;
        try { new v8(F4, this, Int32Array, a7, F0); } catch (e) {}
        this.c = Int32Array;
    }
    new F4(Int32Array, Int32Array);
}
const v11 = new F0();
new F0(v11);
gc();
