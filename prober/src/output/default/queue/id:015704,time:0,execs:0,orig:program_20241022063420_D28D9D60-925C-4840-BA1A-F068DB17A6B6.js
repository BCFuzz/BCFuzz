function f0() {
}
const v1 = /i/mis;
const o2 = {
    "defineProperty": f0,
};
const v4 = new Proxy(v1, o2);
class C6 {
    constructor(a8, a9, a10) {
        try { new a9(a8, a10, v4); } catch (e) {}
        a10.d = a10;
    }
}
new C6(512, C6, C6);
gc();
