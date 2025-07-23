const o2 = {
};
Reflect.toJSON = 536870888;
const v5 = new Int8Array(4096);
function f7(a8, a9) {
    delete Reflect.toJSON;
}
Math[Symbol.toPrimitive] = f7;
const o13 = {
    [Math]: o2,
    [v5]: Reflect,
};
JSON.stringify(o13);
for (let i18 = 0, i19 = 65537; i19--, i19;) {
}
gc();
