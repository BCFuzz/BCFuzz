function f0() {
    const o4 = {
        [-130.0786502072906]: "4",
        "c": -3.0,
        __proto__: "4",
        "f": -3.0,
        "h": -3.0,
        ..."4",
        "b": -130.0786502072906,
        "g": -3.0,
        "d": -130.0786502072906,
    };
}
f0();
f0();
[1736223829,-9007199254740991,7,128,-9007199254740991,-1073741824,3];
[-16,-9223372036854775808];
[1073741825,777670204,64,1073741823];
new WeakMap();
new Uint32Array();
new Float32Array();
new Int16Array();
Array();
new WeakSet();
function F34(a36, a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
}
new F34();
new F34(3n, "5v");
const v42 = `
    let v43 = 2;
    1 / Infinity;
    ++v43;
    function f48() {
        const v51 = new Float32Array();
        const v53 = new Uint16Array(v51, Uint16Array, Float32Array);
        v53.buffer;
        delete v51[Uint32Array];
        const o65 = {
            ..."VbG",
            1796: "findLastIndex",
            "d": 8.781638413113594,
            __proto__: "findLastIndex",
            "e": "VbG",
            set h(a61) {
                class C62 {
                    static b;
                }
                const t48 = C62();
                new t48();
            },
        };
        return o65;
    }
    f48();
    new Float64Array();
    new Int8Array();
    for (let v76 = 0; v76 < 10; v76++) {
        function f81(a82, a83) {
            const o84 = {
                ...a82,
                __proto__: a82,
                "b": 462505212n,
                "h": a82,
                [a83]: f81,
                ...9,
                "c": 462505212n,
                128: a82,
                "e": -6n,
            };
            return a83;
        }
        const v86 = new Set();
        const v88 = v86.union(v86).entries();
        class C89 {
            2359 = v88;
        }
        const v90 = new C89();
        async function f91(a92, a93, a94) {
            const o95 = {
            };
            const v97 = new Proxy(v90, o95);
            await v97;
        }
        f91();
        f81();
        f81();
        f81(v90);
        for (let v103 = 0; v103 < 50; v103++) {
            f81();
        }
        const o105 = {
        };
        new BigInt64Array(v90);
    }
    Infinity - Infinity;
    const v110 = new Date();
    class C111 extends Date {
        constructor(a113, a114) {
            super();
            gc();
            for (let v117 = 0; v117 < 25; v117++) {
                v110["p" + v117] = v117;
            }
        }
    }
    new C111();
    class C121 extends C111 {
    }
    for (let i = 0; i < 5; i++) {
    }
`;
eval(v42);
gc();
