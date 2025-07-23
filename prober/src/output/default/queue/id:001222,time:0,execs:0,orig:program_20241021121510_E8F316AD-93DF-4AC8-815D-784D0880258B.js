const v2 = new FinalizationRegistry(Int8Array);
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v2;
}
gc();
