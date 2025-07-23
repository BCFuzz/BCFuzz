class C0 {
}
const v1 = C0.bind();
const o2 = {
};
new Proxy(v1, o2);
gc();
