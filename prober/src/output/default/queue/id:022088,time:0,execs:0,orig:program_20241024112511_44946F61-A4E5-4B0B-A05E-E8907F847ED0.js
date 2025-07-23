const v2 = `
    try { Symbol(); } catch (e) {}
    const v5 = Symbol.for(v2);
    v5.description;
    const v7 = v5.description;
    const o8 = {
    };
    const o10 = {
    };
    const v12 = new SharedArrayBuffer(5, o10);
    new DataView(v12);
    function f15(a16, a17) {
    }
    let v19 = gc();
    v19++;
    const v22 = new Int32Array(187);
    function f23(a24) {
        let v26 = 2312845920 >>> 2312845920;
        v26++;
        const o28 = {
            "maxByteLength": 2312845920,
        };
        const v30 = new ArrayBuffer(750704325, o28);
        v30.resize(o28);
        v30.propertyIsEnumerable(v22);
    }
    const v33 = f23();
    v33 * v33;
    class C35 {
    }
    new C35();
    new C35();
    const v38 = \`
        /s\u{12345}\u{23456}e8ZgRe(?:a+)?Ja+?/mdiu;
    \`;
    const v40 = v38.matchAll(v38);
    const o41 = {
    };
    const t38 = ([-1,9,4294967296,65536,10,49592,10]).copyWithin("", v40);
    t38[46] = o41;
    const o45 = {
        [v7]: v5,
    };
    o45.e = o45;
    class C46 extends C35 {
    }
    const v47 = new C46();
    v47.constructor;
    /(?<!a)v5[^123]*/mdvi;
    for (let v50 = 0; v50 < 10; v50++) {
        v50 < v50;
    }
`;
eval(v2);
gc();
