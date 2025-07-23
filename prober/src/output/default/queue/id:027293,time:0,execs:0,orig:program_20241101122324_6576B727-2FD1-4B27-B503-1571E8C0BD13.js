for (let [i37, i38] = (() => {
        function F0(a2, a3) {
            if (!new.target) { throw 'must be called with new'; }
            const v4 = /a\nW/vgi;
            function f5(a6, a7) {
                const v8 = `
                    /[\xf0\x9f\x92\xa9-\xf4\x8f\xbf\xbf]\u{12345}\u{23456}?/mygiu;
                `;
                return v8;
            }
            v4.toString = f5;
            function f10(a11, a12, a13, a14) {
                const v15 = a11.toString(this, this, F0, F0);
                v15.replace();
                const v17 = v15.link(f10);
                const v18 = v17.trimEnd;
                try { v18(); } catch (e) {}
                v17.split(v15);
                for (const v21 of v17) {
                    v21[0] = v21;
                    v21.d = v21;
                    v21.search();
                }
                for (let i25 = 0, i26 = 10; i25 !== i26; i26--) {
                }
            }
            f10(v4);
        }
        new F0(F0, F0);
        return [0, 10];
    })();
    i38;
    i38--) {
}
gc();
