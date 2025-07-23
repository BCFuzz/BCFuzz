const o7 = {
    set b(a1) {
        for (let v2 = 0; v2 < 5; v2++) {
            function f3(a4) {
                return a1;
            }
            delete arguments.length;
        }
    },
};
o7.b = o7;
gc();
