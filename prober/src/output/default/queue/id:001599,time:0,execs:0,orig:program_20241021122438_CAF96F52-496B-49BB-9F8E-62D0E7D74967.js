function f0() {
    return f0;
}
const v2 = [1342405920];
const o3 = {
};
const v5 = new Proxy(f0, o3);
v2.map(v5);
gc();
