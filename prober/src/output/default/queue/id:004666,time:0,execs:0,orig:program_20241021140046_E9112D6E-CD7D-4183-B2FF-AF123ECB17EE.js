function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(a4, a4); } catch (e) {}
    -a5;
}
new F2(1336);
new F2(3949);
gc();
