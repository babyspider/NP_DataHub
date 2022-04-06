# import statements
import csv
import statistics
from sklearn.cluster import KMeans
import numpy as np
from mpl_toolkits.mplot3d import Axes3D
from sklearn.neighbors import KNeighborsClassifier
import matplotlib.pyplot as plt, mlpd3
import matplotlib

#so you dont need a gui 
matplotlib.use('Agg') 

# function that formats coordinates for plotting
def convertToGraph(listy):
	x = []
	y = []
	z = []
	for i in range(0, len(listy)):
		x.append(listy[i][0])
		y.append(listy[i][1])
		z.append(listy[i][2])
	return [x, y, z]

# function to create lists from values
def pullToList(values, i):
	listy = []
	for x in range(0, len(values)):
		if values[x][i] != "":
			listy.append(float(values[x][i]))
	return listy

# importing the file to analyze and putting it in a list
file = "NTEE_OS_Housing_Master_OSTeam - Master.csv"
values = []
with open(file, "r") as filer:
    read = csv.reader(filer)
    for value in read:
        values.append(value)
values.pop(0)


# pulling and converting liability values
liabilities = pullToList(values, 364)

# pulling and converting asset values
assets = pullToList(values, 363)

# pulling and converting revenue values
revenues = pullToList(values, 345)

#values grouped by nonprofit
test = []
for x in range(0, len(assets)):
    if assets[x] != "" and liabilities[x] != "":
        test.append([assets[x], liabilities[x], revenues[x]])

# finding median of assets and liabilities using stats library
medLiabilities = statistics.median(liabilities)


#defining and running the kmeans
clusters = 8
graph = plt.figure()
ax = graph.add_subplot(projection='3d')
km = KMeans(n_clusters = clusters, n_init = 10, init = "random")
label = km.fit_predict(test)
 

#graphing clusters
colors = ['pink', 'purple', 'red', 'blue', 'green', 'black', 'orange', 'yellow']
for c in range(0, clusters):
	clustery = []
	for l in range(0, len(label)):
		if label[l] == c:
			clustery.append(test[l])
	clusterPlot = convertToGraph(clustery)
	ax.scatter(clusterPlot[0], clusterPlot[1], clusterPlot[2], color = colors[c])

# save graph as image
plt.savefig("plot.png")
