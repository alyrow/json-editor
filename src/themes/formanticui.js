import { AbstractTheme } from '../theme.js'
import rules from './formanticui.css.js'

export class formanticUi extends AbstractTheme {
  getFormInputLabel (text, req) {
    const el = super.getFormInputLabel(text, req)
    el.classList.add('je-form-input-label')
    return el
  }

  getFormInputDescription (text) {
    const el = super.getFormInputDescription(text)
    el.classList.add('je-form-input-label')
    return el
  }

  getIndentedPanel () {
    const el = super.getIndentedPanel()
    el.classList.add('je-indented-panel')
    return el
  }

  getTopIndentedPanel () {
    return this.getIndentedPanel()
  }

  getChildEditorHolder () {
    const el = super.getChildEditorHolder()
    el.classList.add('je-child-editor-holder')
    return el
  }

  getHeaderButtonHolder () {
    const el = this.getButtonHolder()
    el.classList.add('je-header-button-holder')
    return el
  }

  getTable () {
    const el = super.getTable()
    el.classList.add('je-table')
    return el
  }

  addInputError (input, text) {
    const group = this.closest(input, '.form-control') || input.controlgroup

    if (!input.errmsg) {
      input.errmsg = document.createElement('div')
      input.errmsg.setAttribute('class', 'errmsg')
      input.errmsg.style = input.errmsg.style || {}
      input.errmsg.style.color = 'red'
      group.appendChild(input.errmsg)
    } else {
      input.errmsg.style.display = 'block'
    }

    input.errmsg.innerHTML = ''
    input.errmsg.appendChild(document.createTextNode(text))
  }

  removeInputError (input) {
    if (input.style) {
      input.style.borderColor = ''
    }
    if (input.errmsg) input.errmsg.style.display = 'none'
  }

  getButtonHolder () {
    const el = document.createElement('div')
    el.classList.add('ui')
    el.classList.add('buttons')
    return el
  }

  getButton (text, icon, title) {
    const el = super.getButton(text, icon, title)
    el.classList.add('ui', 'button')
    return el
  }

  getInputGroup (input, buttons) {
    if (!input) return

    const inputGroupContainer = document.createElement('div')
    inputGroupContainer.classList.add('input-group', 'ui', 'form')
    inputGroupContainer.appendChild(input)

    const inputGroup = document.createElement('div')
    inputGroup.classList.add('input-group-btn', 'ui', 'buttons')
    inputGroupContainer.appendChild(inputGroup)

    for (let i = 0; i < buttons.length; i++) {
      inputGroup.appendChild(buttons[i])
    }

    return inputGroupContainer
  }

  getSelectInput (options, multiple) {
    const el = super.getSelectInput(options)
    el.classList.add('form-control', 'ui', 'selection', 'dropdown')
    /* el.style.width = 'auto'; */
    return el
  }

  getTextareaInput () {
    const el = document.createElement('textarea')
    el.classList.add('form-control', 'ui', 'input')
    return el
  }

  getFormControl (label, input, description, infoText) {
    const group = document.createElement('div')
    group.classList.add('form-group')

    if (label && (input.type === 'checkbox' || input.type === 'radio')) {
      const check = document.createElement('div')

      if (this.options.custom_forms === false) {
        check.classList.add('form-check')
        input.classList.add('form-check-input')
        label.classList.add('form-check-label')
      } else {
        check.classList.add('custom-control')
        input.classList.add('custom-control-input')
        label.classList.add('custom-control-label')

        if (input.type === 'checkbox') {
          check.classList.add('ui', 'checkbox')
        } else {
          check.classList.add('ui', 'radio', 'checkbox')
        }
      }

      const unique = (Date.now() * Math.random()).toFixed(0)
      input.setAttribute('id', unique)
      label.setAttribute('for', unique)

      check.appendChild(input)
      check.appendChild(label)
      if (infoText) check.appendChild(infoText)

      group.appendChild(check)
    } else {
      if (label) {
        group.appendChild(label)
        const check = document.createElement('div')
        if (input.type === 'text') {
          check.classList.add('ui', 'input')
        }
        check.appendChild(input)
        group.appendChild(check)

        if (infoText) group.appendChild(infoText)
      } else group.appendChild(input)
    }

    if (description) {
      group.appendChild(description)
    }

    return group
  }

  getFormInputField (type) {
    // const el = document.createElement('div')
    const input = document.createElement('input')
    input.setAttribute('type', type)
    /* if (type !== 'checkbox' && type !== 'radio') {
      el.classList.add('ui', 'input')
    } else if (type === 'checkbox') {
      el.classList.add('ui', 'checkbox')
    } else if (type === 'radio') {
      el.classList.add('ui', 'radio', 'checkbox')
    } */
    input.classList.add('form-control')
    // el.appendChild(input)
    return input
  }

  getModal () {
    const el = document.createElement('div')
    el.style.display = 'none'
    el.classList.add('je-modal1', 'ui', 'container', 'segment')
    return el
  }
}

/* Custom stylesheet rules. format: "selector" : "CSS rules" */
formanticUi.rules = rules
