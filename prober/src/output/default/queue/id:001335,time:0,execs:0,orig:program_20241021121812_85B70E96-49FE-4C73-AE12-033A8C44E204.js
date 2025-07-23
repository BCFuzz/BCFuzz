const o0 = {
};
function f1(a2, a3) {
    a2.b = a2;
    const o4 = {
    };
    return o4;
}
const v5 = f1(o0);
v5[Symbol.iterator] = f1;
try { new Int16Array(v5); } catch (e) {}
gc();
