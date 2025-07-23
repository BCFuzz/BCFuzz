const o4 = {
    "g": -4294967296,
    valueOf(a2, a3) {
        return a2;
    },
};
function f5(a6) {
    a6.length = a6;
    const o8 = {
        "f": a6,
        get h() {
            return a6;
        },
    };
    return o8;
}
const v10 = f5(f5(o4));
try { JSON.stringify(v10); } catch (e) {}
gc();
