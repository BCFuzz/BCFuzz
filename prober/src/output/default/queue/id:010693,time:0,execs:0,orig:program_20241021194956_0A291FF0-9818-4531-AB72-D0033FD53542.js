const v2 = `
    const o6 = {
        valueOf(a4) {
            const o5 = {
            };
            return 1000;
        },
    };
    const v8 = Float32Array();
    const t9 = 1000;
    t9(v8, /\u{12345}/myvis, v8);
    let v11 = 1073741823;
    let v12 = 0.5191985838694158;
    v12--;
    ++v11;
`;
v2.split(8, 8);
gc();
