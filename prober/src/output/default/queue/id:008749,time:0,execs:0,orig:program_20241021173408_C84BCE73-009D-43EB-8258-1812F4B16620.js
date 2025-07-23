for (let i = 0; i < 5; i++) {
    const o14 = {
        toString(a1, a2) {
            const v3 = [16,-16,-2792,-268435456,6,128,129,-65537];
            const v5 = new Int32Array(v3, a2, a1);
            const v8 = Array(3408, v3);
            v8[1327] = v5;
            const v10 = [v8];
            const v11 = v8.copyWithin;
            try { v11(v5); } catch (e) {}
            Reflect.apply(v11, v8, v10);
            return v8;
        },
    };
    o14.toString();
}
gc();
