function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const o5 = {
    };
    Reflect.ownKeys(o5).splice();
}
new F0(F0, F0, F0);
new F0();
gc();
