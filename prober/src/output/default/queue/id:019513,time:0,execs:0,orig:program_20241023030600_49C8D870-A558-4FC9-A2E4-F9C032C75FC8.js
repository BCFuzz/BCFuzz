function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.caller;
}
Reflect.construct(F1, [0.36808867138185,F1,Reflect,F1]);
gc();
