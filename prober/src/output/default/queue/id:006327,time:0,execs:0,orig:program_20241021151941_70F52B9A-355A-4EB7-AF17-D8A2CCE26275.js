function f1(a2) {
    const o6 = {
        toString(a4, a5) {
        },
        __proto__: Array,
        ...a2,
        [a2]: Array,
    };
    return o6;
}
f1(f1());
f1(Array);
gc();
