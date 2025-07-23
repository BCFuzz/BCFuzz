class C2 {
    constructor(a4, a5, a6, a7) {
        try {
            eval(([a6]).toLocaleString(a7, a5));
        } catch(e12) {
        }
        class C13 {
        }
        try { C13.constructor(a6); } catch (e) {}
    }
}
for (let i17 = 0, i18 = 10; i17 < i18; --i18) {
}
function F26() {
    if (!new.target) { throw 'must be called with new'; }
}
let v28 = new F26();
let v29 = eval;
let v30 = 8;
let v31 = "source";
[v29,v30,v31] = v31;
const v32 = `
    do {
        v28 = forceGCSlowPaths;
    } while (0 < 65536)
`;
const v36 = v32.split(v30);
const v37 = [2.0,-4.0];
function f38(a39, a40, a41) {
    return a39;
}
Object.defineProperty(v36, "3", { writable: true, configurable: true, enumerable: true, value: 525762689 });
new C2(v37, f38, f38(v36));
gc();
