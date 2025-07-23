const o1 = {
};
Object.defineProperty(o1, "toJSON", { configurable: true, value: Symbol });
o1.h = o1;
JSON.stringify(o1);
gc();
