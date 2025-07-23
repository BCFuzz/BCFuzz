function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new SharedArrayBuffer(a3, a2);
    const v8 = new Uint16Array(v6);
    v8.sort();
}
new F0(F0, F0, F0);
gc();
