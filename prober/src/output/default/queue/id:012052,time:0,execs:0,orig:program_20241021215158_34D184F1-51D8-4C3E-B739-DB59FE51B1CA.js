const o8 = {
    toString(a1, a2, a3) {
        try { this.toLocaleString(a1, a3, this); } catch (e) {}
        return JSON["stringify"]();
    },
};
([-371.89733414081445,-1.076894454549987e+308,-4.0,-1.0]).copyWithin(o8);
gc();
