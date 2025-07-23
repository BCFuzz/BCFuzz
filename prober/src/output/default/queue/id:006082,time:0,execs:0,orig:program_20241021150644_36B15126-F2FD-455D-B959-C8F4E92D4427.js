const v1 = new Float64Array(Float64Array, Float64Array, Float64Array);
const t1 = v1.constructor;
const v4 = new t1();
new Int32Array(v4);
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i14 = 0, i15 = 10;
        i14 < i15;
        (() => {
            i15--;
            const v21 = ("function").toString;
            try { v21(Int32Array); } catch (e) {}
        })()) {
    }
}
new F6();
gc();
