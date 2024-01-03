
## setup

- Install http server to serve your files. I suggest to use : http-server: `npm install --global http-server`. More info [here](https://github.com/http-party/http-server)

- We will use an API to fetch some mock data. You can use some mock Employees Api like [this](https://dummyapis.com/dummy/employee?queryParameters=noofRecords%3D100%26idStarts%3D1001), or anything else you choose. It can be even a list of github repos, just make sure you are not blocked by any creds needed. 

## Step 1: 

- Create 3 files - index.html, a js file and a css file. 
- Inside the html file create a div container. 
- Inside this div build a table with headers (Based on the api you chose). Leave the tbody empty. 
- Add the javascript file and a css file to the html page so that they can be used. 
- In the javascript file create 2 functions - getListData and buildList.

- getListData will fetch the list using 'fetch' from the chosen API.
- buildList will get the list data and build the tbody based on the loaded data. 

- You will also have to fetch + build list once page is initialized. (how?).


## step 2: 
Add some actions:

- Below the table add a 'refresh' button. clicking on this button will refetch the data and rebuild the table. 
- Add a 'sort' button. The sort will sort the data by one of the keys. 
- Add a click listener to the table rows. When clicking on a row alert its selected employee's name.

## step 3: 

Make this look nice. Use CSS to:
- Style the table headers with your chosen color + bold
- Style the table with some and padding and alignment so it will look ok 
- On hover on the row change some coloring (background color to gray for example). 
- Align the buttons using flex, so one of them is to the left and one to the right. 
- Style the buttons with no border and hover effect.
- Bonus: create a scrollable container so the table will only take a portion of the screen. Can you make the headers stick to the top and not scroll with the content? 