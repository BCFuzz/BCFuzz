const v0 = /(?!(a))\1*/md;
function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8) {
        ("1073741823").split(v0);
        return this;
    }
    this.valueOf = f6;
    Reflect.construct(Date, [this]);
}
new F1(v0, v0, F1);
gc();
