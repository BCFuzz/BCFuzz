const v1 = new Float64Array();
const o3 = {
    "get": DataView,
};
const v5 = new Proxy(DataView, o3);
try { new v5(v1); } catch (e) {}
for (let i9 = 16, i10 = 16; -13369 < i10; i10--) {
}
gc();
