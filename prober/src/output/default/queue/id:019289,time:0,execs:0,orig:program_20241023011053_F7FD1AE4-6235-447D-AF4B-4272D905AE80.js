const o2 = {
    ["length"]: 1000000000000.0,
};
const v5 = createGlobalObject().Float16Array;
try { new v5(o2); } catch (e) {}
gc();
