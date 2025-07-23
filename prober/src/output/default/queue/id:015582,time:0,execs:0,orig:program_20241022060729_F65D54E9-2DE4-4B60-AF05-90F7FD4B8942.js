function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        const v10 = this.hasOwnProperty();
        v10 === (v10 && v10);
    }
    new F6();
    const v14 = new F6(a3, F0);
    const v15 = v14.constructor;
    new v15(F0, v15, v15, F0, v15);
    const v17 = v14.constructor;
    new v17();
    new v17(F0);
}
const v20 = new F0(F0, F0, F0, F0);
const t16 = v20.constructor;
new t16();
gc();
