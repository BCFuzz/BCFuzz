function f0() {
    const o1 = {
    };
    return o1;
}
const v2 = f0();
const v3 = f0();
const o4 = {
    [v3]: v2,
};
Reflect.ownKeys(v3);
gc();
