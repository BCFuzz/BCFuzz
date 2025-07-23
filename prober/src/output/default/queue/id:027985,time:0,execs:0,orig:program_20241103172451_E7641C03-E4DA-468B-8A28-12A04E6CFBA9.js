Reflect.toJSON = 536870888;
const v4 = new Int8Array(4096);
function f6(a7, a8) {
    delete Reflect.toJSON;
    return a7;
}
Math[Symbol.toPrimitive] = f6;
const v13 = Date(4096);
const o14 = {
    [Math]: v13,
    [v4]: Reflect,
};
JSON.stringify(o14);
for (let i19 = 0, i20 = 65537; i20--, i20;) {
}
gc();
