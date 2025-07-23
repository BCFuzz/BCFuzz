function f0() {
}
const v1 = [-256];
v1.valueOf = f0;
const v2 = [5,1000,-9007199254740991,-2321,10,-1905663068,-6,-45629];
v2[Symbol.toPrimitive] = f0;
const v5 = [-3,-1073741824,-1033567812,-20799,-9007199254740990,-268435456];
function f6(a7) {
    function f8() {
        return a7;
    }
    Object.defineProperty(a7, 6, { configurable: true, get: f8 });
    if (a7 < v1) {
        gc();
    } else {
        delete a7?.[6];
    }
    const o22 = {
        "h": a7,
        "e": a7,
        3: a7,
        set f(a14) {
            super[a7] = this;
            const v19 = v5 - (v5 * 2.220446049250313e-16);
            Math.floor(v19);
            +v19;
        },
    };
    return o22;
}
f6(v2);
f6(v1);
f6(v2);
[-1000000000000.0,-2.0,835.3950635758979,-1000000.0,361.68519762320375,-5.0];
[110321.10369792324,4.0,-905079.2006249937];
[1e-15,7.244607843555751e+307,0.9113921670180557,NaN,356809.75041827024,-1000000.0,NaN,-0.0,0.9957943020914062];
new WeakMap();
function f34(a35) {
    const o79 = {
        valueOf(a37) {
            this.f = v5;
            for (let v38 = 0; v38 < 10; v38++) {
                function f44(a45, a46) {
                    const o50 = {
                        "b": 462505212n,
                        "h": a45,
                        [2n]: a46,
                        128: a45,
                        "e": -6n,
                        set f(a48) {
                            ~a45;
                        },
                    };
                    return o50;
                }
                const v52 = new Set();
                const v54 = v52.union(v52).entries();
                class C55 {
                    2359 = v54;
                }
                const v56 = new C55();
                function f57(a58, a59) {
                    function F60(a62, a63, a64) {
                        if (!new.target) { throw 'must be called with new'; }
                        const v66 = a63.name.codePointAt(a63);
                        v66 >>> v66;
                    }
                    return f6;
                }
                v56.then = f57;
                async function f68(a69, a70, a71) {
                    const o72 = {
                    };
                    o72.get = f34;
                    const v74 = new Proxy(v56, o72);
                    await v74;
                }
                try {
                } catch(e76) {
                }
                for (let v77 = 0; v77 < 50; v77++) {
                }
                for (let v78 = 0; v78 < 32; v78++) {
                }
            }
        },
    };
    o79.f = o79;
    return o79;
}
class C80 extends f34 {
    static toString(a82, a83, a84) {
    }
    #c;
}
const v85 = new C80();
v85.valueOf();
function f87() {
}
gc();
