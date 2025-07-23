const v2 = 8 != "-7";
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    with (a7) {
        var g = v2;
    }
}
new F4(F4, -48245n);
gc();
