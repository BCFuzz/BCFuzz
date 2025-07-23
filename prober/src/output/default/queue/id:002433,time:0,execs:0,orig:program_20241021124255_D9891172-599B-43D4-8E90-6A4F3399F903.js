class C0 {
}
const o1 = {
};
const v3 = new Proxy(C0, o1);
const o4 = {
};
new Proxy(v3, o4);
gc();
