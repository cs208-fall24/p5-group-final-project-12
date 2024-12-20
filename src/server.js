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
app.use(express.json());

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
  db.all("SELECT * FROM comments WHERE major = 'Party Major' ORDER BY RANDOM() LIMIT 5", [], function (err, rows) {
    if (err) {
      console.error('Error fetching comments:', err)
      return res.status(500).send('Error fetching comments')
    }

    // Pass empty array if no comments are found
    const comments = rows.length > 0 ? rows : []
    res.render('student1', { comments: comments })
  })
})

// Add a new comment for 'Party Major'
app.post('/student1', function (req, res) {
  const content = req.body.content

  // Insert the new comment into the database
  db.run("INSERT INTO comments (content, major) VALUES (?, 'Party Major')", [content], function (err) {
    if (err) {
      console.error('Error adding comment:', err)
      return res.status(500).send('Error adding comment')
    }
    res.redirect('/student1')  // Redirect back to the Party Major comments page
  })
})

// Delete a comment by ID for 'Party Major'
app.post('/delete-comment/student1/:id', function (req, res) {
  const id = req.params.id;

  // Delete the comment with the given ID
  db.run("DELETE FROM comments WHERE id = ?", [id], function (err) {
    if (err) {
      console.error('Error deleting comment:', err);
      return res.status(500).send('Error deleting comment');
    }
    res.redirect('/student1');  // Redirect back to the Party Major comments page
  });
});

// Edit a comment (GET form) for 'Party Major'
app.get('/edit-comment/:id', function (req, res) {
  const id = req.params.id;

  // Get the comment to be edited
  db.get("SELECT * FROM comments WHERE id = ?", [id], function (err, row) {
    if (err) {
      console.error('Error fetching comment for edit:', err);
      return res.status(500).send('Error fetching comment for edit');
    }
    
    // Render the 'comment' page located in views/student2 directory
    res.render('student1/edit-comment', { comment: row });
  });
});

// Route to view all comments (including hidden ones)
app.get('/all-comments', function (req, res) {
  console.log('GET called');
  
  // Fetch all comments from the database, including hidden ones
  db.all("SELECT * FROM comments WHERE major = 'Party Major'", [], function (err, rows) {
    if (err) {
      console.error('Error fetching comments:', err);
      return res.status(500).send('Error fetching comments');
    }

    // Pass all comments to the all-comments page
    const comments = rows.length > 0 ? rows : [];
    res.render('student1/all-comments', { comments: comments });
  });
});

// Update the comment for 'Party Major'
app.post('/update-comment/student1/:id', function (req, res) {
  const id = req.params.id;
  const content = req.body.content;

  // Update the comment in the database
  db.run("UPDATE comments SET content = ? WHERE id = ?", [content, id], function (err) {
    if (err) {
      console.error('Error updating comment:', err);
      return res.status(500).send('Error updating comment');
    }
    res.redirect('/student1');  // Redirect back to the Party Major comments page
  });
});

app.get('/student2', function (req, res) {
  console.log('GET called')


  // Fetch comments for 'Basket Weaving'
  db.all("SELECT * FROM comments WHERE major = 'Basket Weaving' ORDER BY RANDOM() LIMIT 5", [], function (err, rows) {
    if (err) {
      console.error('Error fetching comments:', err)
      return res.status(500).send('Error fetching comments')
    }

    // Pass empty array if no comments are found
    const comments = rows.length > 0 ? rows : []
    res.render('student2', { comments: comments })
  })
})

// Add a new comment for 'Basket Weaving'
app.post('/student2', function (req, res) {
  const content = req.body.content

  // Insert the new comment into the database
  db.run("INSERT INTO comments (content, major) VALUES (?, 'Basket Weaving')", [content], function (err) {
    if (err) {
      console.error('Error adding comment:', err)
      return res.status(500).send('Error adding comment')
    }
    res.redirect('/student2')  // Redirect back to the Basket Weaving comments page
  })
})

// Delete a comment by ID for 'Basket Weaving'
app.post('/delete-comment/student2/:id', function (req, res) {
  const id = req.params.id;

  // Delete the comment with the given ID
  db.run("DELETE FROM comments WHERE id = ?", [id], function (err) {
    if (err) {
      console.error('Error deleting comment:', err);
      return res.status(500).send('Error deleting comment');
    }
    res.redirect('/student2');  // Redirect back to the Basket Weaving comments page
  });
});

// Edit a comment (GET form) for 'Basket Weaving'
app.get('/comment/:id', function (req, res) {
  const id = req.params.id;

  // Get the comment to be edited
  db.get("SELECT * FROM comments WHERE id = ?", [id], function (err, row) {
    if (err) {
      console.error('Error fetching comment for edit:', err);
      return res.status(500).send('Error fetching comment for edit');
    }
    
    // Render the 'comment' page located in views/student2 directory
    res.render('student2/comment', { comment: row });
  });
});

// Route to view all comments (including hidden ones)
app.get('/whole-comment-list', function (req, res) {
  console.log('GET called');
  
  // Fetch all comments from the database, including hidden ones
  db.all("SELECT * FROM comments WHERE major = 'Basket Weaving'", [], function (err, rows) {
    if (err) {
      console.error('Error fetching comments:', err);
      return res.status(500).send('Error fetching comments');
    }

    // Pass all comments to the all-comments page
    const comments = rows.length > 0 ? rows : [];
    res.render('student2/whole-comment-list', { comments: comments });
  });
});

// Update the comment for 'Basket Weaving'
app.post('/update-comment/student2/:id', function (req, res) {
  const id = req.params.id;
  const content = req.body.content;

  // Update the comment in the database
  db.run("UPDATE comments SET content = ? WHERE id = ?", [content, id], function (err) {
    if (err) {
      console.error('Error updating comment:', err);
      return res.status(500).send('Error updating comment');
    }
    res.redirect('/student2');  // Redirect back to the Basket Weaving comments page
  });
});

app.get('/student3', function (req, res) {
  console.log('GET called')
  res.render('student3')
})

// Start the web server
app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
