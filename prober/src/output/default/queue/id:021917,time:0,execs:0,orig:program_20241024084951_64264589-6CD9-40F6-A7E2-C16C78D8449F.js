function f1(a2, a3) {
    return ("MAX_VALUE").toLocaleLowerCase(Symbol, Symbol);
}
Symbol.toString = f1;
const v6 = Symbol.for(Symbol);
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    const o24 = {
        [v6]() {
        },
    };
}
new F17(v6, f1, f1, Symbol);
gc();
