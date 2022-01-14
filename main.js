const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const sorting = document.querySelector('#sorting')
const pokebot = document.querySelector('#pokebot')
const pyHuffman = document.querySelector('#py-huffman')
const mush = document.querySelector('#mush')
const cHuffman = document.querySelector('#c-huffman')
const passgen = document.querySelector('#passgen')
const choice = document.querySelector('#choice')
const task = document.querySelector('#task-tracker')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const sortingContent = document.querySelector('#sorting-content')
const pokebotContent = document.querySelector('#pokebot-content')
const passgenContent = document.querySelector('#passgen-content')
const choiceContent = document.querySelector('#choice-content')
const pyHuffmanContent = document.querySelector('#py-huffman-content')
const mushContent = document.querySelector('#mush-content')
const cHuffmanContent = document.querySelector('#c-huffman-content')
const taskContent = document.querySelector('#task-tracker-content')

const textColor = '#b57edc'

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    background: '#00aa00',
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function() {
      this.setBackground(textColor)
    },
    onblur: function() {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 150,
    mount: contactContent,
    onfocus: function() {
      this.setBackground(textColor)
    },
    onblur: function() {
      this.setBackground('#777')
    },
  })
})

sorting.addEventListener('click', () => {
  const sortingBox = new WinBox({
    title: 'Sorting-Algorithm-Visualizer',
    width: '400px',
    height: '400px',
    top: 250,
    right: 50,
    bottom: 50,
    left: 250,
    mount: sortingContent,
    onfocus: function() {
      this.setBackground(textColor)
    },
    onblur: function() {
      this.setBackground('#777')
    },
  })
})

pokebot.addEventListener('click', () => {
  const pokebotBox = new WinBox({
    title: 'Pokebot',
    width: '400px',
    height: '400px',
    top: 350,
    right: 50,
    bottom: 50,
    left: 350,
    mount: pokebotContent,
    onfocus: function() {
      this.setBackground(textColor)
    },
    onblur: function() {
      this.setBackground('#777')
    },
  })
})

pyHuffman.addEventListener('click', () => {
  const pyHuffmanBox = new WinBox({
    title: 'HuffmanEncoder-Decoder',
    width: '400px',
    height: '400px',
    top: 350,
    right: 50,
    bottom: 50,
    left: 350,
    mount: pyHuffmanContent,
    onfocus: function() {
      this.setBackground(textColor)
    },
    onblur: function() {
      this.setBackground('#777')
    },
  })
})

mush.addEventListener('click', () => {
  const mushBox = new WinBox({
    title: 'MUSH',
    width: '400px',
    height: '400px',
    top: 350,
    right: 50,
    bottom: 50,
    left: 350,
    mount: mushContent,
    onfocus: function() {
      this.setBackground(textColor)
    },
    onblur: function() {
      this.setBackground('#777')
    },
  })
})

cHuffman.addEventListener('click', () => {
  const cHuffmanBox = new WinBox({
    title: 'HuffmanEncoder-Decoder',
    width: '400px',
    height: '400px',
    top: 350,
    right: 50,
    bottom: 50,
    left: 350,
    mount: cHuffmanContent,
    onfocus: function() {
      this.setBackground(textColor)
    },
    onblur: function() {
      this.setBackground('#777')
    },
  })
})

task.addEventListener('click', () => {
  const taskBox = new WinBox({
    title: 'Task-Tracker',
    width: '400px',
    height: '400px',
    top: 350,
    right: 50,
    bottom: 50,
    left: 350,
    mount: taskContent,
    onfocus: function() {
      this.setBackground(textColor)
    },
    onblur: function() {
      this.setBackground('#777')
    },
  })
})

passgen.addEventListener('click', () => {
  const passgenBox = new WinBox({
    title: 'Pokebot',
    width: '400px',
    height: '400px',
    top: 350,
    right: 50,
    bottom: 50,
    left: 350,
    mount: passgenContent,
    onfocus: function() {
      this.setBackground(textColor)
    },
    onblur: function() {
      this.setBackground('#777')
    },
  })
})

choice.addEventListener('click', () => {
  const choiceBox = new WinBox({
    title: 'Pokebot',
    width: '400px',
    height: '400px',
    top: 350,
    right: 50,
    bottom: 50,
    left: 350,
    mount: choiceContent,
    onfocus: function() {
      this.setBackground(textColor)
    },
    onblur: function() {
      this.setBackground('#777')
    },
  })
})