const v5 = Array(5);
class C6 {
    static [4] = Int32Array;
    [v5] = Float32Array;
    static 4 = Int32Array;
}
const v8 = new Set(v5);
try { v8.forEach(Array, v5); } catch (e) {}
eval("");
gc();
