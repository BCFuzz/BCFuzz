function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        const v10 = new Int32Array(209);
        const v11 = [];
        const v13 = [];
        Reflect.apply(v11.toSorted, v10, v13);
    }
    new F4();
}
Reflect.construct(F0, []);
gc();
