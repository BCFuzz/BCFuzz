function f0() {
}
const o1 = {
    "defineProperty": f0,
};
const v2 = o1.defineProperty;
function f3() {
    const o4 = {
    };
    o4.getPrototypeOf = v2;
    const v6 = new Proxy(Proxy, o4);
    v6.bind(v2, v6, o1);
    return v2;
}
v2.toString = f3;
const o12 = {
    get c() {
        const v9 = this.constructor;
        const v10 = v9(this, f0, v9, v9, v9);
        try { v10.hasOwnProperty(f0); } catch (e) {}
        return v9;
    },
};
o12.c;
for (let i16 = 10, i17 = 10; -13369 < i17; i17--) {
}
gc();
