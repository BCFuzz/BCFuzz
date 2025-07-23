let v0 = 899.5965983830708;
const v1 = v0++;
const o2 = {
};
o2[Symbol.toStringTag] = v1;
class C5 {
    constructor(a7) {
        try { new a7(o2); } catch (e) {}
    }
}
new C5(C5);
gc();
