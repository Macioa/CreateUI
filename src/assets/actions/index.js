import Queen from 'Images/queen.jpg'

const Actions = {
    getGame: {
        boardSize: 8,
        availableTokens:{
            1: { name: 'king', image: Queen , id: 1},
            2: { name: 'queen', image: Queen, id: 2 },
            3: { name: 'rook', image: Queen, id: 3 }
        }
    }
}
export default Actions