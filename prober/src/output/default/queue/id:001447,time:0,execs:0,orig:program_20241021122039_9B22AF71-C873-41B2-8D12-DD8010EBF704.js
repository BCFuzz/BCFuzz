function f2(a3) {
    const o4 = {
        1073741825: a3,
        [7]: -65536,
    };
    return o4;
}
const v5 = f2();
Object.defineProperty(f2(), 7, { value: v5 });
gc();
