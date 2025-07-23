function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(a5, a5); } catch (e) {}
    -a4;
}
new F2(6n, 735377566n);
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    /(\2)(\1)/md.test();
}
new F10();
gc();
