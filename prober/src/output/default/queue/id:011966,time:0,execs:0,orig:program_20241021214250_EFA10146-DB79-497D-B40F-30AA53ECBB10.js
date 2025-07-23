const o2 = {
    ...Date,
};
Date.__proto__ = Symbol;
gc();
