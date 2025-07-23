const v1 = ["d"];
const o2 = {
    __proto__: v1,
};
o2.pop(v1, o2, o2, v1, "d");
gc();
