function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i4 = 0, i5 = 10;
        i5--, i4 < i5;
        (() => {
            const v12 = new Uint8ClampedArray(i4);
            const t1 = v12.constructor;
            const v14 = new t1(this, F0, F0, F0, v12);
            v14.toString = eval;
            const v15 = v14.toString();
            const o16 = {
            };
            const v17 = o16.constructor;
            try { v17.create(v15); } catch (e) {}
            for (let v19 = 0; v19 < 10; v19++) {
            }
        })()) {
    }
}
new F0();
gc();
