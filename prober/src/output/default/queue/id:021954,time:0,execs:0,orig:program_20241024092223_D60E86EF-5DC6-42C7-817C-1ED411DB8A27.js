class C0 {
}
const o2 = {
    "getOwnPropertyDescriptor": Date,
};
const v4 = new Proxy(C0, o2);
try { v4.bind(); } catch (e) {}
gc();
