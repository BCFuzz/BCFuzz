const v0 = [0,52346,-4096,-8,4,4096,-4294967296,127,65537];
class C1 {
    valueOf(a3, a4) {
        const v6 = [a4,a4];
        Reflect.apply(v0.pop, a4, v6);
    }
}
const v9 = new C1();
const v10 = [v9];
try { new Float32Array(v10); } catch (e) {}
gc();
