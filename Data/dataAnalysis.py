# import statements
import csv
import statistics
from sklearn.cluster import KMeans
import numpy as np
from mpl_toolkits.mplot3d import Axes3D
from sklearn.neighbors import KNeighborsClassifier
import matplotlib.pyplot as plt
import matplotlib

#so you dont need a gui 
matplotlib.use('Agg') 

# function that formats coordinates for plotting
def convertToGraph(listy):
	x = []
	y = []
	for i in range(0, len(listy)):
		x.append(listy[i][0])
		y.append(listy[i][1])
	return [x, y]

# importing the file to analyze and putting it in a list
file = "NTEE_OS_Housing_Master_OSTeam - Master.csv"
values = []
with open(file, "r") as filer:
    read = csv.reader(filer)
    for value in read:
        values.append(value)
values.pop(0)

# pulling and converting liability values
liabilities = []
for x in range(0, len(values)):
    if values[x][364] != "":
        liabilities.append(float(values[x][364]))

# pulling and converting asset values
assets = []
for x in range(0, len(values)):
    if values[x][363] != "":
        assets.append(float(values[x][363]))

# pulling and converting revenue values
revenues = []
for x in range(0, len(values)):
    if values[x][345] != "":
        revenues.append(float(values[x][345]))

#values grouped by nonprofit
test = []
for x in range(0, len(values)):
    if values[x][364] != "" and values[x][345] != ""  and values[x][363] != "":
        test.append([float(values[x][364]), float(values[x][363])])
# finding median of assets and liabilities using stats library
medLiabilities = statistics.median(liabilities)


#defining and running the kmeans
graph = plt.figure()
km = KMeans(n_clusters = 3, n_init = 10, init = "random")
label = km.fit_predict(test)

import matplotlib.pyplot as plt
 
#filter rows to individual clusters
zeroes = []
for l in range(0, len(label)):
	if label[l] == 0:
		zeroes.append(test[l])

ones = []
for l in range(0, len(label)):
	if label[l] == 1:
		ones.append(test[l])

twos = []
for l in range(0, len(label)):
	if label[l] == 2:
		twos.append(test[l])

# convert clusters to graph form
zeroesPlot = convertToGraph(zeroes)
onesPlot = convertToGraph(ones)
twosPlot = convertToGraph(twos)

# add clusters to graph
plt.scatter(zeroesPlot[0], zeroesPlot[1], color = 'blue')
plt.scatter(onesPlot[0], onesPlot[1], color = 'green')
plt.scatter(twosPlot[0], twosPlot[1], color = 'purple')

# save graph as image
plt.savefig("plot.png")
# running knn algorithm on assets vs. liabilities
'''
landaNeigh = KNeighborsClassifier(n_neighbors=5)
landaSet = [[]]
landaSet.append(liabilities)
landaSet.append(assets)
landaNeigh.fit(assets, liabilities)
# running knn on assets and revenues
landrNeigh = KNeighborsClassifier(n_neighbors=5)
landrNeigh.fit(assets, revenues)
landrNeigh.reshape(-1, 1)
# comparing one np to the median in liabilities
# fig = px.scatter(x=landaNeigh[0], y=landaNeigh[1])
# fig.show()
''' 
