const v1 = new Date();
const o2 = {
    __proto__: v1,
};
const v3 = o2.getUTCMilliseconds;
try { v3.call(); } catch (e) {}
gc();
