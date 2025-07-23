function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a2(this, F0, a5, this, F0); } catch (e) {}
    try { a4(a3, a2, F0); } catch (e) {}
    ReferenceError.stackTraceLimit = ReferenceError;
}
new F0(F0);
gc();
