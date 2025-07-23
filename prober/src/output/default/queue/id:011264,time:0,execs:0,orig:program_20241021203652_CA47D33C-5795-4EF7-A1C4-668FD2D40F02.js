const v1 = [4,1073741825];
v1.apply = 226;
const o3 = {
    __proto__: v1,
};
const v5 = new Proxy(RegExp, o3);
try { v5(); } catch (e) {}
gc();
