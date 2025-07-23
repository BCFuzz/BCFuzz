const v1 = `
    const v5 = Reflect.construct(Uint32Array, [v1,v1,v1,v1,v1]);
    v5 < 30238;
    v5 === "function";
    /\u{12345}/myvis;
    class C10 {
    }
`;
eval(v1);
gc();
