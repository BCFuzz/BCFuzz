const o1 = {
};
Reflect.toJSON = 536870888;
const v4 = new Int8Array(o1, 536870888, 536870888);
function f6(a7, a8) {
    delete Reflect.toJSON;
}
Math[Symbol.toPrimitive] = f6;
Reflect.f = o1;
const v13 = Date();
const o14 = {
    [Math]: v13,
    [v4]: Reflect,
};
JSON.stringify(o14);
for (let i19 = 0, i20 = 65537; i20--, i20;) {
}
gc();
