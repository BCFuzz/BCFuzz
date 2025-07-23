const v0 = `
    /\u{12345}/myvis;
    const v4 = ("size").constructor;
    const v5 = v4.fromCharCode(12, v4);
    function f6(a7) {
        const o8 = {
            "g": a7,
        };
        return o8;
    }
    const v11 = f6(f6(v5)).g;
    v11.toJSON = v0;
    JSON.stringify([v11]);
`;
eval(v0);
gc();
