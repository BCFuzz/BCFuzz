function f1() {
    --f1;
    ("").split().flatMap(eval);
    return 536870912n;
}
const t5 = eval(([536870912n,f1]).toLocaleString());
t5();
gc();
