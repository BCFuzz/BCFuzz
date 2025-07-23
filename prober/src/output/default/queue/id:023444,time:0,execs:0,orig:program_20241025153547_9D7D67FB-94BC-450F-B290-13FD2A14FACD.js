const v1 = [-4];
v1[1] = v1;
JSON["stringify"](v1.toLocaleString());
gc();
