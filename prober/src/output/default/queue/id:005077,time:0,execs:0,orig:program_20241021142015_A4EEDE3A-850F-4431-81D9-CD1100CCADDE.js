function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3, a4) {
        a3(this);
        return this;
    }
    new Promise(f2);
}
new F0();
new F0();
this.DataView;
gc();
