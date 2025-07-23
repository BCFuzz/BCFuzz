const o1 = {
    ...Array,
};
Reflect.deleteProperty(Array);
gc();
