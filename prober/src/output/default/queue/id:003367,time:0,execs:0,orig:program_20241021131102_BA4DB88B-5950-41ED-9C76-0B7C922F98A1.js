function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    gc();
    eval();
}
const v13 = new F3();
const t9 = v13.constructor;
new t9();
gc();
