for (let i = 0; i < 5; i++) {
    class C0 {
    }
    class C1 extends C0 {
    }
    new C1();
    new C1();
}
const v5 = [Float64Array,Float64Array,Float64Array,Float64Array];
const o6 = {
    __proto__: v5,
};
new Float64Array(o6);
gc();
