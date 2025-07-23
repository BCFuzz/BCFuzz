function f0(a1, a2) {
    typeof a1 === "object";
    return a2;
}
for (let v6 = 0; v6 < 10; v6++) {
    f0(f0, f0);
}
gc();
