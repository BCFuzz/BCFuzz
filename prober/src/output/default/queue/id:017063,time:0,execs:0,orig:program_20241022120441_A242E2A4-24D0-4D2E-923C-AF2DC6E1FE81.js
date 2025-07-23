const v0 = [4294967297,36835,3,9007199254740991,-2,13,16,536870889];
class C1 {
    constructor(a3) {
        for (let v4 = 0; v4 < 5; v4++) {
            for (let v5 = 0; v5 < 250; v5++) {
                v5++;
                v5--;
            }
            const v9 = Reflect.getPrototypeOf(a3);
            try { v9.of(v9, v9, C1, v4); } catch (e) {}
        }
    }
}
const v11 = new C1(v0);
new C1(v11);
gc();
