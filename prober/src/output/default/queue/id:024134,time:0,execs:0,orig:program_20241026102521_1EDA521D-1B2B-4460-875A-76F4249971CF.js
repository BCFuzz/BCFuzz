const o2 = {
    "get": 5,
};
const v4 = new Proxy(RegExp, o2);
try { new Float64Array(v4); } catch (e) {}
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
gc();
