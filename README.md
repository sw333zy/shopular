# shopular
A mock store which uses Angular items may be added and deleted also sorted. Unit tested with moch chai karma. Instuctions below


The shop owner has asked that you create an interface to edit that inventory. The data you should start with is in a gist 
(link in this sentence). You must create all of the pieces of this application (HTML, Sass, JS) and should submit your GitHub repository for the project.

You should only need one Angular module and controller
Be sure to bootstrap your module to the <html> tag
Be sure to bind your controller to an element in the HTML document (what would be appropriate?)
Your controller should have a tax property on its scope set to 5.75%
Display a table of the item data from the controller's scope
Place the data linked above in your controller (for now)
Don't forget your table header
Only display the name, price, quantity and color
Make sure the price includes tax and any discount! (Discounts are in dollars, not percent.)
If the item has a discount, show this icon next to the price: discount icon
Be sure to have all the proper HTML...
your page should have a <header>, <footer>, and <main> most likely... anything else?
Don't worry about the styles too much, but make sure your table is easy to read:
with zebra striped rows; and
centered in the page with 80% width.
Create a form to add a new item
The owner must provide the name, price, quantity, color, and discount
Use Angular directives to bind the data to the controller (use a newItem object on the scope)
Validate the data using angular, highlight any invalid fields in red
On form submission, add the item to the data (and hence UI) if all fields are valid
Allow sorting of the items in the display:
default to sorting by price (lowest at the top)
allow a user to click on a table header and sort by: name, quantity, or price
Create a Service to handle saving the item data to localStorage
This service only needs three methods: one to get all data, one to save a new item, and one to update all items.
You should use the "factory" pattern
Use this new service in the controller for your items (instead of our in-controller data from last time)
When the page is loaded and the Controller is created, get the data from the Service and put it on the scope
Whenever an item is added, save the data using this new Service
If you allow updating of items (EPIC Mode from last time), use the proper Service method for that
