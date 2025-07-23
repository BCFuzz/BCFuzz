function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { new v4(); } catch (e) {}
    this.e = this;
    new Uint8Array(681);
}
new F0();
new F0();
gc();
