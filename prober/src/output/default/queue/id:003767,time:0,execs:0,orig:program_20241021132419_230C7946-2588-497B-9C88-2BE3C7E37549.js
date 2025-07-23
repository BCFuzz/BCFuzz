const v1 = new Date(Date);
const o2 = {
    __proto__: v1,
};
try { o2.getMilliseconds(); } catch (e) {}
gc();
