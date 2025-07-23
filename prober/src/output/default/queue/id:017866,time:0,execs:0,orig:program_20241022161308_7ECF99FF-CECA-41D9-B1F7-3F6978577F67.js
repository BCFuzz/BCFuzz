const o8 = {
    valueOf(a2, a3) {
        return a2;
    },
    n(a5, a6, a7) {
        return a7;
    },
};
o8.value = -4294967295;
Reflect.defineProperty(Reflect, Reflect, o8);
gc();
