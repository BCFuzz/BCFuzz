class C3 {
    static #o(a5) {
        a5["has"] = a5;
        a5.length = 4;
        a5[Symbol.unscopables];
        return isNaN;
    }
}
new C3();
const v12 = new C3();
const v13 = v12?.constructor;
try { new v13(); } catch (e) {}
const v15 = new C3();
function f16(a17, a18) {
    const v19 = a17?.constructor;
    try { new v19(); } catch (e) {}
    a18.arguments = a18;
    const o21 = {
        __proto__: a17,
        "d": C3,
        ...a17,
        4: a17,
        7: "has",
        [C3]: -397614.26389071764,
        "h": C3,
    };
    return o21;
}
f16(f16(v15, f16), -1000000000.0);
f16("has", "has");
const v26 = new Float32Array();
try { v26.sort(C3); } catch (e) {}
/zR/dv;
gc();
