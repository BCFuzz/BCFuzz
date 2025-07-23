class C1 {
    constructor(a3) {
        for (const v4 of "valueOf") {
            for (let v5 = 0; v5 < 10; v5++) {
            }
            delete this["valueOf"];
        }
    }
}
new C1();
class C8 extends C1 {
}
new C8();
gc();
