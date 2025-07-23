class C1 {
}
function f2() {
    function f3() {
        return 1372365267;
    }
    return f3;
}
Object.defineProperty(C1, "valueOf", { enumerable: true, get: f2 });
class C4 {
    static p(a6, a7, a8) {
        const v9 = super[a6];
        const o12 = {
            "maxByteLength": 2329388498,
        };
        const v13 = new ArrayBuffer(v9, o12);
        new Float32Array(v13, C1);
    }
}
try { C4.p(); } catch (e) {}
gc();
