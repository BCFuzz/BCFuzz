const v0 = [9007199254740992];
class C1 {
    constructor(a3) {
        for (let v4 = 0; v4 < 5; v4++) {
            for (let v5 = 0; v5 < 250; v5++) {
                v5++;
                v5--;
            }
            Reflect.getPrototypeOf(a3);
        }
    }
}
new C1(v0);
new C1(v0);
gc();
