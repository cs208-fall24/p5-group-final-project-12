import express from 'express'
import sql from 'sqlite3'

const sqlite3 = sql.verbose()

// Create an in memory table to use
const db = new sqlite3.Database(':memory:')

const app = express()
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: false }))

db.serialize( function() {
  db.run("CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY, content TEXT, major TEXT)");
  console.log('Comments table created (or already exists)');
});


app.get('/', function (req, res) {
  console.log('GET called')
  res.render('index')
})

app.get('/student1', function (req, res) {
  console.log('GET called');
  
  // Fetch comments for 'Party Major' (or any other major if needed)
  db.all("SELECT content FROM comments WHERE major = 'Party Major'", [], (err, rows) => {
    if (err) {
      console.error('Error fetching comments:', err);
      return res.status(500).send('Error fetching comments');
    }

    // Ensure comments is passed as an empty array if no comments are found
    const comments = rows.length > 0 ? rows : [];

    // Render student1 page with the comments (even if it's empty)
    res.render('student1', { comments: comments });
  });
});



app.get('/student2', function (req, res) {
  console.log('GET called')
  res.render('student2')
})

app.get('/student3', function (req, res) {
  console.log('GET called')
  res.render('student3')
})

// Start the web server
app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
