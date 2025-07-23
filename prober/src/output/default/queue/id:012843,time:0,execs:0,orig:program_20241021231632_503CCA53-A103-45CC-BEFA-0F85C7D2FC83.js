const v3 = new Float32Array("boolean", 2147483648);
function f4() {
    for (let i = 0; i < 5; i++) {
        const o18 = {
            toString(a6, a7) {
                const v8 = [16,-16,-2792,-268435456,6,128,129,-65537];
                const v10 = new Int32Array(a7, a6);
                const v13 = Array(3408, v8);
                v13[1327] = v10;
                const v15 = [];
                Reflect.apply(v13.copyWithin, v13, v15);
            },
        };
        o18.toString();
    }
    return "boolean";
}
v3[Symbol.toPrimitive] = f4;
function f22(a23, a24, a25, a26) {
}
f22.constructor(v3);
gc();
