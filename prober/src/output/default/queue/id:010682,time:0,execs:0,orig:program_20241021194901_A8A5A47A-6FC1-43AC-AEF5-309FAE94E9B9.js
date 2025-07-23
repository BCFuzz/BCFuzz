const v0 = [-9.93500732281799,-1000000000.0,-1e-15,2.2250738585072014e-308,-219721.28873984877,993.2551759217063,106903.7292192541,Infinity,1.000580494452244e+308];
const v1 = [v0,v0,v0];
const v2 = [v0,v0];
const v4 = `
    for (let v5 = 0; v5 < 5; v5++) {
        const v8 = ("p" + v5).codePointAt;
        let v9;
        try { v9 = v8.getFloat64(v8, v4, v5); } catch (e) {}
        try { v8.call(v2, -4.0, v9); } catch (e) {}
    }
    let v11 = 128;
    function f13(a14, a15) {
        return a15;
    }
    f13(2n, v2);
    v11--;
    const v18 = \`
        /\u{12345}/myvis;
    \`;
    class C20 {
        static set b(a22) {
        }
    }
    const v23 = new C20();
    try { new f13(v1, ...v23, ...v0, 2n); } catch (e) {}
    delete v23[10000];
    [-1e-15,1.5836676651071087e+308,1000000.0,-879.50916981213,1000000000000.0,525189.311098705,484717.70582212834,-4.744480933346732e+306,NaN];
`;
eval(v4);
gc();
