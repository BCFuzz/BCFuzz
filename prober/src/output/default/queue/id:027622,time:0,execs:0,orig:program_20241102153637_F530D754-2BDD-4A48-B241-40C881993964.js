for (let v0 = 0; v0 < 10; v0++) {
    const o11 = {
        toString(a2, a3) {
            let v4 = 2.2250738585072014e-308;
            const t4 = (v4++).constructor;
            const v7 = t4(v4);
            function f8(a9, a10) {
                return a10;
            }
            v7.valueOf = f8;
            return v0;
        },
    };
    o11.toString(v0, v0, o11, v0);
    for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
    }
}
gc();
