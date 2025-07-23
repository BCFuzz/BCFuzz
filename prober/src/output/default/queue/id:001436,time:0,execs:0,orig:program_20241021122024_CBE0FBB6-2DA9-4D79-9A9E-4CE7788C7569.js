const v0 = -Infinity;
class C2 {
    constructor(a4) {
        delete a4[a4];
    }
}
new C2(NaN);
new C2(v0);
gc();
