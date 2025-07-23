function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(a5, a5, a7); } catch (e) {}
    a7 >> 9007199254740992;
    this.g = a7;
}
new F3(1024, 2149, 2149);
new F3(2149, 2149, 7);
gc();
