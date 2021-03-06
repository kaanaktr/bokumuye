const express = require('express');
const router = require('express').Router();
const db = require('quick.db');
const path = require("path");
const client = require('../../bot');
const ms = require('ms');

console.log("[Loading] : Admin - Ban router loading...");

router.get("/ban-user", (req,res) => {
    if (!req.user) return res.redirect("/auth/login");
    let guild = client.guilds.cache.get("785468934844973056");
    let member = guild.members.cache.get(req.user.id);
    if (!member) return res.redirect("/");
    if (!member.roles.cache.get("794265637312397342")) return res.redirect("/");
    res.render("admin/ban.ejs", {
        user: req.user,
        db: db,
        bot: client,
    });
});

module.exports = router;