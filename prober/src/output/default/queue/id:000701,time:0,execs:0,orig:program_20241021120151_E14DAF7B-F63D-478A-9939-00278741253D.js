function f0() {
    const o1 = {
    };
    return o1;
}
const v2 = f0();
const v3 = f0();
const t7 = v2.constructor;
t7(v3);
gc();
