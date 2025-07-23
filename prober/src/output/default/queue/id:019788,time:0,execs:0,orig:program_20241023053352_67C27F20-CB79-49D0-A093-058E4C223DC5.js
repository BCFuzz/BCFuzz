function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
const v6 = [-1000000000.0];
const v7 = [0.10123034373259077,-1000000.0,-1.2131680317146778e+308,-3.9268532015448088,90.85583579689887];
const v8 = [1.5685707405161021e+308,0.05976112374218978,6.177849681337613e+307,0.07780121050375532,281515.70408413396,132.0273059937938,-860.4064065906414];
const t12 = "f";
t12[245] = "boolean";
"13377" >>> "13377";
function f13(a14, a15) {
    const o22 = {
        [a14]: v7,
        __proto__: v7,
        set f(a17) {
            switch (v6) {
                case a17:
                    super[v5];
                    break;
            }
            const o19 = {
                "construct": f0,
                "defineProperty": f0,
                "get": f0,
                "isExtensible": f0,
                "preventExtensions": f0,
            };
            new Proxy(a15, o19);
        },
    };
    return o22;
}
f13(v8, v4);
f13(v8, v5);
f13(v7, v3);
new WeakSet();
class C30 {
    #toString(a32) {
    }
    constructor(a34) {
        const v35 = this.constructor;
        try { new v35(this); } catch (e) {}
        try {
            a34.#toString();
        } catch(e38) {
        }
    }
}
new C30(15);
const v40 = new C30();
const t55 = v40.constructor;
const v42 = new t55();
const t57 = v42.constructor;
new t57(this);
gc();
