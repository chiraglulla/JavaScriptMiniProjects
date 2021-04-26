import Tooltip from './components/tooltip'
import Dropdown from './components/dropdown'
import Tabs from './components/tab'
import Snackbar from './components/snackbar'


// create a tooltip

const tooltip = new Tooltip(document.querySelector('#tooltip'))
tooltip.tooltip()


const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
    const dd = new Dropdown(dropdown)
    dd.initialize()
})

const tabs = new Tabs(document.querySelector('.tabs'))
tabs.initialize()

const snackbar = new Snackbar()
snackbar.initialize()

const button = document.querySelector('.snackbar-trigger')

button.addEventListener('click', () => {
    snackbar.show('You clicked me now!;)')
})
