function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = this.constructor;
    try { new v3(v3, F0, F0, F0); } catch (e) {}
    const o5 = {
    };
    const v7 = new Proxy(this, o5);
    v7.length;
}
new F0(F0);
gc();
