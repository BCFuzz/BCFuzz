const v0 = [];
function f1() {
    function f2(a3, a4) {
        return v0;
    }
    return f2;
}
function f5(a6) {
    return a6;
}
Object.defineProperty(v0, "toString", { get: f1, set: f5 });
const v7 = [27772,-2,8,-1249466812,-5,30755];
const v8 = [-14,2147483649,-65536,2131113613,65535,14,536870912,97932412,268435441,15238];
function f9(a10, a11) {
    return f5;
}
v8.toString = f9;
const v12 = [-8,-603008847,-4294967297,-256,6,-4294967296,-36856,34718,338837676];
v12[5] = f5;
function f13(a14, a15) {
    a15[Symbol.toPrimitive] = f5;
    a14.toString();
    const o24 = {
        [v8](a20, a21, a22, a23) {
        },
        __proto__: v12,
    };
    return o24;
}
f13(v0, v8);
const v26 = f13(v8, v8);
f13(v0, v7);
f13(v26, v7).flatMap(f13);
gc();
