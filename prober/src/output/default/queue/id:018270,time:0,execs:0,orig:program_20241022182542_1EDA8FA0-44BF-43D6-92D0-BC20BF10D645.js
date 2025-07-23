function F1() {
    if (!new.target) { throw 'must be called with new'; }
    function f3(a4, a5, a6, a7) {
        "c" in this;
        return a7;
    }
    f3("c", F1, this, this);
}
const v10 = new F1();
const t9 = v10.constructor;
new t9(v10, F1, v10, v10);
new F1();
gc();
