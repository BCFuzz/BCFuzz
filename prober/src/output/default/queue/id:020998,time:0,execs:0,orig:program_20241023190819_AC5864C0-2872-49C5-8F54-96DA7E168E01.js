const o19 = {
    m(a1, a2, a3, a4) {
        const v5 = [-13,-18603,-1073741824,-9007199254740992,-8962,9007199254740990,-9007199254740990,-53674,9007199254740992,2147483647];
        const v6 = v5.values();
        const v8 = createGlobalObject();
        const v9 = v8.Float16Array;
        const v10 = new v9(v6, v8, v9);
        function f11(a12) {
            const v14 = new ArrayBuffer(a12, this);
            v14.transfer();
            new Uint16Array(v14);
            return v5;
        }
        v10.valueOf = f11;
        v10.copyWithin(v6, v10);
        return this;
    },
};
try { o19.m(o19); } catch (e) {}
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
gc();
