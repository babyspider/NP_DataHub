# NP DataHub
[GitHub Repo](https://github.com/babyspider/NP_DataHub/) and [this docuement on Google Drive](https://docs.google.com/document/d/1sE8oZ2MY-LFY0cvWTM8VlfhMDZS0cSNOkhukOGt9nxQ/edit?usp=sharing) <br /> 

## Overview
NP DataHub will be a website for other non-profits, policymakers, and donors to view information on non-profits. This will help the end-user in making informed decisions. We will pull from the publicly available data on nonprofits produced by the IRS. Then through deploying machine learning algorithms, we will gather an in-depth analysis of all non-profits we have data for. Finally, we will publish our findings on a pretty website. <br />

## Semster Plan
While our end goal for this project would be an all-encompassing website with very pretty and interesting data visualizations. We will start off small, by focusing our data analysis on only one NTEE code. After making this initial choice, we will set up a database to store the data points centrally. Once we get a database set up,  we can start implementing some basic data visualizations and analysis just so we can get some output to put up on our website. We would then like to explore some interesting algorithms  for analysis like neural networks and clustering libraries. Additionally, we can design some algorithmic analysis for fiscal variables and maybe even be able to measure the impact of organizations within an NTEE sector. </br>

## Technology
We plan on using an [SQL Database](https://en.wikipedia.org/wiki/SQL) hosted on [AWS](https://aws.amazon.com) or [Azure](https://azure.microsoft.com/en-us/products/azure-sql/database/) to store all of our data from the IRS. Then we will use [Python](https://www.python.org) to analyze the data. From there we will turn our findings into graphs or diagrams using a python library such as [Plotly](https://plotly.com) or other Open Source data visualization tools such as [these](https://rigorousthemes.com/blog/best-open-source-data-visualization-tools/). Finally, we will publish our findings on a website using [Javascript](https://www.javascript.com) <br />

## Group Members
| Name	| GitHub Handle	| Email |
| --- | --- | --- |
| Joey Hinckley | [JoeyHinckley34](https://github.com/JoeyHinckley34) | hinckj@rpi.edu |
| Ariana Lissak | [babyspider](https://github.com/babyspider) | lissaa@rpi.edu |

In collaboration with Professor Orzechowski

## MileStones 

MileStones
* Week 1: Identify one of 26 NTEE sectors within New York State, as a sample and start playing around with some open source data visualization libraries.
* Week 2: Establish the preliminary database foundation for the NTEE sample data set and work on building a website prototype that we will use for displaying the data visualizations we build.
* Week 3: Establish the initial platform design for the first version. Keeping in mind how we want to add the data visualization/dashboard construction and algorithmic results for the best extensibility and user experience.
* Week 4: Identify one reliable public database source that aligns with the chosen NTEE sector to be included in advanced algorithmic construction. Try integrating it into a basic cluster analysis or neural network in a way that the results tell our end user a unique story.
* Week 5: Begin testing and developing initial analysis algorithms on selected fiscal variables of individual nonprofits and associated NTEE codes and display in a way that tells our users a story about the fiscal performance of the nonprofits. 
* Week 6: Continue working on algorithms for selected fiscal formulas of individual nonprofits and associated NTEE codes and connect it with the public dataset we are comparing it with.
* Week 7: Finalize algorithms with an emphasis on accuracy and precision.
* Week 8: Incorporate findings with open-source data visualization libraries to better tell their story.
* Week 9: Construct a data visualization dashboard.
* Week 10: Launch the initial platform for user testing and present our initial platform for the datahub.  


