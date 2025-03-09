const express = require('express')
const cors = require('cors')
const router = require('./routes')

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = app


// // Import required modules
// const express = require('express')
// const { Pool } = require('pg')
// const { customAlphabet } = require('nanoid')
// const cors = require('cors')
// const path = require('path')

// // Initialize Express
// const app = express()
// app.use(express.json())
// app.use(cors())

// // PostgreSQL connection
// const pool = new Pool({
//     user: process.env.DB_USER || 'postgres',
//     host: process.env.DB_HOST || 'localhost',
//     database: process.env.DB_NAME || 'url_shortener',
//     password: process.env.DB_PASSWORD || 'password',
//     port: process.env.DB_PORT || 5432,
// })

// // Helper function to generate 3 random words
// const words = ['apple', 'banana', 'cat', 'dog', 'elephant', 'fox', 'grape', 'hippo', 'igloo', 'james', 'kangaroo', 'lion', 'monkey', 'nest', 'octopus', 'penguin', 'quokka', 'rabbit', 'snake', 'tiger', 'umbrella', 'vulture', 'whale', 'xylophone', 'yak', 'zebra']
// const generateRandomWords = () => {
//     return `${words[Math.floor(Math.random() * words.length)]}.
//             ${words[Math.floor(Math.random() * words.length)]}.
//             ${words[Math.floor(Math.random() * words.length)]}`
// }

// // Create table if not exists
// pool.query(`CREATE TABLE IF NOT EXISTS urls (
//     id SERIAL PRIMARY KEY,
//     short_path TEXT UNIQUE NOT NULL,
//     original_url TEXT NOT NULL
// )`)

// // Route to shorten a URL
// app.post('/shorten', async (req, res) => {
//     const { originalUrl } = req.body
//     if (!originalUrl) { return res.status(400).json({ error: 'URL is required' }) }

//     let shortPath = generateRandomWords()
//     let exists = await pool.query('SELECT * FROM urls WHERE short_path = $1', [shortPath])
//     while (exists.rowCount > 0) {
//         shortPath = generateRandomWords()
//         exists = await pool.query('SELECT * FROM urls WHERE short_path = $1', [shortPath])
//     }

//     await pool.query('INSERT INTO urls (short_path, original_url) VALUES ($1, $2)', [shortPath, originalUrl])
//     res.json({ shortUrl: `/go/${shortPath}` })
// })

// // Route to redirect
// app.get('/go/:path', async (req, res) => {
//     const { path } = req.params
//     const result = await pool.query('SELECT original_url FROM urls WHERE short_path = $1', [path])
//     if (result.rowCount === 0) { return res.status(404).json({ error: 'URL not found' }) }
//     res.redirect(result.rows[0].original_url)
// })

// // Start server
// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// module.exports = app
