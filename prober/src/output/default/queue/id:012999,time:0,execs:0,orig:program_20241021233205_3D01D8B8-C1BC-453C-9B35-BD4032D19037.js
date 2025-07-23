function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = [-7.471332272861508e+307];
    for (let i7 = 0, i8 = 10;
        (() => {
            const v9 = i7 < i8;
            const v12 = createGlobalObject().Atomics;
            try { v12.sub(v4, v12, v9); } catch (e) {}
            return v9;
        })();
        i8--) {
    }
    function F19(a21, a22) {
        if (!new.target) { throw 'must be called with new'; }
    }
}
const v23 = new F0(F0, F0);
new F0(v23, F0);
gc();
