const o6 = {
    toString(a3, a4) {
        return this != a4;
    },
};
o6.toString(9n, 268435456n);
gc();
