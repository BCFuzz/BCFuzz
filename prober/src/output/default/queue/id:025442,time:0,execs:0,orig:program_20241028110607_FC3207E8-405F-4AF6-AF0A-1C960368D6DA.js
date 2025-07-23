for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10;
    i13--, i12 < i13;
    (() => {
        function F18(a20, a21, a22, a23) {
            if (!new.target) { throw 'must be called with new'; }
            function f24() {
                const v26 = arguments.propertyIsEnumerable;
                try { new v26(arguments, arguments); } catch (e) {}
            }
            f24();
        }
        new F18(i13, i12, i12, i13);
    })()) {
}
for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
}
gc();
