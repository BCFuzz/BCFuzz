const o1 = {
};
Object.defineProperty(o1, "b", { writable: true, enumerable: true, value: undefined });
Object.preventExtensions(o1);
Object.isFrozen(o1);
gc();
