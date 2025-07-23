const v4 = String.prototype;
v4[Symbol.toPrimitive] = Symbol;
const o12 = {
    toString(a7, a8, a9) {
        try { JSON.stringify(7, Int32Array, v4); } catch (e) {}
        return a8;
    },
};
([-371.89733414081445,-1.076894454549987e+308,-4.0,-1.0]).copyWithin(o12);
gc();
