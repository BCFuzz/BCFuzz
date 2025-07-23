class C1 {
    constructor(a3, a4) {
        function f5(a6, a7, a8, a9) {
            return a8;
        }
        try { f5.apply("isConcatSpreadable", "isConcatSpreadable"); } catch (e) {}
    }
}
class C11 extends C1 {
}
const v12 = new C11();
const v13 = v12.constructor;
for (let v14 = 0; v14 < 10; v14++) {
    new v13();
}
gc();
