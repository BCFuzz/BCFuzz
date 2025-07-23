let v0 = 16;
v0++;
const v2 = `
    try { Uint32Array(); } catch (e) {}
    const v6 = [v2,v2,v2,v2];
    v6[3] = v6;
    const v7 = Reflect.construct(Uint32Array, v6);
    const v8 = v7.reverse(v2, v2, v7);
    const v9 = /\u{12345}/myvis;
    try { v9.exec(v0); } catch (e) {}
    for (let v11 = 0; v11 < 5; v11++) {
        const v13 = new Float64Array(Reflect, v7, v7);
        for (let i = 0; i < 5; i++) {
            const v14 = v11 in v13;
            v14 && v14;
        }
    }
    const v16 = v8.indexOf(v2, v2, Reflect);
    v16 >> v16;
    v16 | v16;
`;
eval(v2);
gc();
