const configureStripe = require("stripe");

const STRIPE_SECRET_KEY = "sk_test_eQQedpebWF61sYTbDJlaQG4m";

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
