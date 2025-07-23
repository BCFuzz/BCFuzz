const v2 = TypeError();
function f3() {
    return TypeError;
}
class C4 {
    constructor(a6, a7) {
        a7 instanceof f3;
    }
}
const v9 = new C4();
const t10 = v9.constructor;
new t10(352, v9);
const v12 = v9.constructor;
new v12(v12, v2);
for (let v14 = 0; v14 < 250; v14++) {
}
gc();
