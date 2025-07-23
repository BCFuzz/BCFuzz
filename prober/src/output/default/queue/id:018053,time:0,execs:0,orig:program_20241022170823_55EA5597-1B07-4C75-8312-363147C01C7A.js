const v2 = ~(~Infinity);
function f4(a5) {
    return v2;
}
Object.defineProperty(Date, "valueOf", { configurable: true, value: f4 });
this.parseInt(-(Date / -1000000000000.0));
gc();
