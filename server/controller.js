
module.exports = {
    getAllProducts: async (req, res) => {
        try {
            const db = req.app.get('db')
            let allProducts = await db.get_all_products()
            return res.status(200).send(allProducts)
        } catch(err) {
            console.log(err)
        }
    }
}