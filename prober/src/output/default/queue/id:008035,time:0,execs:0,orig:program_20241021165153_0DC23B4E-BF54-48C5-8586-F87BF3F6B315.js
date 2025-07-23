function f0() {
    return f0;
}
function f1() {
    return f1;
}
const o2 = {
};
o2.get = f0;
const v4 = new Proxy(f1, o2);
new v4(Proxy);
gc();
