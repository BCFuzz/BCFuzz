const v0 = /w/mds;
class C3 {
    constructor(a5, a6, a7, a8) {
        class C9 {
        }
        try { C9.constructor(a7); } catch (e) {}
    }
}
for (let i13 = 0, i14 = 10; i13 < i14; --i14) {
}
function F22() {
    if (!new.target) { throw 'must be called with new'; }
}
let v24 = new F22();
const v25 = `
    do {
        const o27 = {
            "defineProperty": forceGCSlowPaths,
        };
        new Promise();
        v24 = forceGCSlowPaths;
    } while (0 < 65536)
`;
const v32 = v25.split(v0);
const v33 = [2.0,-4.0];
function f34(a35, a36, a37) {
    return a35;
}
for (let i40 = 10, i41 = 10;
    (() => {
        const v42 = -13369 !== i41;
        for (let i45 = 0, i46 = 10; i45 < i46; i46--) {
        }
        return v42;
    })();
    i41--) {
}
Object.defineProperty(v32, "3", { writable: true, configurable: true, enumerable: true, value: 268435439 });
new C3(v33, f34, f34(v32));
gc();
