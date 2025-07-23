function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i9++, i8 < i9;
        (() => {
            i9--;
            const v17 = new Int8Array(255);
            v17[32] = v17;
            for (const v18 in v17) {
            }
            const v20 = ("isSealed").constructor;
            try { new v20(this); } catch (e) {}
            const v23 = new Set("isSealed");
            const v24 = v23.add("isSealed");
            try { v24.values(); } catch (e) {}
        })()) {
        i9--;
    }
}
new F0(F0, F0, F0, F0);
gc();
