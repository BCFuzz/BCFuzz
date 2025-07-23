function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a4.caller;
}
new F1("stack", F1);
gc();
