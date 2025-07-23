function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F2();
v4[Symbol.toPrimitive] = noInline;
const v7 = [-9.794042680331625,NaN,-555.1860721122559,1000000.0,-1.0,0.3615809504474715,9.046121989344677];
const v9 = v7.toLocaleString().small();
v9.startsWith(v4);
function f12(a13, a14, a15, a16) {
    const o43 = {
        toString(a18, a19) {
            class C21 {
            }
            function f23() {
                return v7;
            }
            class C24 extends f23 {
            }
            class C26 {
            }
            const v27 = new C26();
            new C26();
            async function f29(a30, a31, a32) {
                const o33 = {
                };
                const v35 = new Proxy(v27, o33);
                v35.then = Symbol;
                await v35;
                return a30;
            }
            f29(C21, Int32Array, C24);
            const t30 = "boolean";
            delete t30.length;
            const v40 = -26944 + ("number" ^ -26944);
            const v41 = v40 >>> v40;
            v41 !== v41;
        },
    };
    o43.toString();
    return Symbol;
}
function F45() {
    if (!new.target) { throw 'must be called with new'; }
}
function f47() {
}
f47[Symbol.species] = Symbol;
const v50 = [-6.11084164070691,-1000000000000.0,-6.797835243387633,-3.0,1.0,1.6369247494600133e+308];
v50.constructor = f47;
try { v50.flatMap(Map); } catch (e) {}
for (let i = 0; i < 5; i++) {
    f12(v9);
}
gc();
