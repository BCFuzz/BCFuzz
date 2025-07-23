const v0 = [-58492,10000,-1730671782,-15,6];
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F3();
const v9 = `
    const v11 = ("-13")[undefined];
    const o12 = {
    };
    o12.h = o12;
    o12.h = o12;
    o12.h = o12;
    const o13 = {
    };
    o13.h = o13;
    o13.h = v11;
    o13.e = v11;
    const o14 = {
    };
    o14.h = v8;
    o14.h = o14;
    o14.h = o14;
    class C15 {
    }
    try { C15(); } catch (e) {}
    function f18() {
        return f18;
    }
    Symbol.toPrimitive;
    const v21 = Reflect?.defineProperty;
    try { v21(Reflect, 256, v0); } catch (e) {}
    let v23;
    try { v23 = Reflect.deleteProperty(); } catch (e) {}
    !v23;
`;
eval(v9);
gc();
