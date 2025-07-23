const v0 = [1677438388,1073741824,2,-2];
function f1(a2) {
    const o3 = {
        __proto__: a2,
    };
    return o3;
}
const v4 = f1(v0);
const v5 = f1();
class C6 {
    [v4] = v5;
}
v0.toString = f1;
gc();
