const v1 = ["function"];
const o3 = {
    "a": 536870912n,
    __proto__: v1,
};
o3.a += o3;
gc();
