function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
let v2 = new F0();
let v3 = -872986.8037179047;
let v5 = Uint16Array;
const v6 = /\u{12345}OhEC/dys;
function f7(a8, a9) {
    function f10() {
        return f10;
    }
    let v11 = Symbol;
    let v12 = v11.toPrimitive;
    for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
    }
    f10[v12] = f7;
    const v23 = [v12];
    const v24 = [f10,f10,f10,f10,f10];
    let v26 = new Proxy(v24, v23);
    const o28 = {
        get a() {
            let v27 = this;
            [v11,v3,v27,v5] = v23;
            [v26,v12,v2,v27] = v24;
            return v2;
        },
        __proto__: v26,
        1: "caller",
    };
    for (const v29 in o28) {
    }
    const v30 = new v5(v5);
    v30["sort"](f10);
}
v6.toString = f7;
const v33 = v6.toString;
try { v33.call(); } catch (e) {}
gc();
