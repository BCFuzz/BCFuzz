const v0 = `
    try { Uint32Array(); } catch (e) {}
    const v5 = Reflect.construct(Uint32Array, [v0,v0,v0,v0]);
    const v6 = v5.reverse(v0, v0, v5);
    /\u{12345}/myvis;
    for (let v8 = 0; v8 < 10; v8++) {
        const v10 = new Float64Array(Reflect, v5, v5);
        for (let i = 0; i < 5; i++) {
            v8 in v10;
        }
    }
    const v12 = v6.indexOf(v0, v0, Reflect);
    v12 >> v12;
`;
eval(v0);
gc();
