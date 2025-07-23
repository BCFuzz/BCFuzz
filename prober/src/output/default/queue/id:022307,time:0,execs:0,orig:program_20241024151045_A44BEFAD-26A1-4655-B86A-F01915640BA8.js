class C1 {
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const t4 = ([C1,C1,C1,C1,C1]).constructor;
    t4(1000000.0).concat(C1);
    for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
    }
}
new F2(C1, F2, C1);
gc();
