function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        return f5;
    }
    class C6 extends f5 {
    }
    const v7 = new C6();
    const v8 = /a\nW/vgi;
    function f9(a10, a11) {
        const v12 = `
            /[\xf0\x9f\x92\xa9-\xf4\x8f\xbf\xbf]\u{12345}\u{23456}?/mygiu;
        `;
        return v12;
    }
    v8.toString = f9;
    function f14(a15, a16, a17, a18) {
        const v19 = a15.toString(a18);
        let v20;
        try { v20 = v19.replace(Uint16Array, v19); } catch (e) {}
        v20.small(f14, v20, v19, a17, a17);
        const v22 = v19.link(f14);
        const v23 = v22.trimEnd;
        let v24;
        try { v24 = v23(); } catch (e) {}
        v22.split(v19);
        for (const v26 of v22) {
            v26[0] = v26;
            v26.d = v26;
            v26.search();
        }
        const o28 = {
            "f": a16,
            [a18]: v24,
            "a": Uint16Array,
            ...v7,
        };
        for (let i31 = 0, i32 = 10; i31 !== i32; i32--) {
        }
        return a16;
    }
    f14(v8);
}
new F0();
gc();
