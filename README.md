# restaurant-chatbot
simple restaurant chatbot


README FILE

1.	The Project
Build a Restaurant ChatBot that will assist customers to place Orders for any preferred meals. The idea is for customers to send meal options from the frontend and the Chat App at the backend would respond to the options.
 
2.	Requirement
o	There should be a ChatBot interface would be like a chat interface

o	No need for authentication but we should be able to store user session based on devices.

o	When a customer lands on the chatbot page, the bot should send these options to the customer:
	Select 1 to Place an order,
	Select 99 to checkout order,
	Select 98 to see order history,
	Select 97 to see current order,
	Select 0 to cancel order.


o	When a customer selects “1”, the bot should return a list of items from the restaurant. It is up to you to create the items in your restaurant for the customer. The order items can have multiple options but the customer should be able to select the preferred items from the list using this same number select system and place an order.

o	When a customer selects “99” out of an order, the bot should respond with “order placed” and if none the bot should respond with “No order to place”. Customer should also see an option to place a new order.

o	When a customer selects “98”, the bot should be able to return all placed order.

o	When a customer selects “97”, the bot should be able to return current order

o	When a customer selects “0”, the bot should cancel the order if there is.


3.	Planning the projects

Objects in the System
•	Chat Interface
•	Restaurant Name
•	Order Session
•	Message
•	Meal
•	User
•	ChatBot
•	Timer

Events and Actions in the System
•	Start Chat Session
•	Join the ChatBot Session
•	Chat Request and Get Answer
•	Place an Order
•	Customer Checkout
•	Check Current Order
•	Check Order History
•	Cancel Order
•	Comment on Service
•	Receive Feedback

Assign Responsibilities

ChatBot
•	Answer to Requests
•	Show Menu.

Order Session
•	Start Order Session.
•	Close Order Session


4.	Code Structure

Server Side
Dependencies
•	Express
•	Socket.io
•	Cors
•	Nodemon
•	Mongoose
•	Bycrpt
•	Dotenv


Integration 
•	MongoDB Atlas Database
•	Node.js

Model Schema ( Mongoose)
User Schema
•	Username
•	Password
•	Email
•	Birthday
•	Avatar
•	Address
•	Timestamp
Meal Schema
•	Name
•	Image
•	Short Description
•	Long Description
•	Quantity
•	Price Tag
•	Review
•	Rating
•	Timestamp
Message Schema (Custom Payload)
•	User
•	Message_body
•	Message_status
•	CreatedAt
•	Chat Request
•	Chat Response

Create Server Code
Server.js
•	Require (express, mongoose, .env, socket.io, cors, bcrypt, etc)
•	App Setup (HTTP Request/Response)
•	Middleware (Routers and Controllers)
•	Connection to MongoDB
•	Server listening on PORT.
•	Restaurant order (request and response) logic 


Create Model View Code
•	user.js 
•	meal.js
•	message.js
Routes 
•	userRoutes.js
•	mealRoutes.js
•	messageRoutes.js

MongoDB Atlas Database Setup
•	Users collection database
•	Meals collection database
•	Message collection database

Client Side
Landing Page
•	Meals’ Image ( Wix and Unsplash Images)
•	Signup 
•	Login

Dashboard
•	Navigation Bar
•	Featured Meals
•	Place Order (ordered product page)
•	ChatBot Messaging Area
•	Checkout (Cart)
•	Order History
•	Current Orders
•	Cancel Orders


