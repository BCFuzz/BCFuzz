const o3 = {
    valueOf(a2) {
        a2[3.0] = this;
        return 3.0;
    },
};
const o4 = {
    ...o3,
};
const v6 = new Date();
try { v6.setUTCFullYear(o4); } catch (e) {}
gc();
