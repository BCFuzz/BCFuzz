Uint16Array[0] = "m";
const o3 = {
};
const v4 = new Date();
const v6 = Symbol.toPrimitive;
const v7 = v4[v6];
const o10 = {
    valueOf() {
        v7.apply(o3, Uint16Array);
        return v4;
    },
};
try { o10.valueOf(o3, Date, Date, Symbol, v6); } catch (e) {}
gc();
