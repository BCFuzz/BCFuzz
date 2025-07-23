const v1 = new WeakSet();
const o2 = {
    __proto__: v1,
};
try { o2.delete(o2, v1, v1); } catch (e) {}
gc();
