const v1 = [7,-65535,512,7,4294967297];
for (let i = 0; i < 5; i++) {
    const o9 = {
        __proto__: v1,
        toString(a3, a4) {
            const v6 = new Uint16Array();
            const v7 = v6.byteLength;
            v7 & v7;
            return a4;
        },
    };
    o9.toString(o9, o9, o9, o9, o9);
    try { o9.with(7.227626894783663e+306); } catch (e) {}
    -o9;
}
gc();
