# global-health-map

INCOMPLETE - This project is incomplete at the moment. This is an attempt to look at various metrics and eventually determine a narrative for the data and the project. This project attempts to find patterns within health data by looking at a variety of metrics across the world. This project cleans and organizes data together to provide a varied but accurate dataset, then uses that data to predict gender based on health outcomes using SciKit Learn and Tensor Flow. In addition, this project plans to upload data in an easily digestible way with images, statistics, graphs, and using D3 a choropleth map with world outcomes. This project is ongoing.


Female life expectancy correlates strongly with male life expectancy. 

![Screen Shot 2021-05-06 at 11 25 19 AM](https://user-images.githubusercontent.com/69011929/117347365-e1e4ec80-ae5d-11eb-830b-8cee5eff7457.png)

Machine Learning predicts gender based on health data.

Linear Regression performed on various features to determine which ones are positively or negatively associated with life expectancy
<img width="637" alt="Screen Shot 2021-10-20 at 11 59 33 AM" src="https://user-images.githubusercontent.com/69011929/138155357-fd48d48f-53fe-4a24-abd1-50fee1ad6896.png">
We see that poisioning rate per 100k and mortality from cardio, cancer, diabetes and respiratory infection are negatively associated with life expectancy, alcohol consumption is not, smoking is not, and suicide is positively associated with life expectancy.


![Screen Shot 2021-05-06 at 11 27 23 AM](https://user-images.githubusercontent.com/69011929/117347612-26708800-ae5e-11eb-89ce-de38e1c1fbc9.png)

D3 and Javascript plots life expectancy. Darker colors represent long life expectancies while lighter colors represent low life expectancies. Very light yellow represents missing data. 

<img width="1004" alt="Screen Shot 2021-05-06 at 11 17 30 AM" src="https://user-images.githubusercontent.com/69011929/117347078-7438c080-ae5d-11eb-8992-9020a5072b18.png">

