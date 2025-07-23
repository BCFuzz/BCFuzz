const v1 = new Date();
const o2 = {
    __proto__: v1,
};
try { o2.getUTCHours(o2); } catch (e) {}
gc();
