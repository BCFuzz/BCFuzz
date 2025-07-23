const o7 = {
    valueOf(a1, a2) {
        return a1;
    },
    n(a4, a5, a6) {
        return a6;
    },
};
o7.enumerable = o7;
Reflect.defineProperty(Reflect, Reflect, o7);
gc();
