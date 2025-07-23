const v3 = [[128n],128n];
const o4 = {
    [1000.0]: v3,
    __proto__: v3,
};
const v7 = createGlobalObject().Float16Array;
try { new v7(o4); } catch (e) {}
gc();
