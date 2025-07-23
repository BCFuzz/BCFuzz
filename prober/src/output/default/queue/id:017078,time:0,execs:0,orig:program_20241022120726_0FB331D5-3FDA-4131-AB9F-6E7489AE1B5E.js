function f0(a1, a2) {
    this.constructor.getOwnPropertySymbols(-1000.0);
    return this;
}
for (let i = 0; i < 10; i++) {
    f0();
}
gc();
