import server from './server'
import operations from './operations'

server((app) => {

    app.get('/', async (req, res, next) => {
        res.status(200).json({
            OK:true, 
            articles: await operations.getAll(),
        })
    })

    app.get('/:id', async (req, res, next) => {
        const article = await operations.findById(req.params.id)
        res.status(200).json({
            OK: true,
            article: article
        })
    })

    app.post('/', async (req, res, next) => {
        const article = req.body
        const result = await operations.add(article)
        res.status(200).json({
            OK: true,
            result: result
        })
    })

    app.put('/:id',  async (req, res, next) => {
        const article = req.body
        const result = await operations.edit(req.params.id, article)
        res.status(200).json({
            OK: true,
            result: result
        })        
    })

    app.patch('/:id',  async (req, res, next) => {
        const value = req.body.value
        const field = req.body.field
        const id = req.params.id
        const result = await operations.editPart(req.params.id, field, value)
        res.status(200).json({
            OK: true,
            result: result
        })             
    })

    app.delete('/:id', async (req, res, next) => {
        const result = await operations.remove(req.params.id)
        res.status(200).json({
            OK: true,
            result: result
        })
    })
})