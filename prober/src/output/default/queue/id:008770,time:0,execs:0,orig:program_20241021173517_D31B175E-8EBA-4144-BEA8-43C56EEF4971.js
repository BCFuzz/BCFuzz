const v2 = new Uint16Array();
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10, a11) {
        v2[a11];
        return this;
    }
    f7(4, this, f7, 469);
    const v14 = this.constructor;
    try { new v14(); } catch (e) {}
}
new F4(F4);
gc();
