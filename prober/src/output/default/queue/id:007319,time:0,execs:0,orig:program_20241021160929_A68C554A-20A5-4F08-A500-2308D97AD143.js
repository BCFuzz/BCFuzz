function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2() {
        return /9(?!a)?a/gs.constructor.$5;
    }
    f2();
    f2();
}
const v8 = new F0();
const v9 = new F0();
new F0();
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    const t13 = a13.constructor;
    new t13();
}
new F11(v9);
new F11(v8);
gc();
