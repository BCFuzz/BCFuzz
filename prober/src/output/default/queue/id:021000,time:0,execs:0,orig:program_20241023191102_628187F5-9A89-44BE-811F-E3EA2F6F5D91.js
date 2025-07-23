function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = createGlobalObject().Float16Array;
    const v9 = new t2();
    v9.constructor = a5;
    v9.slice(a3, this);
}
new F0();
gc();
