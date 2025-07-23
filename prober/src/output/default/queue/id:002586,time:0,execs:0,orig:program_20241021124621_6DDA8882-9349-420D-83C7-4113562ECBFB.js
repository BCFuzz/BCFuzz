gc();
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    Date();
}
new F2();
gc();
