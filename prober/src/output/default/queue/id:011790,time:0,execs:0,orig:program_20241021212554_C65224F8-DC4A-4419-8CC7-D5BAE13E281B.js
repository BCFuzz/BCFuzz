const v1 = ("d").small();
for (const v2 of v1) {
}
class C3 {
    constructor(a5, a6, a7, a8) {
        super[a5];
    }
}
const v10 = new C3(C3, "d", "d", "d");
const t9 = v10.constructor;
const v12 = new t9(v10, v10, v10);
class C13 extends C3 {
}
const v14 = new C13();
const v15 = v14.constructor;
const v16 = new v15(C3, v1, v12, v15, v15);
const t16 = v16.constructor;
new t16();
for (let v19 = 0; v19 < 250; v19++) {
    v19++;
    v19--;
}
gc();
