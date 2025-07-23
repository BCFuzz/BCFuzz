class C0 {
}
class C1 extends C0 {
}
class C2 extends C1 {
}
const v3 = new C2();
const v4 = `
    try { new Symbol(); } catch (e) {}
    const v8 = Symbol.for(v4).description;
    try { v8.repeat(v8); } catch (e) {}
    class C10 {
    }
    function F11(a13, a14, a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C17 {
    }
    const o19 = {
        [v8]: undefined,
    };
    class C20 extends C17 {
    }
    C20.prototype = C20;
    class C21 {
    }
    C21.e = C21;
    const v22 = new C21();
    const v23 = v22?.__defineSetter__;
    try { new v23(v4, v8); } catch (e) {}
    const v25 = v22.constructor;
    v25.b = v25;
    const v26 = new v25();
    v26.constructor;
    try { new v3(); } catch (e) {}
`;
eval(v4);
gc();
