function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = this.constructor;
    try { new v2(v2, F0); } catch (e) {}
    delete this.f;
}
new F0();
const v8 = new BigInt64Array(3852);
for (const v9 in v8) {
}
gc();
