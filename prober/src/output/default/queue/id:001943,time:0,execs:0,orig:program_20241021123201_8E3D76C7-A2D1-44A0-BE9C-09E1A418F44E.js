class C2 extends Uint16Array {
    constructor(a4, a5) {
        super(a4);
        super.toReversed();
    }
}
new C2(128);
gc();
