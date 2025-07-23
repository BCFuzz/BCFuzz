function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        const v18 = createGlobalObject().Atomics.notify;
        try { v18.apply(); } catch (e) {}
    }
}
new F0();
gc();
