const o0 = {
};
function f1(a2) {
    const o3 = {
    };
    o3.h = o3;
    JSON.stringify(o3);
    return o0;
}
o0[Symbol.toPrimitive] = f1;
const v9 = eval.constructor;
try { v9(o0); } catch (e) {}
gc();
