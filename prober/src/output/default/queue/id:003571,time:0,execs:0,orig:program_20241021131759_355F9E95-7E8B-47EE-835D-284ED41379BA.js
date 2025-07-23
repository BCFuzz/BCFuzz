const v1 = new Set();
const o2 = {
    __proto__: v1,
};
try { o2.clear(o2, o2, v1); } catch (e) {}
gc();
