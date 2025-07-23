const v1 = new WeakMap();
const o2 = {
    __proto__: v1,
};
try { o2.set(); } catch (e) {}
gc();
