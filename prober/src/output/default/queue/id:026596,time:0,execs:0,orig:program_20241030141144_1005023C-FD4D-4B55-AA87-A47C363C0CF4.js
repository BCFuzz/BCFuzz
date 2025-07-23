class C0 {
}
const v1 = new C0();
function f2(a3) {
    for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        function f15() {
            return a3;
        }
        function f16(a17) {
            return a3;
        }
        Object.defineProperty(JSON, "toJSON", { configurable: true, get: f15, set: f16 });
        JSON.stringify(JSON);
    }
    return a3;
}
v1.constructor = f2;
const t17 = v1.constructor;
t17(f2);
gc();
