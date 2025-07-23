class C0 {
    constructor(a2) {
        return arguments;
    }
}
const v4 = new C0();
const o5 = {
    ...v4,
    ...v4,
};
gc();
