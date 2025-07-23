let v0 = 8;
let v1 = 1;
const v3 = new WeakMap();
const v4 = [v0];
function f5(a6, a7, a8, a9) {
    for (let i12 = 10, i13 = 10; -13369 < i13; i13--) {
    }
    const o25 = {
        toString(a21, a22) {
            for (let v23 = 0; v23 < 5; v23++) {
                v4[v23 + v23] = v23;
            }
            return a6;
        },
    };
    for (const v26 in v4) {
        const v27 = v26.constructor;
        v27(a6);
        const v29 = v1++;
        for (const v32 in "p") {
            o25[v3] **= v0 **= v29;
            try { WeakSet(v27); } catch (e) {}
        }
        function F34(a36, a37, a38) {
            if (!new.target) { throw 'must be called with new'; }
        }
    }
    o25.toString(a7, v0, WeakMap);
}
for (let i = 0; i < 5; i++) {
    f5(v1, v3, v4, f5);
}
gc();
