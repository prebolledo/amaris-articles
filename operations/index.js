import db from '../db'
import articles from '../articles'

const getAll = async () => {
    let articles = []
    await db.query('SELECT id, name, description FROM articles').then(result => articles = result)
    return articles
}

const findById = async (id) => {
    let articles = []
    await db.query(`SELECT id, name, description FROM articles WHERE id = ${id}`).then(result => articles = result)
    return articles[0] || null
}

const add = async (article) => {
    const q = `
        insert into 
        articles(name, description) 
        values('${article.name}','${article.description}')
    `
    let result
    await db.query(q).then(r => result = r)
    return result.affectedRows > 0
}

const edit = async (id, article) =>{
    const q = `
        update articles 
        set name = '${article.name}', description = '${article.description}' 
        WHERE id = ${id}
    `    
    let result
    await db.query(q).then(r => result = r)
    return result.affectedRows > 0    
}

const editPart = async (id, field, value) => {
    const q = `
        update articles 
        set ${field} = '${value}'
        WHERE id = ${id}
    ` 
    let result
    await db.query(q).then(r => result = r)
    return result.affectedRows > 0        
}

const remove = async (id) => {
    const q = `
        delete from articles 
        WHERE id = ${id}
    ` 
    let result
    await db.query(q).then(r => result = r)
    return result.affectedRows > 0    
}

export default {
    getAll,
    findById,
    add,
    edit,
    editPart,    
    remove,
}