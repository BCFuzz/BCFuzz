function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = /a\nW/vgi;
    function f5(a6, a7) {
        const v8 = `
            /[\xf0\x9f\x92\xa9-\xf4\x8f\xbf\xbf]\u{12345}\u{23456}?/dyiu;
        `;
        return v8;
    }
    v4.toString = f5;
    function f10(a11, a12, a13, a14) {
        const v15 = a11.toString(f10, F0);
        let v16;
        try { v16 = v15.replace(); } catch (e) {}
        v16.small();
        const v18 = v15.link(f10);
        const v19 = v18.trimEnd;
        let v20;
        try { v20 = v19(v19, a11, F0, v16); } catch (e) {}
        v18.split(v15);
        for (const v22 of v18) {
            v22[0] = v22;
            v22.d = v22;
            v22.search();
        }
        const o29 = {
            "f": a12,
            [v20](a25, a26, a27, a28) {
            },
        };
        for (let i32 = 0, i33 = 10; i32 !== i33; i33--) {
        }
        return v4;
    }
    f10(v4);
}
new F0(F0, F0);
gc();
