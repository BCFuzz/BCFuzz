const v3 = String.prototype;
const o10 = {
    toString(a5, a6, a7) {
        try { JSON.stringify(7, Int32Array, v3); } catch (e) {}
    },
};
([-371.89733414081445,-1.076894454549987e+308,-4.0,-1.0]).copyWithin(o10);
gc();
