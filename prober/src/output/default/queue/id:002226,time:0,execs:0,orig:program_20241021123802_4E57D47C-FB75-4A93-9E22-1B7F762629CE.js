const o4 = {
    toString(a1) {
        return Uint8ClampedArray(a1);
    },
};
const v5 = [o4];
function f6(a7, a8) {
    return a8.toLocaleString();
}
try { f6(v5, v5); } catch (e) {}
gc();
