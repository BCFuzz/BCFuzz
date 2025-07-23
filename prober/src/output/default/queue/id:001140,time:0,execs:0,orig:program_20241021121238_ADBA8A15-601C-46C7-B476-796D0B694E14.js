class C1 {
    #a = "string";
    constructor(a3, a4) {
        try {
            ("string").#a;
        } catch(e6) {
        }
    }
}
new C1();
gc();
