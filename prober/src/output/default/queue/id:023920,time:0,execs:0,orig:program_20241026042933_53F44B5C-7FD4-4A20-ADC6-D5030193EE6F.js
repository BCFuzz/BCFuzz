const v1 = -607304.4672480144 != -607304.4672480144;
const v4 = new Int32Array();
function f5(a6) {
    a6[Symbol.toPrimitive] = Date;
    const o9 = {
        "g": a6,
        [f5]: v4,
    };
    return o9;
}
const v12 = f5(f5(f5)).g;
v12.toJSON = v1;
JSON.parse(JSON.stringify([v12]));
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
}
gc();
