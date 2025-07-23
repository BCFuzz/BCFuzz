const v4 = Math.ceil.bind();
const v5 = v4.bind(v4, Int16Array);
([-4n,-10n]).sort(v5);
gc();
