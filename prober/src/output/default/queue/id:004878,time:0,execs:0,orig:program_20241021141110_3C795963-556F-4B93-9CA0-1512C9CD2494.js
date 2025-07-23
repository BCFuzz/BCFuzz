let v0 = "ShB";
class C1 {
    constructor() {
        for (let i5 = 0, i6 = 10;
            i5 < i6;
            (() => {
                const v11 = v0++;
                Math.round(v0);
                Math.tanh(v11);
                i6--;
            })()) {
        }
    }
}
new C1();
new C1();
gc();
