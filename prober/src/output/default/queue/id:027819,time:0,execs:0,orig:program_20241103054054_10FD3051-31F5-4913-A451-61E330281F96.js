const o2 = {
};
Reflect.toJSON = 536870888;
const v5 = new Int8Array(4096);
function f7(a8, a9) {
    delete Reflect.toJSON;
    return a9;
}
Math[Symbol.toPrimitive] = f7;
Reflect.f = o2;
const v14 = Date();
const o15 = {
    [Math]: v14,
    [v5]: Reflect,
};
JSON.stringify(o15);
for (let i20 = 0, i21 = 65537; i21--, i21;) {
}
gc();
