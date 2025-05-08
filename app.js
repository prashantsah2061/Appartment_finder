const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const authRoutes = require('./routes/auth');
const apartmentRoutes = require('./routes/apartments');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/apartments', apartmentRoutes);

// View Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/admin/dashboard', (req, res) => {
    res.render('admin/dashboard');
});

app.get('/apartment/:id', async (req, res) => {
    try {
        const Apartment = require('./models/Apartment');
        const apartment = await Apartment.findById(req.params.id);
        
        if (!apartment) {
            return res.status(404).render('error', { 
                message: 'Apartment not found' 
            });
        }
        
        res.render('apartment-details', { apartment });
    } catch (error) {
        res.status(500).render('error', { 
            message: 'Error loading apartment details' 
        });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 