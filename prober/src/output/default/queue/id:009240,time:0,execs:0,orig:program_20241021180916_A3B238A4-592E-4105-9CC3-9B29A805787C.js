const o7 = {
    toString(a1, a2, a3) {
        return JSON["stringify"](this);
    },
};
o7[10] = o7;
const v8 = [-371.89733414081445,-1.076894454549987e+308,-4.0,-1.0];
try { v8.copyWithin(o7); } catch (e) {}
gc();
