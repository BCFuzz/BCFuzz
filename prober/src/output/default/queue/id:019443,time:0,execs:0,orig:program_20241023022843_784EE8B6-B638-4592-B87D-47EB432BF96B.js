const o8 = {
    toString(a2, a3, a4) {
        Reflect.construct(DataView, "setUTCSeconds");
        return this;
    },
};
function f9(a10, a11) {
    return "setUTCSeconds";
}
const v12 = f9();
const v13 = f9();
const o19 = {
    n(a15, a16, a17) {
        this.parseInt(v13, a16);
        return f9;
    },
};
const v20 = o19.n;
try { v20(v12, o8); } catch (e) {}
gc();
