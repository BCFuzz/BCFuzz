const v0 = [-9.93500732281799,-1000000000.0,-1e-15,2.2250738585072014e-308,-219721.28873984877,993.2551759217063,106903.7292192541,Infinity,1.000580494452244e+308];
const v1 = [v0,v0];
const v2 = `
    function f3(a4, a5) {
        return v0;
    }
    /\u{12345}/myvis;
    class C7 {
    }
    const v8 = new C7();
    try { new f3(v1, ...v8, ...v0); } catch (e) {}
`;
eval(v2);
gc();
