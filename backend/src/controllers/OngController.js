const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
    index: async (req, res) => {
        const ongs = await connection("ongs").select("*");
        return res.json(ongs);
    },
    create: async (req, res) => {
        const { name, email, whatsapp, city, uf } = req.body;

        const id = crypto.randomBytes(4).toString("HEX");

        await connection("ongs")
            .insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            })
            .catch(err => {
                throw new Error(err);
            });
        return res.json({ id });
    }
};