function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = new Uint32Array(this, F0, this);
    const v6 = createGlobalObject().Float16Array;
    v3["subarray"]();
    const v9 = new v6();
    v9.subarray(this, Uint32Array).set(v3);
}
new F0();
gc();
