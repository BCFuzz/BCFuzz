for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function f10(a11, a12, a13, a14) {
    const o63 = {
        valueOf(a16, a17, a18, a19) {
            for (let [i56, i57] = (() => {
                    function F20(a22, a23) {
                        if (!new.target) { throw 'must be called with new'; }
                        const v24 = /a\nW/vgi;
                        function f25(a26, a27) {
                            const v28 = `
                                /[\xf0\x9f\x92\xa9-\xf4\x8f\xbf\xbf]\u{12345}\u{23456}?/mygiu;
                            `;
                            return v28;
                        }
                        v24.toString = f25;
                        function f30(a31, a32, a33, a34) {
                            const v35 = a31.toString(a12, a18, this, a18);
                            v35.replace(F20, a14, a34, a22, F20);
                            const v37 = v35.link(f30);
                            const v38 = v37.trimEnd;
                            try { v38(); } catch (e) {}
                            v37.split(v35);
                            for (const v41 of v37) {
                                v41[0] = v41;
                            }
                            for (let i44 = 0, i45 = 10; i44 !== i45; i45--) {
                            }
                            return v35;
                        }
                        f30(v24);
                    }
                    new F20();
                    return [0, 10];
                })();
                i57;
                i57--) {
            }
            return a17;
        },
    };
    return o63;
}
const v64 = f10();
v64.valueOf(v64, f10);
gc();
