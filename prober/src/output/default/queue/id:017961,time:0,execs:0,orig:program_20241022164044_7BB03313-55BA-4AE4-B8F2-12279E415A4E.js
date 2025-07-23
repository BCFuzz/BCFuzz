const o1 = {
    __proto__: Array,
    ...Array,
};
for (const v2 in o1) {
}
gc();
