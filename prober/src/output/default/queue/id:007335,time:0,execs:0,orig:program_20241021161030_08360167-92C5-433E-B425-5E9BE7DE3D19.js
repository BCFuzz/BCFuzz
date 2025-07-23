const v2 = 129 <= Int32Array;
const v3 = v2 ? 129 : Int32Array;
class C4 {
    get c() {
        const o9 = {
            ..."p",
            p(a8) {
                return v2;
            },
        };
        for (const v10 in o9) {
        }
    }
}
const v11 = new C4();
const v13 = new v3(586);
for (const v14 of v13) {
    v11.c;
}
gc();
