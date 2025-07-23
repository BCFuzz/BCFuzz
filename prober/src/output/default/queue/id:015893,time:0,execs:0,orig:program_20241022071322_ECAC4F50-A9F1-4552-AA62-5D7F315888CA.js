const v0 = [-9.93500732281799,-1000000000.0,-1e-15,2.2250738585072014e-308,-219721.28873984877,993.2551759217063,106903.7292192541,Infinity,1.000580494452244e+308];
const v1 = [v0,v0,v0];
const v2 = `
    function f3(a4, a5) {
        return v2;
    }
    f3.length = f3;
    /\u{12345}/myvis;
    class C7 {
    }
    C7.e = C7;
    const v8 = new C7();
    const v9 = v8?.constructor;
    try { v9(); } catch (e) {}
    let v11;
    try { v11 = v9(); } catch (e) {}
    const v12 = v11?.__lookupGetter__;
    try { v12(v8); } catch (e) {}
    let v15;
    try { v15 = Symbol(); } catch (e) {}
    v15.description;
    Symbol.for();
    const v18 = Symbol.iterator;
    v18.description;
    Symbol.for();
    v8[v18] = f3;
    try { new f3(v1, ...v8, ...v0); } catch (e) {}
`;
eval(v2);
gc();
