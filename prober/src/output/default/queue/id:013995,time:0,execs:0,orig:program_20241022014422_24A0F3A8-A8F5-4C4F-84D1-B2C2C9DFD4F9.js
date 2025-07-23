const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v0;
    this.f = v0;
}
new F1();
const v4 = new F1();
new F1();
class C6 extends F1 {
    #b;
    toString(a8) {
        Object.defineProperty(this, 9, { configurable: true, enumerable: true, value: a8 });
        const v9 = new F1();
        v9[v9];
        try {
            super.isFrozen();
            function f12(a13, a14, a15, a16) {
                for (let v17 = 0; v17 < 10; v17++) {
                    for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
                        const v28 = [-7677,1613127934,16,47879,12,10000,-56627,-4096,21519];
                        const v30 = new SharedArrayBuffer(a15, SharedArrayBuffer);
                        const v32 = new DataView(v30);
                        try { v32.getUint16(v28); } catch (e) {}
                        for (let v34 = 0; v34 < 25; v34++) {
                        }
                    }
                }
                return a15;
            }
        } catch(e35) {
        }
        return v9;
    }
}
new C6();
new C6();
const v38 = new C6();
class C39 {
    #m(a41, a42) {
        try { v4.n(F1, v0, a41, a41, this); } catch (e) {}
        v38[v38];
        const o45 = {
        };
        new Proxy(v0, o45);
        return a41;
    }
    [C6];
    #a = v4;
}
new C39();
for (let i52 = 0, i53 = 10 + 10; i53--, i52 < i53;) {
    const v62 = createGlobalObject().Atomics;
    try { v62.load(createGlobalObject, v62); } catch (e) {}
    for (let v64 = 0; v64 < 250; v64++) {
    }
}
new C39();
new C39();
for (let v67 = 0; v67 < 10; v67++) {
    function F68() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v70 = new F68();
    v70.constructor.toString();
}
gc();
