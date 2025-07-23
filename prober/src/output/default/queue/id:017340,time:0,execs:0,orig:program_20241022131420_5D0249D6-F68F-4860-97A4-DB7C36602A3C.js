function f0() {
    return f0;
}
const v1 = [f0];
const o2 = {
};
const v4 = new Proxy(f0, o2);
v1.sort(v4);
gc();
