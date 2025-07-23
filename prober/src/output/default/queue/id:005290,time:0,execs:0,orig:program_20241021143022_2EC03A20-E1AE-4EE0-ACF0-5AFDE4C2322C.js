const o2 = {
    __proto__: Array,
    ...Array,
};
o2.from(9n);
gc();
