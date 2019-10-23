import articles from '../articles'

const getAll = () => {
    return articles
}

const findById = (id) => {
    const filterById = (article,i) => article.id == id
    return articles.filter(filterById)[0] || null
}

const add = article => {
    article.id = articles.length + 1
    articles.push(article)
    return true
}

const remove = id => {
    let indexOfArticle = articles.findIndex(article => article.id == id)
    if(indexOfArticle >= 0){
        articles.splice(indexOfArticle,1)
    }
    return indexOfArticle >= 0
}

export default {
    getAll,
    findById,
    add,
    remove,
}
