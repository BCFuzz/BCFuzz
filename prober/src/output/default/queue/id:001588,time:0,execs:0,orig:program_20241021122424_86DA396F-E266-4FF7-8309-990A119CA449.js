function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 12;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f7() {
    return v4;
}
function f8(a9, a10, a11) {
    a9.d;
    const v13 = a11?.constructor;
    try { new v13(); } catch (e) {}
    const o19 = {
        "a": F0,
        ...v4,
        [f7]: F0,
        get c() {
            return this;
        },
        "h": v4,
    };
    o19.h = o19;
    return o19;
}
const v20 = f8(v3, v4, v4);
v20.c = v20;
const v22 = f8(v4, v3, v4)?.__defineGetter__;
try { new v22(v20, f7); } catch (e) {}
f8(v5, null, v4);
let v26 = -800107.347952191;
let v27 = 222.24607957266767;
class C28 {
    get b() {
        let v29 = this;
        ({"d":v26,"g":v29,"length":v27,...v27} = "g");
        try { v26(v29, v26, v29, v29); } catch (e) {}
        return "g";
    }
    constructor(a32, a33) {
        this[16];
        a32 >>> a32;
        this[16];
        a33.g = a33;
        a33.h = "g";
        -1696011859 - -1696011859;
        1073741823 | 1073741823;
    }
    static n(a43, a44) {
        function F45(a47, a48, a49, a50) {
            if (!new.target) { throw 'must be called with new'; }
        }
    }
}
function f51(a52, a53) {
}
Math.tanh(7);
new C28(v27, C28);
const v58 = new C28(v26, C28);
new C28(C28, v58);
class C60 {
    p(a62, a63, a64) {
        class C66 {
        }
    }
}
const v67 = [-57668,65536,9007199254740991,128,1073741823];
class C69 {
    constructor(a71, a72, a73, a74) {
        const v76 = new Map();
        try { v76.values(); } catch (e) {}
        v76["has"]("has");
    }
}
new C69(v67, 107337322, 107337322, 107337322);
gc();
