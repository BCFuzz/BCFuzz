for (let i = 0; i < 5; i++) {
    const o13 = {
        toString(a1, a2) {
            const v3 = [16,-16,-2792,-268435456,6,128,129,-65537];
            const v5 = new Int32Array(a2, a2, a1);
            const v8 = Array(3408, v3);
            v8[1327] = v5;
            const v10 = [Reflect,Reflect];
            return Reflect.apply(v8.copyWithin, v8, v10);
        },
    };
    o13.toString();
}
gc();
