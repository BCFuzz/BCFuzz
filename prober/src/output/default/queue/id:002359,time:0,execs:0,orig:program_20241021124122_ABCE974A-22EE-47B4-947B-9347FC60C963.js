function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = [F0,F0,F0,F0];
    Reflect.setPrototypeOf(v7, v7);
}
new F0(F0, F0, F0, F0);
gc();
