function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    eval(JSON.stringify(JSON));
}
new F0(F0);
gc();
