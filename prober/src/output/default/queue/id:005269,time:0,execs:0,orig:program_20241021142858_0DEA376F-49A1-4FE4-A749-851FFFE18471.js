function f0() {
    return f0;
}
class C1 {
}
const v2 = new C1();
const v3 = `
    switch (v3) {
        case v2:
            f0 % 2;
            break;
    }
`;
eval(v3);
gc();
