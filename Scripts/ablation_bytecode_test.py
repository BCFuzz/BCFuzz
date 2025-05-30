import scipy.stats

least_5_bcfuzz_1 = [383.7, 426.4, 293.3, 421.4, 513.3]
least_15_bcfuzz_1 = [670.6, 763.9, 666.7, 794.7, 860.6]
least_25_bcfuzz_1 = [991.1, 1093.7, 1015.2, 1171.5, 1199.6]

least_5_bcfuzz_nojit = [3313.2, 2166.9, 2577.9, 2395.9, 3898.2]
least_15_bcfuzz_nojit = [6332.5, 4965.3, 5780.8, 5414.4, 8363.0]
least_25_bcfuzz_nojit = [8816.1, 7345.3, 8357.7, 8319.6, 11746.9]

least_5_bcfuzz_noedge = [349.9, 273.1, 475.5, 583.1, 565.5]
least_15_bcfuzz_noedge = [769.3, 721.0, 789.9, 914.4, 949.2]
least_25_bcfuzz_noedge = [1115.3, 1108.1, 1044.0, 1204.4, 1302.5]

least_5_bcfuzz_edgeonly = [244.7, 80.8, 134.4, 69.1, 100.0]
least_15_bcfuzz_edgeonly = [1391.8, 853.7, 1043.7, 1083.0, 784.3]
least_25_bcfuzz_edgeonly = [3355.3, 2733.0, 3153.5, 3418.5, 2342.7]


least_5_bcfuzz_2 = [2261.1, 2989.9, 2442.4, 2074.4, 1613.9]
least_15_bcfuzz_2 = [2931.4, 4781.0, 3800.2, 3041.2, 2601.8]
least_25_bcfuzz_2 = [4516.8, 7736.0, 5907.6, 5262.3, 3957.4]

least_5_bcfuzz_mutate = [2116.3, 2426.2, 2105.1, 2333.2, 1778.3]
least_15_bcfuzz_mutate = [2804.7, 3764.9, 2764.6, 3025.1, 2866.7]
least_25_bcfuzz_mutate = [4707.5, 6658.5, 4600.8, 5263.2, 4827.0]

least_5_bcfuzz_selection = [1026.2, 1155.3, 1373.7, 886.8, 900.9]
least_15_bcfuzz_selection = [2544.1, 4134.5, 3251.7, 2675.2, 2666.7]
least_25_bcfuzz_selection = [4724.3, 7979.0, 5250.9, 5322.2, 5124.0]


list_name = ["least_5_bcfuzz_1","least_15_bcfuzz_1","least_25_bcfuzz_1","least_5_bcfuzz_nojit","least_15_bcfuzz_nojit","least_25_bcfuzz_nojit","least_5_bcfuzz_noedge","least_15_bcfuzz_noedge","least_25_bcfuzz_noedge","least_5_bcfuzz_edgeonly","least_15_bcfuzz_edgeonly","least_25_bcfuzz_edgeonly","least_5_bcfuzz_2","least_15_bcfuzz_2","least_25_bcfuzz_2","least_5_bcfuzz_mutate","least_15_bcfuzz_mutate","least_25_bcfuzz_mutate","least_5_bcfuzz_selection","least_15_bcfuzz_selection","least_25_bcfuzz_selection"]

list_list = [least_5_bcfuzz_1,least_15_bcfuzz_1,least_25_bcfuzz_1,least_5_bcfuzz_nojit,least_15_bcfuzz_nojit,least_25_bcfuzz_nojit,least_5_bcfuzz_noedge,least_15_bcfuzz_noedge,least_25_bcfuzz_noedge,least_5_bcfuzz_edgeonly,least_15_bcfuzz_edgeonly,least_25_bcfuzz_edgeonly,least_5_bcfuzz_2,least_15_bcfuzz_2,least_25_bcfuzz_2,least_5_bcfuzz_mutate,least_15_bcfuzz_mutate,least_25_bcfuzz_mutate,least_5_bcfuzz_selection,least_15_bcfuzz_selection,least_25_bcfuzz_selection]


for i in range(len(list_list)):
    current_list = list_list[i]
    current_value = round(sum(current_list)/len(current_list), 1) # average value
    print(list_name[i], ": ", current_value)

print("5_bcfuzz_edgeonly:")
print(scipy.stats.mannwhitneyu(least_5_bcfuzz_edgeonly, least_5_bcfuzz_1, False,'less'))
print("")
print("15_bcfuzz_edgeonly:")
print(scipy.stats.mannwhitneyu(least_15_bcfuzz_1, least_15_bcfuzz_edgeonly, False,'less'))
print("")
print("25_bcfuzz_edgeonly:")
print(scipy.stats.mannwhitneyu(least_25_bcfuzz_1, least_25_bcfuzz_edgeonly, False,'less'))
print("")


print("5_bcfuzz_nojit:")
print(scipy.stats.mannwhitneyu(least_5_bcfuzz_1, least_5_bcfuzz_nojit, False,'less'))
print("")
print("15_bcfuzz_nojit:")
print(scipy.stats.mannwhitneyu(least_15_bcfuzz_1, least_15_bcfuzz_nojit, False,'less'))
print("")
print("25_bcfuzz_nojit:")
print(scipy.stats.mannwhitneyu(least_25_bcfuzz_1, least_25_bcfuzz_nojit, False,'less'))
print("")


print("5_bcfuzz_noedge:")
print(scipy.stats.mannwhitneyu(least_5_bcfuzz_1, least_5_bcfuzz_noedge, False,'less'))
print("")
print("15_bcfuzz_noedge:")
print(scipy.stats.mannwhitneyu(least_15_bcfuzz_1, least_15_bcfuzz_noedge, False,'less'))
print("")
print("25_bcfuzz_noedge:")
print(scipy.stats.mannwhitneyu(least_25_bcfuzz_1, least_25_bcfuzz_noedge, False,'less'))
print("")



print("5_bcfuzz_mutate:")
print(scipy.stats.mannwhitneyu(least_5_bcfuzz_mutate, least_5_bcfuzz_2,  False,'less'))
print("")
print("15_bcfuzz_mutate:")
print(scipy.stats.mannwhitneyu(least_15_bcfuzz_mutate, least_15_bcfuzz_2,  False,'less'))
print("")
print("25_bcfuzz_mutate:")
print(scipy.stats.mannwhitneyu(least_25_bcfuzz_mutate, least_25_bcfuzz_2,  False,'less'))
print("")


print("5_bcfuzz_schedule:")
print(scipy.stats.mannwhitneyu(least_5_bcfuzz_selection, least_5_bcfuzz_2,  False,'less'))
print("")
print("15_bcfuzz_schedule:")
print(scipy.stats.mannwhitneyu(least_15_bcfuzz_selection, least_15_bcfuzz_2,  False,'less'))
print("")
print("25_bcfuzz_schedule:")
print(scipy.stats.mannwhitneyu(least_25_bcfuzz_2, least_25_bcfuzz_selection, False,'less'))
print("")






