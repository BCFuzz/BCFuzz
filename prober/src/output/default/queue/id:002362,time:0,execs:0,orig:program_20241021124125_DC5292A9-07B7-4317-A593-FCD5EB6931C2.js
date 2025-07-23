const v1 = new Float32Array();
const o2 = {
    __proto__: v1,
};
try { o2["fill"](); } catch (e) {}
gc();
