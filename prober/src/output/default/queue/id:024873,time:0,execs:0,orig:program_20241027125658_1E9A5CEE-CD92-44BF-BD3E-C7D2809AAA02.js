const o17 = {
    m(a1, a2, a3, a4) {
        const v6 = ([-13,-18603,-1073741824,-9007199254740992,-8962,9007199254740990,-9007199254740990,-53674,9007199254740992,2147483647]).values();
        const v8 = createGlobalObject();
        const t4 = v8.Float16Array;
        const v10 = new t4();
        function f11() {
            return this;
        }
        Object.defineProperty(v10, "maxByteLength", { enumerable: true, get: f11 });
        function f12(a13) {
            new ArrayBuffer(a13, this);
            return v8;
        }
        v10.valueOf = f12;
        return v10.copyWithin(v6, v10);
    },
};
try { o17.m(); } catch (e) {}
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
gc();
