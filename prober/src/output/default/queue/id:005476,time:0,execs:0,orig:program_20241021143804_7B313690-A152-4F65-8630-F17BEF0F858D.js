class C1 {
}
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a4.isPrototypeOf(C1);
}
new F2(2071212816);
gc();
