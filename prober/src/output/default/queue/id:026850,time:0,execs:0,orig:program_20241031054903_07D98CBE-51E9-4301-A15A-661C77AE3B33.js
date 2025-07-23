const v1 = Symbol.toPrimitive;
const v3 = `
    async function* f4(a5, a6) {
        switch (a6) {
            case "m":
                break;
            case f4:
                break;
            case v1:
                break;
        }
        for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
        }
        return f4;
    }
    f4(Symbol, Symbol);
`;
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
}
const v29 = eval(v3);
v29.next(v29);
gc();
