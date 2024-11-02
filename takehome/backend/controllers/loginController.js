const express = require('express');
const bcrypt = require('bcrypt');
const FullSchema = require('../models/database');

const SALT_ROUNDS = 10; // Adjust as needed

const loginController = {
    async userRegister(req, res, next) {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                return res.status(400).json({ message: "Provide both username and password" });
            }

            const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

            const newUser = new FullSchema({
                auth: {
                    username: username,
                    password: hashedPassword
                }
            });

            await newUser.save();
            res.status(201).json({ message: 'User successfully registered' });
        } catch (err) {
            return next(err);
        }
    },

    async userLogin(req, res, next) {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                return res.status(400).json({ message: "Provide both username and password" });
            }

            // Find the user by username
            const user = await FullSchema.findOne({ 'auth.username': username });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            const isMatch = await bcrypt.compare(password, user.auth.password);
            if (!isMatch) {
                return res.status(401).json({ message: "Invalid password" });
            }
            res.status(200).json({ message: 'Login successful' });
        } catch (err) {
            return next(err);
        }
    }
};

module.exports = loginController;
