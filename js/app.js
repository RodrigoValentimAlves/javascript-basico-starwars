
const LIST = [
    {
        id: 1,
        nome: 'Luke Skywalkwer',
        avatar: 'images/luke.png'
    },
    {
        id: 2,
        nome: 'Princesa Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 3,
        nome: 'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 4,
        nome: 'Darth Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 5,
        nome: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 6,
        nome: 'R2D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 7,
        nome: 'C3pO',
        avatar: 'images/c3po.png'
    },
    {
        id: 8,
        nome: 'Yoda',
        avatar: 'images/yoda.png'
    }
]

const App = new Vue ({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Rodrigo',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName} recebeu um like!`)
        },
        remove(id) {
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id
            })

            this.characters = result
        },
        search() {

            if (this.searchName === '') {
                return alert('O campo de busca é obrigatório')
            }

            const list = this.characters = LIST

            const result = list.filter(item => {
                return item.nome === this.searchName
            })
            if (result.length === 0) {
                alert('Personagem não encontrado')
            } else{
                this.characters = result
            }
        }
    }
})
