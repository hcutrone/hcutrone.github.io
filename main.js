const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const sorting = document.querySelector('#sorting')
const pokebot = document.querySelector('#pokebot')
const pyHuffman = document.querySelector('#py-huffman')
const dataStructures = document.querySelector('#data-structures')
const mush = document.querySelector('#mush')
const cHuffman = document.querySelector('#c-huffman')
const unixUtils = document.querySelector('#unix-utils')
const pathing = document.querySelector('#pathing')
const passgen = document.querySelector('#passgen')
const choice = document.querySelector('#choice')
const task = document.querySelector('#task-tracker')
const verticalSlider = document.querySelector('#vertical-slider')
const webGames = document.querySelector('#web-games')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const sortingContent = document.querySelector('#sorting-content')
const pokebotContent = document.querySelector('#pokebot-content')
const passgenContent = document.querySelector('#passgen-content')
const choiceContent = document.querySelector('#choice-content')
const pyHuffmanContent = document.querySelector('#py-huffman-content')
const dataStructuresContent = document.querySelector('#data-structures-content')
const mushContent = document.querySelector('#mush-content')
const cHuffmanContent = document.querySelector('#c-huffman-content')
const unixUtilsContent = document.querySelector('#unix-utils-content')
const pathingContent = document.querySelector('#pathing-content')
const taskContent = document.querySelector('#task-tracker-content')
const verticalSliderContent = document.querySelector('#vertical-slider-content')
const webGamesContent = document.querySelector('#web-games-content')

const textColor = '#b57edc'

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'AboutMe',
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
    title: 'ContactMe',
    width: '400px',
    height: '400px',
    top: 60,
    right: 60,
    bottom: 60,
    left: 60,
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
    title: 'SortingAlgorithmVisualizer',
    width: '400px',
    height: '400px',
    top: 70,
    right: 70,
    bottom: 70,
    left: 70,
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
    top: 80,
    right: 80,
    bottom: 80,
    left: 80,
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
    top: 90,
    right: 90,
    bottom: 90,
    left: 90,
    mount: pyHuffmanContent,
    onfocus: function() {
      this.setBackground(textColor)
    },
    onblur: function() {
      this.setBackground('#777')
    },
  })
})

dataStructures.addEventListener('click', () => {
  const dataStructuresBox = new WinBox({
    title: 'DataStructures',
    width: '400px',
    height: '400px',
    top: 100,
    right: 100,
    bottom: 100,
    left: 100,
    mount: dataStructuresContent,
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
    top: 110,
    right: 110,
    bottom: 110,
    left: 110,
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
    top: 120,
    right: 120,
    bottom: 120,
    left: 120,
    mount: cHuffmanContent,
    onfocus: function() {
      this.setBackground(textColor)
    },
    onblur: function() {
      this.setBackground('#777')
    },
  })
})

unixUtils.addEventListener('click', () => {
  const unixBox = new WinBox({
    title: 'UNIX-Utilities',
    width: '400px',
    height: '400px',
    top: 130,
    right: 130,
    bottom: 130,
    left: 130,
    mount: unixUtilsContent,
    onfocus: function() {
      this.setBackground(textColor)
    },
    onblur: function() {
      this.setBackground('#777')
    },
  })
})

pathing.addEventListener('click', () => {
  const pathingBox = new WinBox({
    title: 'PathingAlgorithms',
    width: '400px',
    height: '400px',
    top: 140,
    right: 140,
    bottom: 140,
    left: 140,
    mount: pathingContent,
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
    title: 'TaskTracker',
    width: '400px',
    height: '400px',
    top: 150,
    right: 150,
    bottom: 150,
    left: 150,
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
    title: 'PasswordGenerator',
    width: '400px',
    height: '400px',
    top: 160,
    right: 160,
    bottom: 160,
    left: 160,
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
    title: 'ChoicePicker',
    width: '400px',
    height: '400px',
    top: 170,
    right: 170,
    bottom: 170,
    left: 170,
    mount: choiceContent,
    onfocus: function() {
      this.setBackground(textColor)
    },
    onblur: function() {
      this.setBackground('#777')
    },
  })
})

verticalSlider.addEventListener('click', () => {
  const vertBox = new WinBox({
    title: 'VerticalSlider',
    width: '400px',
    height: '400px',
    top: 180,
    right: 180,
    bottom: 180,
    left: 180,
    mount: verticalSliderContent,
    onfocus: function() {
      this.setBackground(textColor)
    },
    onblur: function() {
      this.setBackground('#777')
    },
  })
})

webGames.addEventListener('click', () => {
  const webGamesBox = new WinBox({
    title: 'WebGames',
    width: '400px',
    height: '400px',
    top: 190,
    right: 190,
    bottom: 190,
    left: 190,
    mount: webGamesContent,
    onfocus: function() {
      this.setBackground(textColor)
    },
    onblur: function() {
      this.setBackground('#777')
    },
  })
})