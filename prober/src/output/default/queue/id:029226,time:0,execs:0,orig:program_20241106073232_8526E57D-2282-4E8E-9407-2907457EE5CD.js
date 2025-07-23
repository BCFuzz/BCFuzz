function f1() {
    f1 = EvalError;
    ("").split().flatMap(eval);
    return eval;
}
const v7 = [536870912n,f1];
const v8 = [v7];
const t7 = eval(v8.toLocaleString());
t7(v8, v7, v7, v7);
gc();
