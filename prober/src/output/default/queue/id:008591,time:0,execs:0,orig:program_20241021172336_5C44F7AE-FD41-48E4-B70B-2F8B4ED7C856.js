const v0 = [];
function f1() {
    function f2(a3, a4) {
        return f1;
    }
    return f2;
}
function f5(a6) {
    return f1;
}
Object.defineProperty(v0, "toString", { get: f1, set: f5 });
const v7 = [-14,2147483649,-65536,2131113613,65535,14,536870912,97932412,268435441,15238];
function f8(a9, a10) {
    return a10;
}
v7.toString = f8;
const v11 = [-8,-603008847,-4294967297,-256,6,-4294967296,-36856,34718,338837676];
function f12(a13, a14) {
    a13.toString();
    const o16 = {
        __proto__: v11,
    };
    return o16;
}
f12(v0);
const v18 = f12(v7);
f12(v0);
const v20 = f12(v18);
v20[2] = v20;
v20.flatMap(f12);
gc();
