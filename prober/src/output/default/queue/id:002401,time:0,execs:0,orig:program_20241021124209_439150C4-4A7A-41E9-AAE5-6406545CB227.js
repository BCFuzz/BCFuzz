const v0 = [16];
const v1 = [1000,268435440,8];
const v2 = [-9007199254740990,-1543020116,-17970,-47671,-8255,19341,536870887];
function f3(a4, a5) {
    const o6 = {
        ...v1,
        __proto__: a4,
        "f": v2,
        976499057: v0,
    };
    return o6;
}
const v7 = f3(v2);
f3(v7, v1);
f3(v7).flatMap(f3);
gc();
