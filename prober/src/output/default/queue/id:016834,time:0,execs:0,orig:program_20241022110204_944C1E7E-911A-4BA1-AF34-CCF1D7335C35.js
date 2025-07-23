const v0 = [9223372036854775807];
const o9 = {
    toString(a2, a3, a4) {
        Reflect.construct(DataView, v0, Int32Array);
        return v0;
    },
};
try { o9.toString(v0, o9, o9); } catch (e) {}
gc();
