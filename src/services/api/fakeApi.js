export const createCardRequest = async (card) => {
    if(card.name === "" || card.price === "") {
        return await new Promise(resolve => 
            setTimeout(() => {
                resolve({
                    success: false,
                    message: "Can't have name or price be empty"
                })
            }, 500)
        )
    }
    return await new Promise(resolve => 
        setTimeout(() => {
            resolve({
                success: true,
                card: card
            })
        }, 500)    
    )
}

export const deleteCardRequest = async (id) => {
    return await new Promise(resolve =>
        setTimeout(() => {
            resolve({
                success: true,
                id: id
            })
        }, 500)
    )
}

export const buyCardRequest = async (id) => {
    return await new Promise(resolve => 
        setTimeout(() => {
            resolve({
                success: true,
                id: id
            })
        })    
    )
}