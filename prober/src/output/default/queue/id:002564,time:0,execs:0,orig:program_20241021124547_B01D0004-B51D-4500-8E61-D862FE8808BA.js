const o5 = {
    "g": Array,
    toString(a2, a3, a4) {
    },
};
for (const v6 in o5) {
    delete Array.prototype;
}
gc();
