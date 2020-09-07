const express = require('express');
const cors = require('cors');
require('./db/mongoose');
const userRouter = require('./routes/user'); 
const taskRouter = require('./routes/task');
const recipeRouter = require('./routes/recipe');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.use(recipeRouter);
// app.get('/recipes', async (req, res) => {
//     res.send({
//         working: 'ok'
//     })
// })

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});
