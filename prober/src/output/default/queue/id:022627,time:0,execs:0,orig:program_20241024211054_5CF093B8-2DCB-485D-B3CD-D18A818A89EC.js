class C0 {
}
new C0();
new C0();
function f3() {
    function f5() {
        return arguments;
    }
    f5.apply(arguments, arguments);
    return C0;
}
f3();
for (let v8 = 0; v8 < 250; v8++) {
}
gc();
