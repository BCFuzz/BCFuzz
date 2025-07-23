function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = createGlobalObject().Float16Array;
    const v9 = new v8();
    v9.g = v9;
    v9.slice(v8, a4, this);
}
new F0();
gc();
