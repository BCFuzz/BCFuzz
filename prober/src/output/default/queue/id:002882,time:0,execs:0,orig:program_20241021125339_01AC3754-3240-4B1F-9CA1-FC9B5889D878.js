function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    Date.parse(a4);
}
new F1(196.25100004624983, F1);
gc();
