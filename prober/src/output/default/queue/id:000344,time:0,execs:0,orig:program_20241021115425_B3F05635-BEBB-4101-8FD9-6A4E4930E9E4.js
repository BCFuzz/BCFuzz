function f1() {
    return undefined;
}
Math.exp(f1);
Math.fround(undefined);
Math.expm1(f1);
gc();
