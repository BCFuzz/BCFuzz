function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i4 = 0, i5 = 10;
        i5--, i4 < i5;
        (() => {
            const v11 = new Uint8ClampedArray();
            const v12 = v11.constructor;
            const v13 = new v12(i4, v12, v12);
            const v14 = v13.toString();
            const o15 = {
            };
            const v16 = o15.constructor;
            try { v16.create(v14); } catch (e) {}
            for (let v18 = 0; v18 < 100; v18++) {
            }
        })()) {
    }
}
const v21 = new F0();
const t19 = v21.constructor;
new t19(v21, F0, F0);
gc();
