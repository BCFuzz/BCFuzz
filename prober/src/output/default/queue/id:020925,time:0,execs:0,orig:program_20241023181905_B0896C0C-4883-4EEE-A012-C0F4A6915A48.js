function f0(a1) {
    const o2 = {
    };
    return o2;
}
const v3 = f0(f0);
Object.defineProperty(f0(), 129, { enumerable: true, set: f0 });
const o5 = {
};
o5.constructor.freeze(v3);
gc();
