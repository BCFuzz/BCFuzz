const v0 = `
    async function* f1(a2, a3) {
        const v4 = a2.italics(v0, v0, v0, a3);
        const v6 = [BigInt64Array,BigInt64Array,BigInt64Array,BigInt64Array];
        const v8 = Array.from(f1, v4, Array);
        BigInt64Array(Array);
        [arguments];
        const v12 = v6.pop();
        const v13 = v12.__defineSetter__;
        SharedArrayBuffer(a3, v8);
        Float32Array(a3);
        v13(v0, f1);
        return v12;
    }
    f1();
`;
eval(v0);
gc();
