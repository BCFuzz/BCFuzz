const v0 = [-9.93500732281799,-1000000000.0,-1e-15,2.2250738585072014e-308,-219721.28873984877,993.2551759217063,106903.7292192541,Infinity,1.000580494452244e+308];
const v1 = [v0,v0,v0,v0];
const v2 = [v1];
const v4 = `
    const v7 = new BigUint64Array();
    const v8 = v7.every(Date);
    class C9 {
        constructor(a11, a12, a13, a14) {
        }
    }
    for (let v15 = 0; v15 < 5; v15++) {
        const v18 = ("p" + v8).codePointAt;
        let v19;
        try { v19 = v18.getFloat64(v18, v4, v15); } catch (e) {}
        try { v18.call(v2, -4.0, v19); } catch (e) {}
    }
    let v21 = 128;
    function f23(a24, a25) {
        return v0;
    }
    f23(2n, v2);
    v21--;
    const v28 = \`
        /\u{12345}/myvis;
    \`;
    class C30 {
        static set b(a32) {
        }
    }
    const v33 = new C30();
    try { new f23(v1, ...v33, ...v0, 2n); } catch (e) {}
`;
eval(v4);
gc();
