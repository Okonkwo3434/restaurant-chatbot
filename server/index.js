const express = require("express");
const http = require('http').createServer(app);
const cors = require("cors");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
socket.io = require('socket.io')(http);
messageRoute = require("/routes/messageRoutes");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();


// Create middleware for controls
app.use(cors());
app.use(express.json());

app.use("/auth", userRoutes);
app.use("/api/message", messageRoute);

// Connect Server to MongoDB and include useNewUrlParser and useUnifiedTopology to prevent deprication
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("DB connection is successful");
})
.catch((err) => {
    console.log(err.message);
})

// Connect the Server to HTTP Port
const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});

// Set up the socket.io for chatbot messaging
const io = socket(server, {
    cors: {
        origin: "http://localhost:5000",
        credentials: true,
    },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });

    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if (sendUserSocket) {
            socket.to(sendUserSocket).emit("msg-receive", data.msg);
        }
    });
})

// Create current session for connected user and to store user session based on device
const sessions = {};

let currentSession = null; 

// Now check if the intending user has an exisitng session. If not create a NEW session
socket.on('session', (session) => {
    if (sessionId & sessions[sessionId]) {
        currentSession = sessionId;
    } else {
        currentSession = socket.id;
        sessions[currentSession] = {orderId: null};
    }

    socket.emit('session', currentSession);
});

// Define Yommy's menu with each menu item having an id, a name, a price-tag and image.
const menuItems = [
    { id: 1, name: 'Pizza', price: 1700.00, img: pizza.svg },
    { id: 2, name: 'Burger', price: 900.00, img: burger.svg },
    { id: 3, name: 'Noddles', price: 1200.00, img: noddles.svg },
    { id: 4, name: 'Beaf-meal', price: 800.00, img: beaf-mealsModel.svg },
];


  // Define orders list (placeholder) to store orders that would be placed by user.
const orders = [];

  // Provide a function to format the menu items as a string that can be displayed to the user
function formatMenu() {
    return menuItems.map(item => `${item.id}. ${item.name} (${item.price}$)`).join('\n');
}

  // Make a function to format an order as a string
function formatOrder(order) {
    return order.map(item => `${item.quantity}x ${item.name} (${item.price}$)`).join('\n');
}

  // This function handles a new connection
function handleConnection(socket) {
    let order = [];

    // Initialize an empty order array for the user, and then send an initial message to the user with the available options.
    socket.emit('message', 'Welcome to Yommy Place! How can I assist you today?\n' +
    'Select 1 to place an order\n' +
    'Select 99 to checkout order\n' +
    'Select 98 to see order history\n' +
    'Select 97 to see current order\n' +
    'Select 0 to cancel order');
}
    // Define code to handle incoming messages from the user. If message is "1", send message to the user with the available menu items for the user to select preferred items.

    socket.on('message', message => {
    if (message === '1') {
        socket.emit('message', `Hey select preferred items from menu:\n
        ${formatMenu()}`);
        socket.emit('prompt', 'item');

    // If message is "99" define code to check if user has any order item. If no order, send message "No order to place". If there is an item, add (push) it to the order list with a message "Order placed!"

    } else if (message === '99') {
        if (order.length === 0) {
        socket.emit('message', 'No order to place');
        } else {
        orders.push(order);
        order = [];
        socket.emit('message', 'Order placed! Thanks for your patronage. How else can I assist you?\n' +
            'Select 1 to place an order\n' +
            'Select 99 to checkout order\n' +
            'Select 98 to see order history\n' +
            'Select 97 to see current order\n' +
            'Select 0 to cancel order');
        }

    // If message is "98", define code to enable user to see "PAST order history". If there is no item in history, send message "No orders yet" to user, otherwise send "Here are your PAST orders"
    } else if (message === '98') {
            if (orders.length === 0) {
        socket.emit('message', 'No orders yet');
        } 
        else {
        socket.emit('message', 'Here are your past orders:\n'+
        orders.map(formatOrder).join('\n---\n'));
        }

    // If message is "97", define code to enable user to see CURRENT order history. If there is no item in history pool, send message "No orders yet" to user, otherwise send "Here are your CURRENT orders"

    } else if (message === '97') {
        if (order.length === 0) {
        socket.emit('message', 'No order yet');
        } 
        else {
        socket.emit('message', 'Here is your current order:\n' + formatOrder(order));
        }

    // If message is "0", define code to enable user to CANCEL order.  If there is item in order list, send message "Order Canceled" to user.
    } else if (message === '0') {
        if (order.length === 0) {
            socket.emit('message', 'Order Canceled');
            } 

        }
    }
    )
