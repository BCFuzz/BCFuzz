function f1() {
    let v2 = f1--;
    v2--;
    return ("").split().flatMap(eval);
}
const t5 = eval(([536870912n,f1]).toLocaleString());
t5();
gc();
