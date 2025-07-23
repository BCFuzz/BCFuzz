function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { a5.call(-268435456); } catch (e) {}
    function f7() {
        return a5;
    }
    function f8(a9) {
        return a9;
    }
    Object.defineProperty(this, "e", { get: f7, set: f8 });
}
new F2(129, F2);
gc();
