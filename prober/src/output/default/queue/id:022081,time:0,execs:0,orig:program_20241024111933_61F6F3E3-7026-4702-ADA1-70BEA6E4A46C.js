class C0 {
}
const v1 = new C0();
const v4 = `
    try { Symbol(); } catch (e) {}
    const v7 = Symbol.for(v4);
    v7.description;
    const v9 = v7.description;
    function F10() {
        if (!new.target) { throw 'must be called with new'; }
        try { this.propertyIsEnumerable(v1); } catch (e) {}
    }
    const v13 = new F10();
    const o14 = {
    };
    const o17 = {
        "maxByteLength": 256,
    };
    const v19 = new SharedArrayBuffer(5, o17);
    new DataView(v19);
    function f22(a23, a24) {
    }
    let v26 = gc();
    v26++;
    v13.__defineGetter__;
    const v30 = new Int32Array(187);
    class C32 {
    }
    try { C32.call(1000n); } catch (e) {}
    function f34(a35) {
        2312845920 >> 2312845920;
        let v38 = 2312845920 >>> 2312845920;
        v38++;
        const o40 = {
            "maxByteLength": 2312845920,
        };
        const v42 = new ArrayBuffer(750704325, o40);
        v42.resize(o40);
        v42.propertyIsEnumerable(v30);
    }
    const v46 = f34(f34(C32));
    v46 * v46;
    function f48(a49, a50, a51, a52) {
        try { a52(v4, arguments, a49); } catch (e) {}
        return arguments;
    }
    class C55 {
    }
    new C55();
    new C55();
    const v58 = \`
        /s\u{12345}\u{23456}e8ZgRe(?:a+)?Ja+?/mdiu;
    \`;
    const v60 = v58.matchAll(v58);
    const o61 = {
    };
    const t56 = ([-1,9,4294967296,65536,10,49592,10]).copyWithin("", v60);
    t56[46] = o61;
    const o65 = {
        [v9]: v7,
    };
    o65.e = o65;
    class C66 extends C55 {
    }
    const v67 = new C66();
    v67.constructor;
    const v69 = /(?<!a)v5[^123]*/mdvi;
    function F70(a72, a73) {
        if (!new.target) { throw 'must be called with new'; }
        a73.exec(v69);
    }
    for (let i77 = 0, i78 = 10; i77 < i78; i78--) {
    }
    class C85 {
    }
    try { C85.call(v1); } catch (e) {}
`;
eval(v4);
gc();
