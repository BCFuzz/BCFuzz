const v2 = new WeakSet();
const o3 = {
    4: v2,
};
4 == undefined;
o3[204];
gc();
