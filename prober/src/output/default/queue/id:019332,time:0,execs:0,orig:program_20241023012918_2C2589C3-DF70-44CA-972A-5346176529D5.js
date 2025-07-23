const v1 = `
    try { Uint32Array(); } catch (e) {}
    const v5 = [v1,v1,v1,v1];
    v5[3] = v5;
    const v6 = Reflect.construct(Uint32Array, v5);
    try { v6.sort(v5); } catch (e) {}
    const v8 = v6.reverse(v1, v1, v6);
    const v9 = /\u{12345}/myvis;
    const v10 = v9?.toString;
    try { v10(); } catch (e) {}
    try { v9.exec(16); } catch (e) {}
    for (let v13 = 0; v13 < 5; v13++) {
        v13 >> v13;
        const v16 = new Float64Array(Reflect, v6, v6);
        for (let i = 0; i < 5; i++) {
            v13 in v16;
        }
    }
    v8.indexOf();
`;
eval(v1);
gc();
