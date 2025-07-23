const v1 = new Int32Array();
const o3 = {
    "a": 9.50275634560187e+307,
    __proto__: v1,
};
delete o3.a;
gc();
