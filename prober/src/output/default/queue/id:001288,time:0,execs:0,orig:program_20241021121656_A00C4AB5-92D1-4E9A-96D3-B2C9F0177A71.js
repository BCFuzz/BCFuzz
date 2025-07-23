function f0() {
    return f0;
}
typeof f0 === "object";
gc();
