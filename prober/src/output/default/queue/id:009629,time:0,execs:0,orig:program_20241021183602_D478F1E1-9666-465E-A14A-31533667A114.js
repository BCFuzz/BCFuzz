function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -62254;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C9 {
    p(a11, a12, a13) {
        return a11;
    }
    m(a18, a19, a20) {
        const v25 = Symbol.iterator;
        const v27 = /(x)(x)(x)\3*foo(?!bar)bazZrC?/mv.constructor;
        try { v27(v25); } catch (e) {}
        -1.9111611926272898e+307 in v3;
        let v32 = 13;
        (1514368228 | -1.9111611926272898e+307) % v32;
        -v4;
        --v32;
        const v38 = [129];
        Object.defineProperty([1853371135,174606651], 7, { value: v38 });
        class C40 {
        }
        const v41 = C40.bind();
        const o42 = {
        };
        new Proxy(v41, o42);
        Math.max(v32);
        return v5;
    }
}
new C9();
new C9();
new C9();
new Uint8ClampedArray(1150);
new Uint16Array(3158);
new BigUint64Array(630);
new Array(7);
new WeakSet();
function F69(a71, a72, a73, a74) {
    if (!new.target) { throw 'must be called with new'; }
}
new F69(-55361n, "5v", "e", 35201n);
new F69(-55361n, "5v", "e", 35201n);
new F69(3n, "5v", "5v", -55361n);
function f79() {
    return 10;
}
Math.ceil(1073741824, "e", f79);
const v83 = `
    class C84 {
    }
    for (let i89 = 0;
        (() => {
            new Map();
            const v94 = Array().push(70);
            const v96 = new SharedArrayBuffer(257, SharedArrayBuffer);
            const v97 = v96.slice(128, 2647);
            try { v97.grow(v94); } catch (e) {}
            const v100 = createGlobalObject();
            const t6 = v100.Uint16Array;
            new t6(257, v97, v100);
            const v104 = i89 < 10;
            function F105() {
                if (!new.target) { throw 'must be called with new'; }
            }
            F105.caller = F105;
            return v104;
        })();
        (() => {
            const v109 = new Uint16Array(257, 70);
            try { v109.sort(257); } catch (e) {}
            ("PoFu").split();
            const v113 = i89++;
            v113 + v113;
        })()) {
        i89 + i89;
    }
    let v117 = 2;
    (1 / Infinity) ** Infinity;
    ++v117;
    Infinity - Infinity;
    const v125 = new Date();
    class C126 extends Date {
        constructor(a128, a129) {
            super();
            gc();
            for (let v132 = 0; v132 < 25; v132++) {
                v125["p" + v132] = v132;
            }
        }
    }
    const v135 = new C126();
    new C126();
    new C126();
    class C138 extends C126 {
    }
    for (let v139 = 0; v139 < 250; v139++) {
        const o142 = {
            "maxByteLength": 5,
        };
        5 & 5;
        const v145 = new SharedArrayBuffer(5, o142);
        new Float32Array(v145);
    }
    for (let i = 0; i < 5; i++) {
        v135["toISOString"]();
    }
`;
eval(v83);
gc();
