function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i6 = 0, i7 = 10;
        (() => {
            const v8 = i6 < i7;
            const v10 = createGlobalObject();
            v10.valueOf();
            const v12 = v10.Atomics;
            try { v12.xor(v12, i6, i6); } catch (e) {}
            return v8;
        })();
        i7--) {
    }
}
const v19 = new F0(F0, F0);
new F0(F0, v19);
gc();
