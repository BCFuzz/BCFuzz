class C1 {
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const t4 = ([a5,a5]).constructor;
    t4(1000000.0).concat(C1).indexOf(a4);
}
new F2(C1);
gc();
