for (let i = 0; i < 5; i++) {
    const o25 = {
        toString(a1, a2) {
            const v3 = [16,-16,-2792,-268435456,6,128,129,-65537];
            const v5 = new Int32Array(v3, a2);
            const v8 = Array(3408, v3);
            v8[1327] = v5;
            const v10 = [Reflect,Reflect,Reflect];
            const v11 = v8.copyWithin;
            for (let i14 = 0, i15 = 10; i14 <= i15; i15--) {
                for (let v22 = 0; v22 < 5; v22++) {
                }
            }
            return Reflect.apply(v11, v8, v10).length;
        },
    };
    o25.toString(o25, o25, o25, o25, o25);
}
gc();
