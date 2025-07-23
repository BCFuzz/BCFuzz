function f1() {
    const v2 = f1--;
    const o4 = {
        valueOf() {
            return v2;
        },
    };
    return f1;
}
const t9 = eval(([536870912n,f1]).toLocaleString());
t9();
gc();
