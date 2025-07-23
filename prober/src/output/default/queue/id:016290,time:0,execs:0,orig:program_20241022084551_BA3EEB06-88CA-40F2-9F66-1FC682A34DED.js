function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.__defineSetter__;
    try { v5(); } catch (e) {}
}
new F0();
gc();
this.WebAssembly.LinkError;
gc();
