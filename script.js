const btn = document.querySelectorAll('.buttons button')

        btn.forEach((node) => {
            node.addEventListener('mousedown', event => {
                // event.preventDefault()
                const value = node.innerText.trim()
                const $result = document.querySelector('.result')
                const resultText = $result.innerText.trim()

                if(resultText == '0' || resultText == 'undefined' || resultText == 'Infinity') {
                    $result.innerText = ''
                }

                if(value == '=') {
                    let Solution = eval(resultText)
                    $result.innerText = Solution
                    return true
                }

                if(value == 'C' || value == 'CE') {
                    $result.innerText = ''
                    return true
                }
 
                $result.append(value)
            })
        })