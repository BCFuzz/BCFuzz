const o5 = {
    toString(a3, a4) {
        a3.length = a3;
        return Int8Array;
    },
};
function f6(a7) {
    return 1.329769687396015e+308;
}
o5.valueOf = f6;
const v8 = o5.toString(o5);
try { new v8(o5); } catch (e) {}
gc();
