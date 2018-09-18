import Queen from 'Images/queen.jpg'

const Actions = {
    getGame: {
        boardSize: 8,
        availableTokens:[
            { name: 'king', image: Queen },
            { name: 'queen', image: Queen },
            { name: 'rook', image: Queen }
        ]
    }
}
export default Actions