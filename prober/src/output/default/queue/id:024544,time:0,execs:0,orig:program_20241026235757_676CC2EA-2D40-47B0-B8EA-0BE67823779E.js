const v2 = -607304.4672480144 != -789003.0031452486;
const v5 = new Int32Array(Date, v2);
function f6(a7) {
    a7[Symbol.toPrimitive] = Date;
    const o10 = {
        "g": a7,
        [f6]: v5,
    };
    return o10;
}
const v13 = f6(f6(f6)).g;
v13.toJSON = v2;
JSON.parse(JSON.stringify([v13]));
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
}
gc();
