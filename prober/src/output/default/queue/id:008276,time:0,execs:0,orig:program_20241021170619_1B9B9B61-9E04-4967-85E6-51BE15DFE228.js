const v1 = new Date();
const o2 = {
    __proto__: v1,
};
try { o2.setYear(); } catch (e) {}
gc();
