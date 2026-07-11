import express from "express";
import bodyParser from "body-parser";
import mysql from 'mysql2';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'nodejs_demo'
});

db.connect((err) => {
    if (err){
        console.err('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.post('/api/users', (req, res) => {
    const {name, email, password} = req.body;
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, password], (err, result) => {
        if (err) {
            res.status(500).json({message: 'Error while creating', error: err});
        } else{
            res.status(201).json({message: 'User created', user: {id: result.insertId, name: name, email: email}});
        }
    });
});


app.get('/api/users', (req, res) => {
    const sql = 'SELECT * from users';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({message: 'Error while fetching', error: err});
        } else{
            res.json({data: result});
        }
    });
});


app.get('/api/users/:id', (req, res) => {
    const {id} = req.params;
    const sql = 'SELECT * from users where id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json({message: 'Error while fetching', error: err});
        } else if (result.length === 0){
            res.status(404).json({message: 'User not found'});
        } else {
            res.json({message: 'Get data successfully', user: result[0]});
        }
    });
});


app.put('/api/users/:id', (req, res) => {
    const {id} = req.params;
    const {name, email} = req.body;
    const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(sql, [name, email, id], (err, result) => {
        if (err) {
            res.status(500).json({message: 'Error while updating', error: err});
        } else if (result.affectedRows === 0){
            res.status(404).json({message: 'User not found'});
        } else {
            res.json({message: 'Update data successfully'});
        }
    });
});

app.delete('/api/users/:id', (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json({message: 'Error while deleting', error: err});
        } else if (result.affectedRows === 0){
            res.status(404).json({message: 'User not found'});
        } else {
            res.json({message: 'Delete data successfully'});
        }
    })
})


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})