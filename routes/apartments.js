const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Apartment = require('../models/Apartment');
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');

// Validation middleware
const validateApartment = [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('location').notEmpty().withMessage('Location is required'),
    body('bedrooms').isInt({ min: 0 }).withMessage('Bedrooms must be a positive number'),
    body('bathrooms').isInt({ min: 0 }).withMessage('Bathrooms must be a positive number'),
    body('area').isNumeric().withMessage('Area must be a number'),
    body('type').isIn(['apartment', 'room', 'studio']).withMessage('Invalid property type'),
    body('images').isArray().withMessage('Images must be an array')
];

// Get all apartments (public)
router.get('/', async (req, res) => {
    try {
        const apartments = await Apartment.findAll();
        res.json(apartments);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get single apartment (public)
router.get('/:id', async (req, res) => {
    try {
        const apartment = await Apartment.findById(req.params.id);
        if (!apartment) {
            return res.status(404).json({ message: 'Apartment not found' });
        }
        res.json(apartment);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Create apartment (admin only)
router.post('/', [auth, adminAuth, validateApartment], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const apartment = await Apartment.create({
            ...req.body,
            createdBy: req.user.id
        });

        res.status(201).json(apartment);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update apartment (admin only)
router.put('/:id', [auth, adminAuth, validateApartment], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const apartment = await Apartment.update(req.params.id, req.body);
        if (!apartment) {
            return res.status(404).json({ message: 'Apartment not found' });
        }

        res.json(apartment);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete apartment (admin only)
router.delete('/:id', [auth, adminAuth], async (req, res) => {
    try {
        const result = await Apartment.delete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Apartment not found' });
        }

        res.json({ message: 'Apartment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router; 