function f0(a1, a2, a3, a4) {
    const o14 = {
        toString(a6, a7) {
            function f8(a9) {
                Math.random();
                return a6;
            }
            this[Symbol.toPrimitive] = f8;
            return f0;
        },
    };
    o14.toString();
    return o14;
}
let v16 = f0(f0, f0, f0, f0);
for (let i = 0; i < 5; i++) {
    const v17 = f0(v16, f0, f0, v16);
    -v17;
    v16 *= v17;
}
gc();
